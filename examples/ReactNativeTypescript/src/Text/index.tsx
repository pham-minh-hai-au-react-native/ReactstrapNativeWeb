import React, {lazy, Suspense} from 'react';
import {Platform, Text} from 'react-native';

const TextDemoComponent = lazy(() =>
  Platform.OS === 'ios'
    ? import('./TextDemo.ios')
    : import('./TextDemo.android'),
);
export const TextDemo: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Text />}>
      <TextDemoComponent />
    </Suspense>
  );
};
