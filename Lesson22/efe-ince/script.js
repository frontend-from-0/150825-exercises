const products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 1,
    price: 1,
  },
  bread: {
    quantity: 1,
    price: 1,
  },
  eggs: {
    quantity: 1,
    price: 1,
  },
};

let totalPrice = 0;

const totalPriceElement = document.getElementById('total');

document.addEventListener('DOMContentLoaded', function () {
  const savedCart = localStorage.getItem('myCart');
if (savedCart) {
  const parsedCart = JSON.parse(savedCart);
  Object.assign(products, parsedCart);
}
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    const incBtn = document.getElementById(`${product}_increment`);
    const decBtn = document.getElementById(`${product}_decrement`);

    if (incBtn) incBtn.addEventListener('click', () => updateQuantity(product, 1));
    if (decBtn) decBtn.addEventListener('click', () => updateQuantity(product, -1));
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
  saveToLocalStorage();
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');
  saveToLocalStorage();
}
function updateQuantity(product, change) {
  if (products[product].quantity + change >= 0) {
    products[product].quantity += change;
    totalPrice += change * products[product].price;

    document.getElementById(`${product}_quantity`).textContent = products[product].quantity;
    totalPriceElement.textContent = totalPrice;

    if (products[product].quantity === 0) {
      document.getElementById(`${product}_cart`).classList.add('hidden');
    } else {
      document.getElementById(`${product}_cart`).classList.remove('hidden');
    }
  }
  saveToLocalStorage();
}
const clearCartButton = document.getElementById('cart_clear');

clearCartButton.addEventListener('click', function() {
  for (const product in products) {
    products[product].quantity = 0;
    document.getElementById(`${product}_quantity`).textContent = 0;
    document.getElementById(`${product}_cart`).classList.add('hidden');
  }
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;
});
function saveToLocalStorage() {
  localStorage.setItem('myCart', JSON.stringify(products));
}

