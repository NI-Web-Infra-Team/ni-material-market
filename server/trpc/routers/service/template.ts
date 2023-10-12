import { z } from 'zod';
import { publicProcedure } from '../../trpc';

/**
 * 获取服务清单
 */
export const getServiceList = publicProcedure
  .input(
    z.object({
      /** foo 注释 */
      foo: z.number(),
      /** bar 注释 */
      bar: z.string()
    })
  )
  .mutation(({ input }) => {
    const { foo, bar } = input;

    return { foo, bar };
  });
