import React, { useState } from "react";

const WishListToggle = () => {
  const products = [
    { id: 1, name: "맥북 프로", liked: false },
    { id: 2, name: "아이폰 15", liked: false },
  ];
  const [product, setProduct] = useState(products);
  const handleClick = (id: number) => {
    setProduct(
      product.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item,
      ),
    );
  };
  return (
    <div>
      {product.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleClick(item.id)}>
            {item.liked ? "찜 취소" : "찜 하기"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default WishListToggle;
