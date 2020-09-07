import {ListDynamicTheme, ListTheme} from '../types/index';
import theme from '../theme.style';
import {upperFirstLetter} from '../../utils/index';
const SPACER = 16;
export default (listTheme?: ListDynamicTheme): ListTheme => {
  const result: ListTheme = {};

  if (listTheme === undefined) {
    const spacerDefault = theme.spacer ?? SPACER;
    const spacer0 = 0;
    const spacer1 = spacerDefault * 0.25;
    const spacer2 = spacerDefault * 0.5;
    const spacer3 = spacerDefault;
    const spacer4 = spacerDefault * 1.5;
    const spacer5 = spacerDefault * 3;
    result.default = {
      spacer: spacerDefault,
      colors: {},
      textColor: {},
      bgColor: {},
      borderColor: {},
      marginSpacer: {
        m0: {
          margin: spacer0,
        },
        m1: {
          margin: spacer1,
        },
        m2: {
          margin: spacer2,
        },
        m3: {
          margin: spacer3,
        },
        m4: {
          margin: spacer4,
        },
        m5: {
          margin: spacer5,
        },
        mx0: {
          marginHorizontal: spacer0,
        },
        mx1: {
          marginHorizontal: spacer1,
        },
        mx2: {
          marginHorizontal: spacer2,
        },
        mx3: {
          marginHorizontal: spacer3,
        },
        mx4: {
          marginHorizontal: spacer4,
        },
        mx5: {
          marginHorizontal: spacer5,
        },
        my0: {
          marginVertical: spacer0,
        },
        my1: {
          marginVertical: spacer1,
        },
        my2: {
          marginVertical: spacer2,
        },
        my3: {
          marginVertical: spacer3,
        },
        my4: {
          marginVertical: spacer4,
        },
        my5: {
          marginVertical: spacer5,
        },
        ml0: {
          marginLeft: spacer0,
        },
        ml1: {
          marginLeft: spacer1,
        },
        ml2: {
          marginLeft: spacer2,
        },
        ml3: {
          marginLeft: spacer3,
        },
        ml4: {
          marginLeft: spacer4,
        },
        ml5: {
          marginLeft: spacer5,
        },
        mr0: {
          marginRight: spacer0,
        },
        mr1: {
          marginRight: spacer1,
        },
        mr2: {
          marginRight: spacer2,
        },
        mr3: {
          marginRight: spacer3,
        },
        mr4: {
          marginRight: spacer4,
        },
        mr5: {
          marginRight: spacer5,
        },
        mt0: {
          marginTop: spacer0,
        },
        mt1: {
          marginTop: spacer1,
        },
        mt2: {
          marginTop: spacer2,
        },
        mt3: {
          marginTop: spacer3,
        },
        mt4: {
          marginTop: spacer4,
        },
        mt5: {
          marginTop: spacer5,
        },
        mb0: {
          marginBottom: spacer0,
        },
        mb1: {
          marginBottom: spacer1,
        },
        mb2: {
          marginBottom: spacer2,
        },
        mb3: {
          marginBottom: spacer3,
        },
        mb4: {
          marginBottom: spacer4,
        },
        mb5: {
          marginBottom: spacer5,
        },
      },
      paddingSpacer: {
        p0: {
          padding: spacer0,
        },
        p1: {
          padding: spacer1,
        },
        p2: {
          padding: spacer2,
        },
        p3: {
          padding: spacer3,
        },
        p4: {
          padding: spacer4,
        },
        p5: {
          padding: spacer5,
        },
        px0: {
          paddingHorizontal: spacer0,
        },
        px1: {
          paddingHorizontal: spacer1,
        },
        px2: {
          paddingHorizontal: spacer2,
        },
        px3: {
          paddingHorizontal: spacer3,
        },
        px4: {
          paddingHorizontal: spacer4,
        },
        px5: {
          paddingHorizontal: spacer5,
        },
        py0: {
          paddingVertical: spacer0,
        },
        py1: {
          paddingVertical: spacer1,
        },
        py2: {
          paddingVertical: spacer2,
        },
        py3: {
          paddingVertical: spacer3,
        },
        py4: {
          paddingVertical: spacer4,
        },
        py5: {
          paddingVertical: spacer5,
        },
        pl0: {
          paddingLeft: spacer0,
        },
        pl1: {
          paddingLeft: spacer1,
        },
        pl2: {
          paddingLeft: spacer2,
        },
        pl3: {
          paddingLeft: spacer3,
        },
        pl4: {
          paddingLeft: spacer4,
        },
        pl5: {
          paddingLeft: spacer5,
        },
        pr0: {
          paddingRight: spacer0,
        },
        pr1: {
          paddingRight: spacer1,
        },
        pr2: {
          paddingRight: spacer2,
        },
        pr3: {
          paddingRight: spacer3,
        },
        pr4: {
          paddingRight: spacer4,
        },
        pr5: {
          paddingRight: spacer5,
        },
        pt0: {
          paddingTop: spacer0,
        },
        pt1: {
          paddingTop: spacer1,
        },
        pt2: {
          paddingTop: spacer2,
        },
        pt3: {
          paddingTop: spacer3,
        },
        pt4: {
          paddingTop: spacer4,
        },
        pt5: {
          paddingTop: spacer5,
        },
        pb0: {
          paddingBottom: spacer0,
        },
        pb1: {
          paddingBottom: spacer1,
        },
        pb2: {
          paddingBottom: spacer2,
        },
        pb3: {
          paddingBottom: spacer3,
        },
        pb4: {
          paddingBottom: spacer4,
        },
        pb5: {
          paddingBottom: spacer5,
        },
      },
      styleSheet: {},
    };
    result.default.colors = theme.colors;
    for (const propertyColor in theme.colors) {
      result.default.textColor[`text${upperFirstLetter(propertyColor)}`] = {
        color: theme.colors[propertyColor],
      };
      result.default.bgColor[`bg${upperFirstLetter(propertyColor)}`] = {
        backgroundColor: theme.colors[propertyColor],
      };
      result.default.borderColor[`border${upperFirstLetter(propertyColor)}`] = {
        borderColor: theme.colors[propertyColor],
      };
    }
    result.default.styleSheet = {
      ...result.default.bgColor,
      ...result.default.textColor,
      ...result.default.borderColor,
      ...result.default.paddingSpacer,
      ...result.default.marginSpacer,
    };
    return result;
  }
  listTheme.default.colors = listTheme.hasOwnProperty('default')
    ? {...theme.colors, ...listTheme.default.colors}
    : theme.colors;
  listTheme.default.spacer = listTheme.hasOwnProperty('default')
    ? listTheme.default.spacer
    : theme.spacer;
  for (const propertyTheme in listTheme) {
    const spacerDefault = listTheme[propertyTheme].spacer ?? SPACER;
    const spacer0 = 0;
    const spacer1 = spacerDefault * 0.25;
    const spacer2 = spacerDefault * 0.5;
    const spacer3 = spacerDefault;
    const spacer4 = spacerDefault * 1.5;
    const spacer5 = spacerDefault * 3;
    result[propertyTheme] = {
      ...listTheme[propertyTheme],
      ...{
        textColor: {},
        bgColor: {},
        borderColor: {},
        marginSpacer: {
          m0: {
            margin: spacer0,
          },
          m1: {
            margin: spacer1,
          },
          m2: {
            margin: spacer2,
          },
          m3: {
            margin: spacer3,
          },
          m4: {
            margin: spacer4,
          },
          m5: {
            margin: spacer5,
          },
          mx0: {
            marginHorizontal: spacer0,
          },
          mx1: {
            marginHorizontal: spacer1,
          },
          mx2: {
            marginHorizontal: spacer2,
          },
          mx3: {
            marginHorizontal: spacer3,
          },
          mx4: {
            marginHorizontal: spacer4,
          },
          mx5: {
            marginHorizontal: spacer5,
          },
          my0: {
            marginVertical: spacer0,
          },
          my1: {
            marginVertical: spacer1,
          },
          my2: {
            marginVertical: spacer2,
          },
          my3: {
            marginVertical: spacer3,
          },
          my4: {
            marginVertical: spacer4,
          },
          my5: {
            marginVertical: spacer5,
          },
          ml0: {
            marginLeft: spacer0,
          },
          ml1: {
            marginLeft: spacer1,
          },
          ml2: {
            marginLeft: spacer2,
          },
          ml3: {
            marginLeft: spacer3,
          },
          ml4: {
            marginLeft: spacer4,
          },
          ml5: {
            marginLeft: spacer5,
          },
          mr0: {
            marginRight: spacer0,
          },
          mr1: {
            marginRight: spacer1,
          },
          mr2: {
            marginRight: spacer2,
          },
          mr3: {
            marginRight: spacer3,
          },
          mr4: {
            marginRight: spacer4,
          },
          mr5: {
            marginRight: spacer5,
          },
          mt0: {
            marginTop: spacer0,
          },
          mt1: {
            marginTop: spacer1,
          },
          mt2: {
            marginTop: spacer2,
          },
          mt3: {
            marginTop: spacer3,
          },
          mt4: {
            marginTop: spacer4,
          },
          mt5: {
            marginTop: spacer5,
          },
          mb0: {
            marginBottom: spacer0,
          },
          mb1: {
            marginBottom: spacer1,
          },
          mb2: {
            marginBottom: spacer2,
          },
          mb3: {
            marginBottom: spacer3,
          },
          mb4: {
            marginBottom: spacer4,
          },
          mb5: {
            marginBottom: spacer5,
          },
        },
        paddingSpacer: {
          p0: {
            padding: spacer0,
          },
          p1: {
            padding: spacer1,
          },
          p2: {
            padding: spacer2,
          },
          p3: {
            padding: spacer3,
          },
          p4: {
            padding: spacer4,
          },
          p5: {
            padding: spacer5,
          },
          px0: {
            paddingHorizontal: spacer0,
          },
          px1: {
            paddingHorizontal: spacer1,
          },
          px2: {
            paddingHorizontal: spacer2,
          },
          px3: {
            paddingHorizontal: spacer3,
          },
          px4: {
            paddingHorizontal: spacer4,
          },
          px5: {
            paddingHorizontal: spacer5,
          },
          py0: {
            paddingVertical: spacer0,
          },
          py1: {
            paddingVertical: spacer1,
          },
          py2: {
            paddingVertical: spacer2,
          },
          py3: {
            paddingVertical: spacer3,
          },
          py4: {
            paddingVertical: spacer4,
          },
          py5: {
            paddingVertical: spacer5,
          },
          pl0: {
            paddingLeft: spacer0,
          },
          pl1: {
            paddingLeft: spacer1,
          },
          pl2: {
            paddingLeft: spacer2,
          },
          pl3: {
            paddingLeft: spacer3,
          },
          pl4: {
            paddingLeft: spacer4,
          },
          pl5: {
            paddingLeft: spacer5,
          },
          pr0: {
            paddingRight: spacer0,
          },
          pr1: {
            paddingRight: spacer1,
          },
          pr2: {
            paddingRight: spacer2,
          },
          pr3: {
            paddingRight: spacer3,
          },
          pr4: {
            paddingRight: spacer4,
          },
          pr5: {
            paddingRight: spacer5,
          },
          pt0: {
            paddingTop: spacer0,
          },
          pt1: {
            paddingTop: spacer1,
          },
          pt2: {
            paddingTop: spacer2,
          },
          pt3: {
            paddingTop: spacer3,
          },
          pt4: {
            paddingTop: spacer4,
          },
          pt5: {
            paddingTop: spacer5,
          },
          pb0: {
            paddingBottom: spacer0,
          },
          pb1: {
            paddingBottom: spacer1,
          },
          pb2: {
            paddingBottom: spacer2,
          },
          pb3: {
            paddingBottom: spacer3,
          },
          pb4: {
            paddingBottom: spacer4,
          },
          pb5: {
            paddingBottom: spacer5,
          },
        },
        styleSheet: {},
      },
    };
    for (const propertyColor in listTheme[propertyTheme].colors) {
      result[propertyTheme].textColor[
        `text${upperFirstLetter(propertyColor)}`
      ] = {
        color: listTheme[propertyTheme].colors[propertyColor],
      };
      result[propertyTheme].bgColor[`bg${upperFirstLetter(propertyColor)}`] = {
        backgroundColor: listTheme[propertyTheme].colors[propertyColor],
      };
      result[propertyTheme].borderColor[
        `border${upperFirstLetter(propertyColor)}`
      ] = {
        borderColor: listTheme[propertyTheme].colors[propertyColor],
      };
    }
    result[propertyTheme].styleSheet = {
      ...result[propertyTheme].bgColor,
      ...result[propertyTheme].textColor,
      ...result[propertyTheme].borderColor,
      ...result[propertyTheme].paddingSpacer,
      ...result[propertyTheme].marginSpacer,
    };
  }
  return result;
};
