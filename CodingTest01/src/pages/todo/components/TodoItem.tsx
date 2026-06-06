type TodoItemProps = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};
const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="todoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
