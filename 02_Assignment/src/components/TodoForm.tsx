import { useState, FC } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
