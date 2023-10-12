import { isEqual } from 'lodash-es';

/**
 * 生成随机字符串
 * @returns 随机字符串
 */
export function getRandomString() {
  return globalThis.crypto
    .getRandomValues(new BigInt64Array(1))[0]
    .toString(36);
}

/**
 * 在树结构中查找并返回匹配的节点以及路径
 * @param  target - 目标
 * @param  tree - 被查找的树
 * @param  [options] - 可选配置
 * @param  [options.key] - 查找的key值
 * @param  [options.childKey] - 子集的key，默认是children
 * @returns  返回匹配的节点以及路径，result  匹配的节点，path 路径，found 是否找到
 */
export function findPathInTree<T1, T2>(
  target: T2,
  tree: T1 | Array<T1>,
  options?: {
    key?: string;
    childKey?: string;
  }
): {
  result: T1 | null;
  path: Array<T1>;
  found: boolean;
} {
  const childKey = options?.childKey ?? 'children';
  const key = options?.key;
  if (Array.isArray(tree)) {
    for (const item of tree) {
      const res = findPathInTree(target, item, options);
      if (res.found) {
        return res;
      }
    }
    return { result: null, path: [], found: false };
  }
  if (
    isEqual(
      key === undefined ? tree : (tree as unknown as Record<string, T2>)[key],
      key === undefined
        ? target
        : (target as unknown as Record<string, T2>)[key]
    )
  ) {
    return { result: tree, path: [tree], found: true };
  } else {
    for (const child of ((tree as T1 & Record<string, T2>)[childKey] ??
      []) as Array<T1>) {
      const tmp = findPathInTree(target, child, options);
      if (tmp.found) {
        tmp.path.unshift(tree);
        return tmp;
      }
    }
    return { result: null, path: [], found: false };
  }
}
