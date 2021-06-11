import productsMock from '../../mocks/products.json';

export default function (state = productsMock, action) {
  switch (action.type) {
    default:
      return state;
  }
}
