
class ShoppingCart {
  #items;
  #total;

  constructor() {
    this.#items = [];
    this.#total = 0;
  }
 
  viewCart() {
    console.log('Viewing the cart');

    for (const item of this.#items) {
      console.log(
        `Name: ${item.name}, Price: ${item.price.amount} ${item.price.currency} Quantity: ${item.quantity}`,
      );
    }
  }

  addItem(newItem) {
    console.log(
      `Adding a new item to the cart. Item name ${newItem.name}, quantity: ${newItem.quantity}`,
    );
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name.includes(newItem.name)) {
        this.#items[i].quantity++;
         this.#total += newItem.price.amount;
        return;
      }
    }

    this.#items.push(newItem);
    this.#total += newItem.price.amount;
  }

  removeItem(name) {
    console.log(`Removing an item from the cart. Item name ${name}.`);
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name === name) {
        this.#total -= this.#items[i].price.amount;
        this.#items.splice(i, 1);
        console.log(`Removed item ${name}.`);
      }
    }
  }
  
  get total() {
    console.log(`The total of the all products: ${this.#total}`);
    return this.#total;
  }

  applyDiscount(code) {
    const validCodes = {
      'SAVE10': 10,
      'SAVE20': 20
    };

    const discountPercent = validCodes[code.toUpperCase()];

    if (discountPercent) {
      const discountAmount = (this.#total * discountPercent) / 100;
      this.#total -= discountAmount;
      console.log(`Coupon Applied! New Total: ${this.#total}`);
    } else {
      console.log('Invalid coupon code.');
    }
  }
}

const shoppingCart1 = new ShoppingCart();
shoppingCart1.viewCart();
shoppingCart1.addItem({
  name: 'Tablet',
  price: { amount: 1000, currency: 'USD' },
  quantity: 1,
});

shoppingCart1.viewCart();
shoppingCart1.addItem({
  name: 'Tablet',
  price: { amount: 1000, currency: 'USD' },
  quantity: 1,
});
shoppingCart1.addItem({
  name: 'Monitor',
  price: { amount: 500, currency: 'USD' },
  quantity: 2,
});
shoppingCart1.viewCart();
shoppingCart1.total;

shoppingCart1.removeItem('Tablet');
shoppingCart1.viewCart();
shoppingCart1.total;

shoppingCart1.applyDiscount('SAVE10');
shoppingCart1.total;

shoppingCart1.applyDiscount('SAVE20');
shoppingCart1.total;



