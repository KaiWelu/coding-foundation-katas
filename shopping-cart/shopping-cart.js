class ShoppingCart {
  cart = [];

  addToCart(description, price, quantity) {
    this.cart.push({
      description: description,
      price: price,
      quantity: quantity,
    });
  }

  getCartPrice() {
    let sum = 0;
    this.cart.forEach((element) => {
      sum += element.price * element.quantity;
    });
    return sum;
  }

  removeFromCart(description, quantity) {
    if (arguments.length === 1) {
      this.cart.forEach((element, index) => {
        if (element.description === description) {
          this.cart.splice(index, 1);
        }
      });
    } else {
      this.cart.forEach((element) => {
        if (element.description === description) {
          element.quantity -= quantity;
        }
      });
    }
  }
}

const exampleCart = new ShoppingCart();
exampleCart.addToCart("Kirschen", 2, 4);
console.log(exampleCart.cart);
console.log(typeof exampleCart.cart);
console.log(exampleCart.removeFromCart("Kirschen", 3));
console.log(exampleCart.cart);
