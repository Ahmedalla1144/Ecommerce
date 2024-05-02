import React from "react";
import Link from "next/link";
import getProducts from "../lib/getProducts";

export default async function Categories() {
  const categories: string[] = [];
  const products = await getProducts();
  products.products.map(({ category }: Product) => {
    const capitalizedString: string =
      category.charAt(0).toUpperCase() + category.slice(1);
    if (categories.indexOf(capitalizedString) === -1) {
      return categories.push(capitalizedString);
    }
  });

  console.log(categories);
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center py-5">
      <Link
        href={`/products`}
        className="px-2 border text-white text-lg text-center rounded-md me-2 hover:text-black hover:bg-white transition-all"
      >
        All
      </Link>
      {categories.map((category, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <Link
              href={`/products/${category}`}
              className="px-2 border text-white text-lg text-center rounded-md me-2 hover:text-black hover:bg-white transition-all"
            >
              {category}
            </Link>
            {index < categories.length - 1 && (
              <div className="w-[2px] h-[20px] bg-white"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
