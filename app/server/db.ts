type Todo = {
  id: number;
  description: string;
  dateAdded: string;
  done: boolean;
};

export const todos: Todo[] = [
  {
    id: 1,
    description: "Buy milk",
    dateAdded: new Date().toDateString(),
    done: false,
  },
  {
    id: 2,
    description: "Wash the dishes",
    dateAdded: new Date().toDateString(),
    done: true,
  },
];
