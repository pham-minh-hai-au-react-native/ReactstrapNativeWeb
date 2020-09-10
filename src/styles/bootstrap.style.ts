import Layout from './layout/index';
import Border from './border/index';
import loadTheme from './utils/loadTheme';
import {ListDynamicTheme, ListTheme} from './types';

export const buildTheme = (listTheme?: ListDynamicTheme) => {
  const themes: ListTheme = loadTheme(listTheme);
  for (const theme in themes) {
    themes[theme].styleSheet = {
      ...themes[theme].bgColor,
      ...themes[theme].textColor,
      ...themes[theme].borderColor,
      ...themes[theme].paddingSpacer,
      ...themes[theme].marginSpacer,
      ...Layout,
      ...Border,
      ...{
        flex: {
          display: 'flex',
        },
        hidden: {
          display: 'none',
        },
      },
    };
  }
  return themes;
};
