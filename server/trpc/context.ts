import { inferAsyncReturnType } from '@trpc/server';
import type { H3Event } from 'h3';

/**
 * 创建上下文
 * @param event H3Event
 * @returns 自定义上下文
 */
export function createContext(event: H3Event) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  const { authorization } = getHeaders(event);
  return {
    authorization
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
