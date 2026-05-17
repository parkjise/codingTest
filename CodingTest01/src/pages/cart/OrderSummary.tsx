/* 
    14. 주문 요약 정보 만들기
문제

장바구니 기준으로 아래 정보를 출력하세요.

조건:

총 상품 종류 수
총 수량
총 금액
*/

const cart = [
  { id: 1, name: "맥북 프로", price: 2000000, quantity: 1 },
  { id: 2, name: "아이폰 15", price: 1500000, quantity: 2 },
];
const OrderSummary = () => {
  const totalKinds = cart.length;
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <p>상품 종류 수:{totalKinds} </p>
      <p>총 수량:{totalCount} </p>
      <p>총 금액: {totalPrice}원</p>
    </div>
  );
};

export default OrderSummary;
