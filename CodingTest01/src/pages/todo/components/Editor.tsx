import React, { useRef, useState } from "react";

// 부모 컴포넌트(TodoList)로부터 전달받는 Props의 타입을 정의합니다.
// onCreate는 문자열(content)을 받아 아무것도 반환하지 않는 함수입니다.
interface EditorProps {
  onCreate: (content: string) => void;
}

const Editor = ({ onCreate }: EditorProps) => {
  // 사용자가 입력한 할 일 텍스트를 저장하는 State입니다.
  const [content, setContent] = useState("");
  
  // HTML 입력창(input) 요소에 직접 접근하기 위한 Ref입니다. (포커스 이동에 사용)
  const contentRef = useRef<HTMLInputElement>(null);
  
  // 사용자가 입력창에 글씨를 칠 때마다 호출되는 함수입니다.
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력창의 현재 값(e.target.value)을 content State에 저장합니다.
    setContent(e.target.value);
  };
  
  // 입력창에서 키보드를 눌렀을 때 호출되는 함수입니다.
  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 누른 키가 "Enter"키라면 onsubmit 함수를 실행하여 할 일을 추가합니다.
    if (e.key === "Enter") {
      onsubmit();
    }
  };
  
  // '추가' 버튼을 누르거나 엔터를 쳤을 때 실행되는 함수입니다.
  const onsubmit = () => {
    // 아무것도 입력하지 않았다면 추가하지 않고 입력창으로 포커스만 이동시킵니다.
    if (content === "") {
      contentRef.current?.focus();
      return;
    }
    // 부모로부터 받은 onCreate 함수를 실행하여 새로운 할 일을 부모에게 전달합니다.
    onCreate(content);
    // 추가가 완료되면 다음 입력을 위해 입력창(content State)을 비워줍니다.
    setContent("");
  };

  return (
    <div className="editor">
      <input
        ref={contentRef} // 포커스 관리를 위해 ref 연결
        value={content} // 제어 컴포넌트: 입력창의 보이는 값과 상태를 일치시킵니다.
        onChange={onChangeContent} // 글씨가 변경될 때마다 실행
        type="text"
        placeholder="새로운 Todo"
        onKeyDown={onKeydown} // 키보드 입력 감지
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};

export default Editor;
