/*
# 3. 중복 상품이면 수량 증가

## 문제

장바구니에서 수량 증가 버튼과 감소 버튼을 만드세요.

조건:

수량은 1 이하로 내려가지 않게 하기
*/

import { useState } from "react";

const Map04 = () => {
  const products = [
    { id: 1, name: "맥북 프로", price: 2000000, quantity: 1 },
    { id: 2, name: "아이폰 15", price: 1500000, quantity: 2 },
  ];

  type CartItem = (typeof products)[number];

  const [cart, setCart] = useState<CartItem[]>(products);

  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleIncrease(item.id)}>증가</button>
          <span> 수량: {item.quantity} </span>
          <button onClick={() => handleDecrease(item.id)}>감소</button>
        </div>
      ))}
    </>
  );
};

export default Map04;
