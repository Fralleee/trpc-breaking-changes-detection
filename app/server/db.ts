type Todo = {
  id: number;
  content: string;
  dateAdded: string;
  done: boolean;
};

export const todos: Todo[] = [
  {
    id: 1,
    content: "Buy milk",
    dateAdded: new Date().toDateString(),
    done: false,
  },
  {
    id: 2,
    content: "Wash the dishes",
    dateAdded: new Date().toDateString(),
    done: true,
  },
];
