/*

문제

장바구니에 담긴 상품들의 총 금액을 계산하세요.

조건:

* price * quantity 합계
* reduce() 사용
*/

const CartTotal = () => {
  const cart = [
    { id: 1, name: "맥북 프로", price: 2000000, quantity: 1 },
    { id: 2, name: "아이폰 15", price: 1500000, quantity: 2 },
  ];

  const totalCount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h2>총 금액 :{totalCount}</h2>
    </div>
  );
};

export default CartTotal;
