import { IProduct } from "@/models";

import { ProductCard } from "@/components";

import Stack from "@mui/material/Stack";

/**
 * Компонент списка карточек товаров
 * @example <ProductList products={products} />
 * @param {IProduct[]} products - массив с товарами
 */

export function ProductList({ products }: { products: IProduct[] }) {
  return (
    <Stack spacing={2}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Stack>
  );
}
