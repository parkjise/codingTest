/*
    카테고리 버튼을 눌렀을 때 해당 카테고리 상품만 보여주세요.
*/
import { useState } from "react";

const CategoryFilter = () => {
  const categories = ["전체", "노트북", "모바일"] as const;
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("전체");
  const products = [
    { id: 1, name: "맥북 프로", category: "노트북" },
    { id: 2, name: "아이폰 15", category: "모바일" },
    { id: 3, name: "맥북 에어", category: "노트북" },
  ];

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleClick = (category: (typeof categories)[number]) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default CategoryFilter;
