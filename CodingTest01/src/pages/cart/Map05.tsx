/*
# 3. 중복 상품이면 수량 증가

## 문제

장바구니에서 특정 상품을 삭제하세요.


*/

import { useState } from "react";

const Map05 = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "맥북 프로", price: 2000000, quantity: 1 },
    { id: 2, name: "아이폰 15", price: 1500000, quantity: 2 },
  ]);
  const handleDelete = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleDelete(item.id)}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default Map05;
