"use client";

import { useState } from "react";
import { trpc } from "./_trpc/client";
import type { serverClient } from "./_trpc/server-client";

export default function Todos({ initialData }: { initialData: Awaited<ReturnType<(typeof serverClient)["todo"]["getTodos"]>> }) {
  const result = trpc.todo.getTodos.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const addTodo = trpc.todo.addTodo.useMutation({ onSettled: () => result.refetch() });

  const setDone = trpc.todo.setDone.useMutation({ onSettled: () => result.refetch() });

  const [content, setContent] = useState("");

  return (
    <main className="max-w-lg mx-auto my-12 accent-orange-600 text-slate-100">
      <h1 className="text-3xl">TRPC Breaking Changes Detection</h1>
      <ul className="my-5">
        {result.data.map(todo => (
          <li className="flex gap-3 items-center" key={todo.id}>
            <input name="done" checked={todo.done} onChange={e => setDone.mutate({ id: todo.id, done: e.target.checked })} type="checkbox" />
            <label htmlFor="done" className={`${todo.done ? "line-through text-slate-500" : ""}`}>
              {todo.description}
            </label>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <input
          className="flex-grow bg-slate-100 text-slate-700 rounded-sm px-4 py-2"
          id="content"
          placeholder="What needs to be done?"
          onChange={e => setContent(e.target.value)}
          value={content}
        />
        <button
          className="bg-orange-600 font-bold py-2 px-4 rounded-sm text-slate-100"
          onClick={() => {
            if (content.length) {
              addTodo.mutate({ content });

              setContent("");
            }
          }}
          type="button">
          Add todo
        </button>
      </div>
    </main>
  );
}
