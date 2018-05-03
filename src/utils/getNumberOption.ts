import { defaultTo } from 'lodash';

export default (value: any, defaultValue: number): number => {
  return defaultTo<number>(Number(value), defaultValue);
};
