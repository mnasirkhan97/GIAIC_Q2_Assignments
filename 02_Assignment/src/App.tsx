import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index: number, newTodo: string) => {
    const updatedTodos = todos.map((todo, i) => i === index ? newTodo : todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
