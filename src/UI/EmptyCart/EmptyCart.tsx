import { Box, Typography } from "@mui/material";

/**
 * Компонент используется для отображения пустой корзины
 */

export function EmptyCart() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="subtitle1" component="div" sx={{ mb: 6 }}>
        Ваша корзина пуста.
      </Typography>
      <img src="/empty-cart.svg" alt="Empty cart" width={300} />
    </Box>
  );
}
