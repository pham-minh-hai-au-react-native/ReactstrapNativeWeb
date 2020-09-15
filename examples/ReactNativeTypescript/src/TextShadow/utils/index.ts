import type {CssTextShadow, PropsTextShadow} from '../types/index';
import {
  CSSShadowException,
  HorizontalOffsetRequired,
  NotFoundColorShadow,
  NotSupportUnitEm,
  NotSupportUnitPercent,
  NotSupportUnitRem,
  RedundantColorShadow,
  TypeColorException,
  UnknownUnit,
  VerticalOffsetRequired,
} from '../errors/index';
const colorRegex = require('colors-regex');

export const getColorValid = (color: string): string => {
  if (color.includes('rgba')) {
    const isRgbaValid = colorRegex.rgba.strict.test(color);
    if (isRgbaValid === false) {
      throw new TypeColorException('rgba', color);
    }
  } else if (color.includes('rgb')) {
    const isRgbValid = colorRegex.rgb.strict.test(color);
    if (isRgbValid === false) {
      throw new TypeColorException('rgb', color);
    }
  } else if (color.includes('hsla')) {
    const isHslaValid = colorRegex.hsla.strict.test(color);
    if (isHslaValid === false) {
      throw new TypeColorException('hsla', color);
    }
  } else if (color.includes('hsl')) {
    const isHslValid = colorRegex.hsl.strict.test(color);
    if (isHslValid === false) {
      throw new TypeColorException('hsl', color);
    }
  } else if (color.includes('#')) {
    const isHexColor = colorRegex.hex.strict.test(color.toLowerCase());
    if (isHexColor === false) {
      throw new TypeColorException('hex', color);
    }
  }
  return color;
};
export const getCssShadow = (cssShadow: string): CssTextShadow => {
  const arrCssShadow = cssShadow.split(/ (?![^\(]*\))/);
  const arrCssShadowRemoveElemetWhiteSpace = arrCssShadow.filter(
    (item: string) => item !== '',
  );
  const [
    firstColor,
    ...restColor
  ] = arrCssShadowRemoveElemetWhiteSpace.filter((item: string): boolean =>
    ['rgb', 'rgba', 'hsl', 'hsla', '#'].some((typeColor: string): boolean =>
      item.startsWith(typeColor),
    ),
  );
  if (firstColor === undefined) {
    throw new NotFoundColorShadow();
  } else if (restColor.length > 0) {
    throw new RedundantColorShadow();
  }
  const arrCssShadowRemoveColor = arrCssShadowRemoveElemetWhiteSpace.filter(
    (item: string): boolean =>
      ['rgb', 'rgba', 'hsl', 'hsla', '#'].every(
        (typeColor: string): boolean => item.startsWith(typeColor) === false,
      ),
  );
  const [
    horizontalOffset,
    verticalOffset,
    blurRadius,
    ...rest
  ] = arrCssShadowRemoveColor
    .filter((item: string) => {
      if (item.includes('px')) {
        return !isNaN(parseFloat(item.split('px')[0]));
      } else if (item.includes('rem')) {
        throw new NotSupportUnitRem();
      } else if (item.includes('em')) {
        throw new NotSupportUnitEm();
      } else if (item.includes('%')) {
        throw new NotSupportUnitPercent();
      } else if (item.match(/[^0-9]/)) {
        throw new UnknownUnit();
      }
      return !isNaN(parseFloat(item));
    })
    .map((item: string) => parseFloat(item));
  if (horizontalOffset === undefined) {
    throw new HorizontalOffsetRequired();
  } else if (verticalOffset === undefined) {
    throw new VerticalOffsetRequired();
  } else if (rest.length > 0) {
    throw new CSSShadowException();
  }

  return {
    color: getColorValid(firstColor),
    horizontalOffset: parseFloat(String(horizontalOffset)),
    verticalOffset: parseFloat(String(verticalOffset)),
    blurRadius: !blurRadius
      ? 1
      : parseFloat(String(blurRadius)) === 0
      ? 1
      : parseFloat(String(blurRadius)),
  };
};
export const getArrayTextShadow = (
  textShadow: string,
): Array<PropsTextShadow> => {
  const result: Array<PropsTextShadow> = [];
  const removeSemiColon = textShadow.replace(';', '');
  const listTextShadow = removeSemiColon.split(/,(?![^\(]*\))/);
  const arrayCssShadow: Array<CssTextShadow> = listTextShadow.map(
    (item: string) => getCssShadow(item),
  );
  arrayCssShadow.forEach((item: CssTextShadow) => {
    result.push({
      textShadowColor: item.color,
      textShadowRadius: item.blurRadius,
      textShadowOffset: {
        width: item.horizontalOffset,
        height: item.verticalOffset,
      },
    });
  });
  return result;
};
