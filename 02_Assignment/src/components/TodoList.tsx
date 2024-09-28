import { FC, useState } from "react";

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
  editTodo: (index: number, newTodo: string) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, editTodo }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSave = (index: number) => {
    editTodo(index, editText);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              {todo}
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
