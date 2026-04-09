let products = {
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
const clearCartButton = document.getElementById("cart_clear");

function saveCartToLocalStorage() {
  localStorage.setItem("savedcart", JSON.stringify(products));
  localStorage.setItem("savedtotalprice", totalPrice);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedCart = localStorage.getItem("savedcart");
  if (savedCart) {
    products = JSON.parse(savedCart);
  }

  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    if (products[product].quantity === 0) {
      const productCartItem = document.getElementById(`${product}_cart`);
      if (productCartItem) {
        productCartItem.classList.add("hidden");
      }
    }

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener("click", () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener("click", () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () => decrementQuantity(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () => addToCart(product));
  }
  clearCartButton.addEventListener("click", clearCart);

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
  productCartItem.classList.remove("hidden");
  saveCartToLocalStorage();
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add("hidden");
  saveCartToLocalStorage();
}

function decrementQuantity(product) {
  if (products[product].quantity > 0) {
    products[product].quantity--;
    const updatedQuantity = products[product].quantity;

    totalPrice -= products[product].price;
    totalPriceElement.textContent = totalPrice;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = updatedQuantity;

    if (updatedQuantity === 0) {
      const productCartItem = document.getElementById(`${product}_cart`);
      productCartItem.classList.add("hidden");
    }

    saveCartToLocalStorage();
  }
}

function clearCart() {
  for (const product in products) {
    products[product].quantity = 0;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;
    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.add("hidden");
  }
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;

  saveCartToLocalStorage();
}
