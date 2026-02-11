const products = JSON.parse(localStorage.getItem('cartData')) || {
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
  /*refreshCart(); */

  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    // Select increment / decrement buttons for every product and add event listeners to them

    const decrementCartButton = document.getElementById(`${product}_decrement`);
    decrementCartButton.addEventListener('click', () => decrementQuantity(product));

    const incrementCartButton = document.getElementById(`${product}_increment`);
    incrementCartButton.addEventListener('click', () => addToCart(product));
  }
  const clearCartButton = document.getElementById('cart_clear');
  clearCartButton.addEventListener('click', clearCart);

  totalPriceElement.textContent = totalPrice;
  localStorage.setItem('cartData', JSON.stringify(products));
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

  localStorage.setItem('cartData', JSON.stringify(products));
}


function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');

  localStorage.setItem('cartData', JSON.stringify(products));
} 


function decrementQuantity(product) {
  if (products[product].quantity >1) {
    products[product].quantity--;
    const newQuantity = products[product].quantity;
    
    totalPrice -= products[product].price;
    totalPriceElement.textContent = totalPrice;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = newQuantity;

  } else{
    removeFromCart(product);
  }

  localStorage.setItem('cartData', JSON.stringify(products));
}


function incrementQuantity(product) {
  if (products[product].quantity <1) {
    products[product].quantity++;
    totalPrice += products[product].price;
    totalPriceElement.textContent = totalPrice;
  } else{
    addToCart(product);
  }

  localStorage.setItem('cartData', JSON.stringify(products));
}


function clearCart (){
  for (const product in products) {
    products[product].quantity = 0;
    totalPrice = 0;
    totalPriceElement.textContent = totalPrice;

    const productCartItem = document.getElementById(`${product}_cart`);
    if (productCartItem) {
      productCartItem.classList.add('hidden');
    }

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
  } if (productQuantitySpan) {
    productQuantitySpan.textContent = 0;
  }
  localStorage.setItem('cartData', JSON.stringify(products));
} 






/* ANOTHER METHOD:

function refreshCart() {
  totalPrice = 0;
  for (const product in products) {
    const data = products[product];
    const quantitySpan = document.getElementById(`${product}_quantity`);
    const cartItem = document.getElementById(`${product}_cart`);

    if (quantitySpan){
    quantitySpan.textContent = data.quantity;
    }

    if (data.quantity > 0) {
      cartItem.classList.remove('hidden');
      totalPrice += data.quantity * data.price;
    } else {
      cartItem.classList.add('hidden');
    }
  }
  totalPriceElement.textContent = totalPrice;
}


 /*function addToCart(product) {
  products[product].quantity++;
  refreshCart();
}

function removeFromCart(product) {
  products[product].quantity = 0;
  refreshCart();
}

function decrementQuantity(product) {
  if (products[product].quantity > 0) {
    products[product].quantity--;
    refreshCart();
  }
}

function clearCart() {
  for (const product in products) {
    products[product].quantity = 0;
  }
  refreshCart();
} */
