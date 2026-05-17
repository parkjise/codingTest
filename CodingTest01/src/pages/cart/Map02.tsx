/*
# 2. 장바구니 추가

## 문제

상품의 “장바구니 담기” 버튼을 누르면 장바구니에 추가하세요.

조건:

- 같은 상품은 중복 추가 가능
- 장바구니 목록도 같이 출력
*/

import { useState } from "react";

const Map02 = () => {
  const products = [
    { id: 1, name: "맥북 프로", price: 2000000 },
    { id: 2, name: "아이폰 15", price: 1500000 },
    { id: 3, name: "에어팟 프로", price: 350000 },
  ];
  const [list, setList] = useState<(typeof products)[number][]>([]);
  const addToCart = (product: (typeof products)[number]) => {
    setList([...list, product]);
  };
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>장바구니</button>
        </div>
      ))}
      <h2>장바구니</h2>
      {list.map((item, idx) => (
        <div key={idx}>{item.name}</div>
      ))}
    </>
  );
};

export default Map02;
