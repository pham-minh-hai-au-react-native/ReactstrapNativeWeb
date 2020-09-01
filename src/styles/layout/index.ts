import {LayoutFollowParent} from './layoutFollowParent.style';
import {LayoutFollowViewport} from './layoutFollowViewport.style';

export const Layout = (width: number, height: number) => {
  const layoutFollowViewport: object = LayoutFollowViewport(width, height);
  return {
    ...layoutFollowViewport,
    ...LayoutFollowParent,
  };
};
export {LayoutFollowParent, LayoutFollowViewport};
