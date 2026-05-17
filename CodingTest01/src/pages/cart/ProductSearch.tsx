/*

문제

검색어를 입력하면 상품 이름에 포함된 상품만 보여주세요.

조건:

대소문자 구분 없이 검색
*/

import { useState } from "react";

const ProductSearch = () => {
  const [keyword, setKeyword] = useState("");
  const products = [
    { id: 1, name: "MacBook Pro" },
    { id: 2, name: "iPhone 15" },
    { id: 3, name: "MacBook Air" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );
  /*
    products.filter(...): 조건에 맞는 상품만 새 배열로 만듦
    product.name.toLowerCase(): 상품 이름을 소문자로 바꿈
    keyword.toLowerCase(): 입력한 검색어도 소문자로 바꿈
    includes(...): 상품 이름에 검색어가 포함되어 있는지 확인
  */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="검색어 입력"
        value={keyword}
        onChange={handleChange}
      />
      {filteredProducts.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ProductSearch;
