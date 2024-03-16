import { IProductCardProps } from "./ProductCard.props";
import { useAppDispatch } from "@/hooks";
import {
  removeProduct,
  сalculateAmountOfProducts,
  increase,
  decrease,
} from "@/store/products.slice";
import { truncateString } from "@/utils";

import {
  Typography,
  Paper,
  ButtonBase,
  Badge,
  Button,
  ButtonGroup,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/**
 * Компонент карточки товара с функциями удаления и уменьшения/увеличения количества товара
 * @example <ProductCard product={product} />
 * @param {IProductCardProps} product - объект товара
 */

export function ProductCard({ product }: IProductCardProps) {
  const { id, image, title, description, price, count } = product;
  const dispatch = useAppDispatch();

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  function handleRemove() {
    dispatch(removeProduct(id));
    dispatch(сalculateAmountOfProducts());
  }

  const handleDecrease = () => {
    dispatch(decrease(id));
    dispatch(сalculateAmountOfProducts());
  };

  const handleIncrease = () => {
    dispatch(increase(id));
    dispatch(сalculateAmountOfProducts());
  };

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt={title} src={image} />
            </ButtonBase>
          </Grid>
          <Grid xs={12} sm container>
            <Grid xs container direction="column" spacing={2}>
              <Grid xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {truncateString(description, 180)}
                </Typography>
              </Grid>
              <Grid>
                <ButtonGroup>
                  <Button onClick={handleDecrease} disabled={count === 1}>
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Badge color="primary" badgeContent={count}></Badge>
                  <Button onClick={handleIncrease} disabled={count === 10}>
                    <AddIcon fontSize="small" />
                  </Button>
                  <Button
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={handleRemove}
                  >
                    Удалить
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" component="div">
                {`${price}$`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
