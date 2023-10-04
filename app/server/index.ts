import { router } from "@/server/trpc";
import { todoRouter } from "@/server/routes/todo";

export const appRouter = router({
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
