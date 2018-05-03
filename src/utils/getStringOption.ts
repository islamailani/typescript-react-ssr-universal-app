import { defaultTo } from 'lodash';

export default (value: any, defaultValue = ''): string => {
  return defaultTo<string>(value, defaultValue);
};
