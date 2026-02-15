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

const totalPriceElement = document.getElementById("total");

const resetButton = document.getElementById(`cart_clear`);
resetButton.addEventListener("click", resetCart);

document.addEventListener("DOMContentLoaded", function () {
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener("click", () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener("click", () => removeFromCart(product));

    // Select increment / decrement buttons for every product and add event listeners to them

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () => decrementCart(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () => addToCart(product));
  }

  updateTotal();
  loadCart();
});

function addToCart(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  updateTotal();

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove("hidden");
  saveCart();
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  updateTotal();

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add("hidden");
  saveCart();
}

function decrementCart(product) {
  const productQuantitySpan = document.getElementById(`${product}_quantity`);

  const productCartItem = document.getElementById(`${product}_cart`);

  products[product].quantity--;
  totalPrice -= products[product].price;
  const newQuantity = products[product].quantity;
  productQuantitySpan.textContent = newQuantity;
  updateTotal();

  if (newQuantity <= 0) {
    productCartItem.classList.add("hidden");
    updateTotal();
    saveCart();
    return;
  }

  productCartItem.classList.remove("hidden");

  saveCart();
}

function resetCart() {
  totalPrice = 0;
  for (const product in products) {
    products[product].quantity = 0;

    document.getElementById(`${product}_quantity`).textContent = 0;
    document.getElementById(`${product}_cart`).classList.add("hidden");
  }

  updateTotal();

  localStorage.removeItem("cart");
  saveCart();
}

function updateTotal() {
  totalPriceElement.textContent = totalPrice;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(products));
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");

  if (storedCart === null) {
    return;
  }

  const parsedCart = JSON.parse(storedCart);

  totalPrice = 0;

  for (const product in parsedCart) {
    products[product].quantity = parsedCart[product].quantity;

    const quantity = products[product].quantity;
    const price = products[product].price;

    totalPrice += quantity * price;

    document.getElementById(`${product}_quantity`).textContent = quantity;

    if (quantity > 0) {
      document.getElementById(`${product}_cart`).classList.remove("hidden");
    } else {
      document.getElementById(`${product}_cart`).classList.add("hidden");
    }
  }

  updateTotal();
}
