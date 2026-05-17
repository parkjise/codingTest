import React, { useState } from "react";
/*
    전체 선택 / 전체 해제
문제

장바구니에서 전체 선택 버튼을 누르면 모든 상품이 선택되고, 다시 누르면 모두 해제되게 하세요.
*/

const cartDatas = [
  { id: 1, name: "맥북 프로", checked: false },
  { id: 2, name: "아이폰 15", checked: false },
  { id: 3, name: "에어팟 프로", checked: false },
];

const CartCheckAll = () => {
  const [cart, setCart] = useState(cartDatas);
  const allChecked = cart.every((item) => item.checked);

  const handleAllCheck = () => {
    setCart(cart.map((item) => ({ ...item, checked: !allChecked })));
  };

  const handleSingleCheck = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div>
      <button onClick={handleAllCheck}>
        {allChecked ? "전체해제" : "전체선택"}
      </button>
      {cart.map((item) => (
        <div key={item.id}>
          <input
            checked={item.checked}
            type="checkbox"
            onChange={() => handleSingleCheck(item.id)}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default CartCheckAll;
