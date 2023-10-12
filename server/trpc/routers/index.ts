import { router } from '../trpc';
import { getServiceList } from './service/template';

export const appRouter = router({
  getServiceList
});

export type AppRouter = typeof appRouter;
