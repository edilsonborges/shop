export default function toggleProduct(id) {
  return {
    action: 'TOGGLE_PRODUCT',
    payload: id,
  };
}
