type Todo = {
  id: number;
  content: string;
  done: boolean;
};

export const todos: Todo[] = [
  {
    id: 1,
    content: "Buy milk",
    done: false,
  },
  {
    id: 2,
    content: "Wash the dishes",
    done: true,
  },
];
