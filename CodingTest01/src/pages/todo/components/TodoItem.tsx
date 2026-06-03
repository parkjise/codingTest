type TodoItemProps = {
  isDone: boolean;
  content: string;
  date: number;
};
const TodoItem = ({ isDone, content, date }: TodoItemProps) => {
  return (
    <div className="todoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
