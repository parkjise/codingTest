import ProductCard from "./ProductCard";
const products = [
  { id: 1, name: "맥북 프로", price: 2000000 },
  { id: 2, name: "아이폰 15", price: 1500000 },
];

// 상품의 타입을 정의합니다.
interface ProductType {
  id: number;
  name: string;
  price: number;
}

const handleAddCart = (item: ProductType) => {
  console.log("장바구니 추가", item);
};
const Product = () => {
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default Product;
