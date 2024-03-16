import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IStateProducts } from "@/models";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (url: string, thunkAPI) => {
    const response = await fetch(url, {
      signal: thunkAPI.signal,
    });

    const data: IProduct[] = await response.json();
    data.forEach((productData) => {
      productData.count = Math.floor(Math.random() * 10) + 1;
    });
    return data;
  }
);

function сalculateAmount(products: IProduct[]) {
  return products.reduce((acc, item) => acc + item.price * item.count, 0);
}

const initialState: IStateProducts = {
  products: [],
  amount: 0,
  loading: true,
  error: "",
};

const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, count: product.count + 1 }
          : product
      );
    },

    decrease: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, count: product.count - 1 }
          : product
      );
    },

    сalculateAmountOfProducts: (state) => {
      state.amount = сalculateAmount(state.products);
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.amount = сalculateAmount(action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      if (action.error.name === "AbortError") {
        state.error = "";
      } else {
        const error = new Error(
          "Извините, в данный момент сервис не работает, попробуйте позже!"
        );
        state.error = error.message;
        state.loading = false;
      }
    });
  },
});

export const { removeProduct, сalculateAmountOfProducts, increase, decrease } =
  productsSlice.actions;
export default productsSlice.reducer;
