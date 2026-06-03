import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./styles/styles.css";

// 초기 화면에 렌더링될 임시 데이터(Mock Data)입니다.
const mockData = [
  {
    id: 1,
    isDone: false, // 할 일 완료 여부
    content: "React 공부하기", // 할 일 내용
    date: new Date().getTime(), // 생성된 시간(타임스탬프)
  },
  {
    id: 2,
    isDone: false,
    content: " 빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

const TodoList = () => {
  // 할 일 목록을 관리하는 State입니다. 초기값으로 임시 데이터를 넣어줍니다.
  const [todos, setTodos] = useState(mockData);

  // 새로 추가될 할 일의 고유 ID를 생성하기 위해 useRef를 사용합니다.
  // mockData에 이미 1, 2, 3이 있으므로 4부터 시작합니다.
  // State와 달리 값이 변경되어도 컴포넌트가 리렌더링되지 않습니다.
  const idRef = useRef(4);

  // 새로운 할 일을 추가하는 함수입니다. (Editor 컴포넌트로 전달됨)
  const onCreate = (content: string) => {
    // 1. 새로운 할 일 객체를 생성합니다.
    const newTodo = {
      id: idRef.current++, // 현재 idRef 값을 사용하고 1을 증가시킵니다.
      isDone: false, // 처음 만들어질 때는 당연히 완료되지 않은 상태(false)입니다.
      content: content, // 사용자가 입력한 내용
      date: new Date().getTime(), // 현재 시간
    };
    // 2. 기존의 할 일 배열(todos) 맨 앞에 새로운 할 일을 추가하여 상태를 업데이트합니다.
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      {/* 화면의 제목(오늘 날짜)을 보여주는 영역 */}
      <Header />

      {/* 할 일을 입력하고 추가하는 영역 (자식에게 onCreate 함수를 전달) */}
      <Editor onCreate={onCreate} />

      {/* 추가된 할 일 목록들을 보여주는 영역 (추후 todos 배열을 넘겨줄 수 있습니다) */}
      <List todos={todos} />
    </div>
  );
};

export default TodoList;
