const products = {
  apples: {
    quantity: 1,
    price: 5,
  },
  bananas: {
    quantity: 2,
    price: 3,
  },
  bread: {
    quantity: 1,
    price: 4,
  },
  eggs: {
    quantity: 1,
    price: 10,
  },
};

let totalPrice = 0;

const totalPriceElement = document.getElementById('total');

document.addEventListener('DOMContentLoaded', function () {
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    const decrementButton = document.getElementById(`${product}_decrement`);
    if (incrementButton) {
      incrementButton.addEventListener('click', () => incrementQuantity(product));
    }
    if (decrementButton) {
      decrementButton.addEventListener('click', () => decrementQuantity(product));
    }
  }

  const clearCartButton = document.getElementById('cart_clear');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }

  totalPriceElement.textContent = totalPrice;
});

function addToCart(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove('hidden');
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  if (productQuantitySpan) productQuantitySpan.textContent = '0';

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');
}

function incrementQuantity(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove('hidden');
}

function decrementQuantity(product) {
  if (products[product].quantity <= 1) {
    removeFromCart(product);
    return;
  }

  products[product].quantity--;
  const newQuantity = products[product].quantity;

  totalPrice -= products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;
}

function clearCart() {
  for (const product in products) {
    if (products[product].quantity > 0) {
      removeFromCart(product);
    }
  }
}
