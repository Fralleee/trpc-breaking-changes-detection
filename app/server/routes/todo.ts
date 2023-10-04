import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";
import { todos as initialData } from "@/server/db";

let todos = [...initialData];

export const todoRouter = router({
  getTodos: publicProcedure.query(() => {
    return todos;
  }),
  addTodo: publicProcedure.input(z.string()).mutation(({ input }) => {
    todos.push({
      id: todos.length + 1,
      content: input,
      done: false,
    });
    return true;
  }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.boolean(),
      })
    )
    .mutation(({ input }) => {
      todos = todos.map(todo => {
        if (todo.id === input.id) {
          return { ...todo, done: input.done };
        }
        return todo;
      });
    }),
});
