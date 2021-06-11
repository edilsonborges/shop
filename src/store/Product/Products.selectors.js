export const selectAllProducts = (state) => state.product;
export const selectSelectedProducts = (state) =>
  state.product.filter((product) => product.checked);
export const selectSelectedProductsTotalPrice = (state) =>
  state.product
    .filter((product) => product.checked)
    .reduce((a, b) => a + b.price, 0);
