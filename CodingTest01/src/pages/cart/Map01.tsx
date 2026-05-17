/*
문제

아래 상품 배열을 화면에 출력하세요.

조건:

name, price 표시
map() 사용
key 사용
const products = [
  { id: 1, name: "맥북 프로", price: 2000000 },
  { id: 2, name: "아이폰 15", price: 1500000 },
  { id: 3, name: "에어팟 프로", price: 350000 },
];
*/

const Map01 = () => {
  const products = [
    { id: 1, name: "맥북 프로", price: 2000000 },
    { id: 2, name: "아이폰 15", price: 1500000 },
    { id: 3, name: "에어팟 프로", price: 350000 },
  ];
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
};

export default Map01;
