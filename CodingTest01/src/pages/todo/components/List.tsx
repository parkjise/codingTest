// import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
};
type ListProps = {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (id: number) => void;
};
const List = ({ todos, onUpdate, onDelete }: ListProps) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();
  return (
    <div className="list">
      <h4>Todo List ✅</h4>
      <input
        value={search}
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default List;
