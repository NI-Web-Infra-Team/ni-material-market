import { isString, isError, isObject } from 'lodash-es';

/**
 * 处理错误信息
 * @param e 错误信息
 * @returns 错误信息
 */
export function errorHandler(e: any) {
  if (isError(e)) {
    return e.message;
  }
  if (isObject(e)) {
    return JSON.stringify(e, null, 2);
  }
  if (isString(e)) {
    return e;
  }
  return String(e);
}
