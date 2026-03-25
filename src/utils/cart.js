export function getCartTotal(cart) {
  return cart.reduce((total, item) => {
    const quantity = item.quantity || 1;
    return total + item.price * quantity;
  }, 0);
}