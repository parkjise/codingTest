import React, { useState } from "react";

type Todo = {
  id: number;
  keyword: string;
  completed: boolean;
};

const TodoAdd = () => {
  const [keyword, setKeword] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = () => {
    if (!keyword.trim()) return;
    const newTodo = {
      id: Date.now(),
      keyword,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setKeword("");
  };
  const onhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeword(e.target.value);
  };
  return (
    <div>
      <input
        value={keyword}
        onChange={onhandleChange}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.keyword}</div>
      ))}
    </div>
  );
};

export default TodoAdd;
