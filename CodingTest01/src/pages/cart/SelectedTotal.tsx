import React, { useState } from "react";
/*
	문제
체크한 상품만 총 금액에 포함되게 하세요.
*/

const SelectedTotal = () => {
  const products = [
    { id: 1, name: "맥북 프로", price: 2000000, quantity: 1, checked: false },
    { id: 2, name: "아이폰 15", price: 1500000, quantity: 2, checked: false },
  ];
  const [cart, setCart] = useState(products);

  const handleCheck = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const selectedTotal = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          {item.name} / {item.price}
        </div>
      ))}
      <h2>선택상품 총 금액 {selectedTotal}원</h2>
    </div>
  );
};

export default SelectedTotal;
