import React from 'react';
import {Text} from 'react-native';
import {atom, selector, useRecoilValue} from 'recoil';

const sleep = (ms: number) => {
  return new Promise(r =>
    setTimeout(() => {
      return r('ok');
    }, ms),
  );
};

const countState = atom({
  key: 'countState',
  default: 0,
});

const asyncPowState = selector({
  key: 'asyncPowState',
  get: async ({get}) => {
    await sleep(1800);
    const num = get(countState);
    return num ** num;
  },
});

export const RecoilSuspend: React.FC = () => {
  const num = useRecoilValue(asyncPowState);

  return <Text>Number is {num}</Text>;
};
