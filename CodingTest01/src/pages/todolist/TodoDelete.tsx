import React, { useState } from "react";

const listData = [
  { id: 1, text: "리액트 공부", completed: false },
  { id: 2, text: "운동하기", completed: false },
  { id: 3, text: "티비뵈", completed: false },
];

const TodoDelete = () => {
  const [lists, setLists] = useState(listData);

  const handleDelete = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>
          {list.text}
          <button onClick={() => handleDelete(list.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default TodoDelete;
