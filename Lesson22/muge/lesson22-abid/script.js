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
    const savedCart = JSON.parse(localStorage.getItem('shoppingCart'));
  if (savedCart) {
    for (const key in savedCart) {
      if (products[key]) {
        products[key].quantity = savedCart[key].quantity;
      }
    }
    totalPrice = 0;
  }
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    if(incrementButton) {
        incrementButton.addEventListener('click', () => addToCart(product));
    }

    const decrementButton = document.getElementById(`${product}_decrement`);
    if(decrementButton) {
        decrementButton.addEventListener('click', () => decrementCart(product));
    }

    const productCartItem = document.getElementById(`${product}_cart`);
    if(products[product].quantity === 0) {
        productCartItem.classList.add('hidden');
    } else {
        productCartItem.classList.remove('hidden');
    }


    // Select increment / decrement buttons for every product and add event listeners to them
  }

  totalPriceElement.textContent = totalPrice;

  const clearButton = document.getElementById('cart_clear');
  clearButton.addEventListener('click', clearCart);
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

function decrementCart(product) {
  if (products[product].quantity > 0) {
    products[product].quantity--;
    const newQuantity = products[product].quantity;

    totalPrice -= products[product].price;
    totalPriceElement.textContent = totalPrice;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = newQuantity;

    if (newQuantity === 0) {
        const productCartItem = document.getElementById(`${product}_cart`);
        productCartItem.classList.add('hidden');
    }
    saveToLocalStorage();
  }
}

function clearCart() {
  for (const product in products) {
    products[product].quantity = 0;
    
    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.add('hidden');
  }

  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;

  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(products));
}