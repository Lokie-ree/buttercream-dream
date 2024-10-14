export const addItemToCart = (cartItems, item) => {
  console.log("Adding item:", item);
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    console.log("Item exists. Updating quantity.");
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: Number(cartItem.quantity) + Number(item.quantity),
          }
        : cartItem
    );
  } else {
    console.log("Item does not exist. Adding new item.");
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
  console.log("Updated items in updateItemQuantity:", updatedItems);
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

export const getTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
};
