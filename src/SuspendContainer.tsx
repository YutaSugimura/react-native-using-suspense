import React, {PropsWithChildren, Suspense} from 'react';
import {Text} from 'react-native';

type Props = {
  fallbackText: string;
};

export const SuspendContainer: React.FC<PropsWithChildren<Props>> = ({
  fallbackText,
  children,
}) => {
  return <Suspense fallback={<Text>{fallbackText}</Text>}>{children}</Suspense>;
};
