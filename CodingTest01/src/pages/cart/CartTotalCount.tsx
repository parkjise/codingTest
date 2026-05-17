/*

문제
장바구니 전체 상품 수량 합계를 구하세요.
예:
* 수량 1개 상품
* 수량 2개 상품
* 결과는 3개
*/

const CartTotalCount = () => {
  const cart = [
    { id: 1, name: "맥북 프로", price: 2000000, quantity: 1 },
    { id: 2, name: "아이폰 15", price: 1500000, quantity: 2 },
  ];

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <h2>총 상품 개수 :{totalCount}개</h2>
    </div>
  );
};

export default CartTotalCount;
