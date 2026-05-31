import React from "react";

// 오늘의 날짜를 표시하는 Header 컴포넌트입니다.
const Header = () => {
  return (
    <div className="header">
      <h3>오늘은 📅</h3>
      {/* JavaScript의 Date 객체를 사용하여 현재 날짜를 가져오고, 
          toDateString() 메서드를 호출하여 사람이 읽기 쉬운 문자열 형태로 변환하여 출력합니다. */}
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
