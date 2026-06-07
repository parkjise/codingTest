// import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

// 할 일 데이터 1개의 형태(타입)를 정의합니다.
type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
};

// 부모 컴포넌트(TodoList)로부터 전달받을 Props의 형태를 정의합니다.
type ListProps = {
  todos: Todo[]; // 전체 할 일 배열
  onUpdate: (targetId: number) => void; // 체크박스를 눌렀을 때 실행될 함수
  onDelete: (id: number) => void; // 삭제 버튼을 눌렀을 때 실행될 함수
};

const List = ({ todos, onUpdate, onDelete }: ListProps) => {
  // 사용자가 입력한 검색어를 저장하는 State입니다.
  const [search, setSearch] = useState("");
  
  // 검색어 입력창의 글씨가 바뀔 때마다 실행되어 search State를 업데이트합니다.
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  // 전체 할 일 목록(todos) 중에서, 검색어(search)가 포함된 할 일들만 걸러내는(필터링) 함수입니다.
  const getFilteredData = () => {
    // 검색어가 비어있다면 필터링할 필요 없이 전체 목록을 반환합니다.
    if (search === "") {
      return todos;
    }
    // 검색어가 있다면, 소문자로 변환하여 비교한 후 포함된 것들만 새 배열로 반환합니다.
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  // 실제로 화면에 그려질(필터링이 완료된) 할 일 목록입니다.
  const filteredTodos = getFilteredData();
  
  return (
    <div className="list">
      <h4>Todo List ✅</h4>
      <input
        value={search} // 제어 컴포넌트 (검색어 상태와 동기화)
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {/* 필터링된 배열을 map 함수로 순회하면서 각각의 TodoItem 컴포넌트를 만들어냅니다. */}
        {filteredTodos.map((todo) => (
          // key는 리액트가 리스트를 효율적으로 렌더링하기 위해 꼭 필요한 고유값입니다.
          // {...todo}는 todo 객체 안의 속성들을 한 번에 모두 Props로 넘겨주는 자바스크립트 문법입니다.
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default List;
