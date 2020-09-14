import React, {Suspense, lazy} from 'react';
import {Text, Platform} from 'react-native';
import {Props} from './types';
const TextShadowComponent = lazy(() =>
  Platform.OS === 'ios'
    ? import('./TextShadow.ios')
    : import('./TextShadow.android'),
);
export const TextShadow: React.FC<Props> = (
  props: Props,
): React.ReactElement => {
  return (
    <Suspense fallback={<Text />}>
      <TextShadowComponent {...props} />
    </Suspense>
  );
};
