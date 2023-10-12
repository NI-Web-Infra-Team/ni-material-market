import { initTRPC } from '@trpc/server';
import type { Context } from './context';

const t = initTRPC.context<Context>().create();

const customCtx = t.middleware(({ next, ctx }) => {
  return next({
    ctx: {
      authorization: ctx.authorization
    }
  });
});

// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure.use(customCtx);
