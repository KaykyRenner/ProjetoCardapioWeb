class CartItem {
  constructor(name, price, buttonMoreSelector, buttonLessSelector, quantitySelector) {
    this.name = name;
    this.price = price;
    this.buttonMore = document.querySelector(buttonMoreSelector);
    this.buttonLess = document.querySelector(buttonLessSelector);
    this.quantity = document.querySelector(quantitySelector);
    this.count = 0;
    this.totalPrice = 0;

    this.updateQuantity();
    this.updatePrice();
  }

  increment() {
    this.count++;
    this.totalPrice += this.price;
    this.updateQuantity();
    this.updatePrice();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.totalPrice -= this.price;
      this.updateQuantity();
      this.updatePrice();
    }
  }

  updateQuantity() {
    this.quantity.innerHTML = this.count;
  }

  updatePrice() {
    // Optional: update total price in the cart (handled separately in Cart)
  }
}

class Cart {
  constructor(ulSelector) {
    this.ul = document.querySelector(ulSelector);
    this.items = [];
    this.totalValue = 0;
    this.itemCount = 0;
  }

  addItem(item) {
    const itemExists = this.items.some(cartItem => cartItem.name === item.name);
    if (!itemExists) {
      this.items.push(item);
    }
  }

  updateCart() {
    this.ul.innerHTML = ''; // Clear the list before adding items
    this.items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'ListaDeComida';
      li.innerHTML = item.name;
      this.ul.appendChild(li);
    });

    document.querySelector('.item').innerHTML = `Your Cart(${this.itemCount}), total: $${this.totalValue.toFixed(2)}`;
  }

  addToCart(item) {
    item.increment();
    this.itemCount++;
    this.totalValue += item.price;
    this.updateCart();
  }

  removeFromCart(item) {
    item.decrement();
    this.itemCount--;
    this.totalValue -= item.price;
    this.updateCart();
  }
}

// Initialize Cart and CartItems
const cart = new Cart('.tarefas');

const item1 = new CartItem('Waffle with Berries', 6.50, '.ButtonMais1', '.ButtonMenos1', '.quantidade1');
const item2 = new CartItem('Vanilla Bean Crème Brûlée', 7.00, '.ButtonMais2', '.ButtonMenos2', '.quantidade2');
const item3 = new CartItem('Macaron Mix of Five', 8.00, '.ButtonMais3', '.ButtonMenos3', '.quantidade3');
const item4 = new CartItem('Classic Tiramisu', 5.50, '.ButtonMais4', '.ButtonMenos4', '.quantidade4');
const item5 = new CartItem('Pistachio Baklava', 4.00, '.ButtonMais5', '.ButtonMenos5', '.quantidade5');
const item6 = new CartItem('Lemon Meringue Pie', 5.00, '.ButtonMais6', '.ButtonMenos6', '.quantidade6');
const item7 = new CartItem('Red Velvet Cake', 4.50, '.ButtonMais7', '.ButtonMenos7', '.quantidade7');
const item8 = new CartItem('Salted Caramel Brownie', 4.50, '.ButtonMais8', '.ButtonMenos8', '.quantidade8');
const item9 = new CartItem('Vanilla Panna Cotta', 6.50, '.ButtonMais9', '.ButtonMenos9', '.quantidade9');

// Event Listener
document.addEventListener('click', e => {
  const el = e.target;
  if (el.classList.contains('comprar1')) {
    cart.addItem(item1);
    item1.increment();
    item1.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar2')) {
    cart.addItem(item2);
    item2.increment();
    item2.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar3')) {
    cart.addItem(item3);
    item3.increment();
    item3.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar4')) {
    cart.addItem(item4);
    item4.increment();
    item4.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar5')) {
    cart.addItem(item5);
    item5.increment();
    item5.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar6')) {
    cart.addItem(item6);
    item6.increment();
    item6.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar7')) {
    cart.addItem(item7);
    item7.increment();
    item7.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar8')) {
    cart.addItem(item8);
    item8.increment();
    item8.updateQuantity();
    cart.updateCart();
  }
  if (el.classList.contains('comprar9')) {
    cart.addItem(item9);
    item9.increment();
    item9.updateQuantity();
    cart.updateCart();
  }
});
