/*
# 3. 중복 상품이면 수량 증가

## 문제

장바구니에 같은 상품을 다시 담으면 새 항목을 추가하지 말고 수량만 증가시키세요.
*/

import { useState } from "react";

const Map03 = () => {
  const products = [
    { id: 1, name: "맥북 프로", price: 2000000 },
    { id: 2, name: "아이폰 15", price: 1500000 },
    { id: 3, name: "에어팟 프로", price: 350000 },
  ];
  type Product = (typeof products)[number];
  type CartItem = Product & { quantity: number };

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
      {cart.map((item, idx) => (
        <div key={idx}>
          {item.name} / 수량 {item.quantity}
        </div>
      ))}
    </>
  );
};

export default Map03;
