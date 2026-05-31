import React from "react";

// 상품 객체의 타입 정의
interface ProductType {
  id: number;
  name: string;
  price: number;
}

// 컴포넌트가 받는 props(속성들)의 타입 정의
interface ProductCardProps {
  product: ProductType;
  onAddCart: (item: ProductType) => void; // 함수 타입: ProductType을 받아서 아무것도 반환하지 않음(void)
}

const ProductCard = ({ product, onAddCart }: ProductCardProps) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <button onClick={() => onAddCart(product)}>장바구니 담기</button>
    </div>
  );
};

export default ProductCard;
