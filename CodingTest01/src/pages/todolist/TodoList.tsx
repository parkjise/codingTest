const todos = [
  { id: 1, text: "리액트 공부", completed: false },
  { id: 2, text: "운동하기", completed: true },
];

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <span> /{todo.completed ? "완료" : "미완료"} </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
