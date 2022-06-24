import React from 'react';
import {Text} from 'react-native';

const sleep = (ms: number) => {
  return new Promise(r =>
    setTimeout(() => {
      return r('ok');
    }, ms),
  );
};

const fetch = async () => {
  await sleep(1800);
  return 'ok';
};

let data: number;

const useNumber = () => {
  if (data === undefined) {
    throw fetch().then(() => {
      data = 63;
    });
  }

  return data;
};

export const DataLoader: React.FC = () => {
  const number = useNumber();

  return <Text>{`Number is ${number}`}</Text>;
};
