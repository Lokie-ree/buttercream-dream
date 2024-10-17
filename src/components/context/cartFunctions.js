export const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: Number(cartItem.quantity) + Number(item.quantity),
          }
        : cartItem
    );
  } else {
    return [...cartItems, { ...item, quantity: Number(item.quantity) }];
  }
};

export const removeItemFromCart = (cartItems, itemId) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemId);
};

export const updateItemQuantity = (cartItems, itemId, quantity) => {
  const updatedItems = cartItems.map((cartItem) =>
    cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
  );
  return updatedItems;
};

export const updateItemVariant = (cartItems, itemId, newVariant) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === itemId) {
      const newId = `${cartItem.productId}-${newVariant.variantName}`;
      return {
        ...cartItem,
        id: newId,
        variant: newVariant,
        price: newVariant.price,
      };
    }
    return cartItem;
  });
};

export const clearCart = () => {
  return [];
};

export const getSubtotal = (cartItems) => {
  return cartItems.reduce(
    (subtotal, cartItem) => subtotal + cartItem.price * cartItem.quantity,
    0
  );
};
