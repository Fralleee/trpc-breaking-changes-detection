type Todo = {
  id: number;
  content: string;
  user: string;
  done: boolean;
};

export const todos: Todo[] = [
  {
    id: 1,
    content: "Buy milk",
    user: "Frank",
    done: false,
  },
  {
    id: 2,
    content: "Wash the dishes",
    user: "Randy",
    done: true,
  },
];
