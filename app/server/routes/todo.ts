import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";
import { todos as initialData } from "@/server/db";

let todos = [...initialData];

export const todoRouter = router({
  getTodos: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/todo.getTodos",
      },
    })
    .input(z.void())
    .output(z.array(z.object({ id: z.number(), content: z.string(), dateAdded: z.string(), done: z.boolean() })))
    .query(() => {
      return todos;
    }),
  addTodo: publicProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/todo.addTodo",
      },
    })
    .input(z.object({ content: z.string() }))
    .output(z.boolean())
    .mutation(({ input }) => {
      todos.push({
        id: todos.length + 1,
        content: input.content,
        dateAdded: new Date().toDateString(),
        done: false,
      });
      return true;
    }),
  setDone: publicProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/todo.setDone",
      },
    })
    .input(
      z.object({
        id: z.number(),
        done: z.boolean(),
      })
    )
    .output(z.void())
    .mutation(({ input }) => {
      todos = todos.map(todo => {
        if (todo.id === input.id) {
          return { ...todo, done: input.done };
        }
        return todo;
      });
    }),
});
