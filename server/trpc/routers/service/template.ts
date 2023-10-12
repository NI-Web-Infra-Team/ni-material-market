import { z } from 'zod';
import { mapValues } from 'lodash-es';
import { publicProcedure } from '../../trpc';
import type { Template } from '~/types/service.d';
import { errorHandler } from '~/utils/error';

/**
 * 获取服务清单
 */
export const getServiceList = publicProcedure
  .input(
    z.object({
      /** 页码 */
      page: z.number(),
      /** 每页条数 */
      size: z.number()
    })
  )
  .mutation(async ({ input, ctx }) => {
    const runtimeConfig = useRuntimeConfig();
    const { page, size } = input;
    const params = new URLSearchParams(
      mapValues({ page, size }, val => String(val))
    );

    try {
      return {
        ...(await fetch(`${runtimeConfig.SERVER_PATH}/service?${params}`, {
          headers: { Authorization: ctx.authorization! }
        }).then(res => res.json()))
      } as { count: number; results: Template[] };
    } catch (e: any) {
      throw createError({ statusCode: 500, message: errorHandler(e) });
    }
  });
