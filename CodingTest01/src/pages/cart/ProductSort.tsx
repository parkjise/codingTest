/*
  10. 가격 정렬
문제

가격 낮은순 / 높은순 정렬 기능을 만드세요.
*/
import { useState } from "react";

const ProductSort = () => {
  const sortOptions = [
    { label: "낮은순", value: "low" },
    { label: "높은순", value: "high" },
  ] as const;
  const [selectedSortOrder, setSelectedSortOrder] = useState<
    (typeof sortOptions)[number]["value"]
  >("low");
  const products = [
    { id: 1, name: "키보드", price: 30000 },
    { id: 2, name: "마우스", price: 20000 },
    { id: 3, name: "모니터", price: 150000 },
  ];

  const sortedProductsByPrice = [...products].sort((firstProduct, secondProduct) =>
    selectedSortOrder === "low"
      ? firstProduct.price - secondProduct.price
      : secondProduct.price - firstProduct.price,
  );

  const handleSortChange = (
    sortOrder: (typeof sortOptions)[number]["value"],
  ) => {
    setSelectedSortOrder(sortOrder);
  };

  return (
    <>
      {sortOptions.map((sortOption) => (
        <button
          key={sortOption.value}
          onClick={() => handleSortChange(sortOption.value)}
        >
          {sortOption.label}
        </button>
      ))}

      {sortedProductsByPrice.map((product) => (
        <div key={product.id}>
          {product.name} / {product.price}
        </div>
      ))}
    </>
  );
};

export default ProductSort;
