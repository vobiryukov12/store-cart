import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchProducts } from "@/store/products.slice";
import { truncateToTwo } from "@/utils";

import { EmptyCart } from "@/UI";
import { ProductList } from "@/components";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper, CircularProgress, Alert, Stack } from "@mui/material";

/**
 * Компонент корзины
 */

export function Cart() {
  const dispatch = useAppDispatch();
  const { products, loading, error, amount } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    const promise = dispatch(fetchProducts(import.meta.env.VITE_PRODUCTS_URL));
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <Box>
      {products?.length > 0 ? (
        <Grid container spacing={2}>
          <Grid xs={12} md={9} order={{ xs: 2, md: 1 }}>
            <ProductList products={products} />
          </Grid>
          <Grid xs={12} md={3} order={{ xs: 1, md: 2 }}>
            <Stack spacing={2}>
              <Paper sx={{ p: 2, fontSize: "20px" }}>
                Итого: {truncateToTwo(amount)}$
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loading && <CircularProgress disableShrink />}
          {error && <Alert severity="error">{error}</Alert>}
          {!loading && !error && <EmptyCart />}
        </Box>
      )}
    </Box>
  );
}
