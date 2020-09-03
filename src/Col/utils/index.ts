import {CommonNumberColumn, NumberOffsetColumn} from '../types/index';

export const convertNumberColumnToPercent = (
  number: CommonNumberColumn,
): string => {
  let percent: string = 'auto';
  switch (number) {
    case '1':
      percent = '8.333333%';
      break;
    case '2':
      percent = '16.666667%';
      break;
    case '3':
      percent = '25%';
      break;
    case '4':
      percent = '33.333333%';
      break;
    case '5':
      percent = '41.666667%';
      break;
    case '6':
      percent = '50%';
      break;
    case '7':
      percent = '58.333333%';
      break;
    case '8':
      percent = '66.666667%';
      break;
    case '9':
      percent = '75%';
      break;
    case '10':
      percent = '83.333333%';
      break;
    case '11':
      percent = '91.666667%';
      break;
    case '12':
      percent = '100%';
      break;
    case 'auto':
    default:
      return percent;
  }
  return percent;
};

export const getStyleColumn = (number: CommonNumberColumn): object => {
  const styleNormal = {
    position: 'relative',
    paddingHorizontal: 15,
  };
  const percent = convertNumberColumnToPercent(number);
  if (percent === 'auto') {
    return {
      ...styleNormal,
      ...{
        width: 'auto',
        maxWidth: '100%',
      },
    };
  }
  return {
    ...styleNormal,
    ...{
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: percent,
      maxWidth: percent,
    },
  };
};
export const getStyleOffset = (offset: NumberOffsetColumn): object => {
  const percent = convertNumberColumnToPercent(offset);
  if (percent === 'auto') {
    return {
      marginLeft: 0,
    };
  }
  return {
    marginLeft: percent,
  };
};
