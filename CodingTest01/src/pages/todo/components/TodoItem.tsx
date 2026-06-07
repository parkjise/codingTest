// 부모 컴포넌트(List)로부터 개별 할 일 1개의 정보와 관련된 함수들을 전달받을 Props의 타입입니다.
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
  
  // 체크박스를 클릭했을 때 실행되는 함수입니다.
  const onChangeCheckbox = () => {
    // 부모로부터 받은 onUpdate 함수에 현재 자신의 id를 넣어 실행시킵니다.
    // (부모가 전체 배열에서 이 id를 가진 할 일의 isDone 상태를 반전시켜 줄 것입니다.)
    onUpdate(id);
  };

  return (
    <div className="todoItem">
      <input
        onChange={onChangeCheckbox} // 클릭 시 상태 반전 함수 실행
        readOnly // React에서는 onChange가 있으면 readOnly를 빼는 것이 일반적이지만, 여기서는 onChange로 부모 상태를 바꾸고 그 결과를 isDone(checked)로 받기 때문에 이렇게 작성되어 있습니다.
        checked={isDone} // 부모로부터 받은 완료 여부에 따라 체크박스가 그려집니다.
        type="checkbox"
      />
      {/* 할 일의 내용을 표시합니다. */}
      <div className="content">{content}</div>
      
      {/* 타임스탬프(숫자)로 되어 있는 날짜를, 사람이 읽을 수 있는 '202X. X. X.' 형태로 변환하여 표시합니다. */}
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      
      {/* 삭제 버튼을 누르면 부모로부터 받은 onDelete 함수에 자신의 id를 넣어 실행시킵니다. */}
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
