
const products = {
  apples: { quantity: 1, price: 1 },
  bananas: { quantity: 1, price: 1 },
  bread: { quantity: 1, price: 1 },
  eggs: { quantity: 1, price: 1 },
};

let totalPrice = 0;
const totalPriceElement = document.getElementById('total');

//  start initialization and event listeners 
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
    incrementButton.addEventListener('click', () => incrementQuantity(product));

    const decreaseButton = document.getElementById(`${product}_decrement`);
    decreaseButton.addEventListener('click', () => decreaseQuantity(product));
  }

  totalPriceElement.textContent = totalPrice;

  const clearcartButton = document.getElementById('cart_clear');
  clearcartButton.addEventListener('click', () => clearCart());
});

// (addtocartbutton)
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
// (removefromcartbutton)
function removeFromCart(product) {
  const oldQuantity = products[product].quantity;
  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');
}
// (decrementbutton)
function decreaseQuantity(product) {
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
}
// (incrementbutton)
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
// (clearcartbutton)
function clearCart() {
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;

  for (const product in products) {
    products[product].quantity = 0; 

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = 0; 

    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.add('hidden'); 
  }
}


