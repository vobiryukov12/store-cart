import { Cart } from "@/components";
import { Container, Box, Typography } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Корзина
        </Typography>
      </Box>

      <Cart />
    </Container>
  );
}
