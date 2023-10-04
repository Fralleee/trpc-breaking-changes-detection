import { serverClient } from "./_trpc/server-client";
import Todos from "./todos";

export default async function Page() {
  const items = await serverClient.todo.getTodos();

  return <Todos initialData={items} />;
}
