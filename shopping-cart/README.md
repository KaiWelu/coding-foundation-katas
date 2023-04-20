# ShoppingCart

You will implement a shopping cart class.

The ShoppingCart can add items with the `addToCart()` method.

The signature is `addToCart(description, price, quantity)` - where `description` is a string, `price` and `quantity` is a number.

The ShoppingCart has a method `getCartPrice()` which returns the current price of the cart as a number.

The ShoppingCart has a method `removeFromCart()` that will return a specific item from the cart.

The `removeFromCart(description)` method can be called with only the `description` as a parameter that will remove an item completly.

The `removeFromCart(description, quantity)` method can also be called with with an additional quantity that will only remove an item by the specified quantity.

## addToCart method

```js
const cart = new ShoppingCart();
cart.addToCart("Tomato", 1, 5);
const price = cart.getCartPrice();
console.log(price); // 5
```

```js
const cart = new ShoppingCart();
cart.addToCart("Tomato", 1, 5);
cart.addToCart("Apple", 0.5, 2);
const price = cart.getCartPrice();
console.log(price); // 6
```

## removeFromCart method

```js
const cart = new ShoppingCart();

cart.addToCart("Tomato", 1, 5);

let price = cart.getCartPrice();
console.log(price); // 5

cart.removeFromCart("Tomato");
price = cart.getCartPrice();
console.log(price); // 0
```

```js
const cart = new ShoppingCart();

cart.addToCart("Tomato", 1, 5);

let price = cart.getCartPrice();
console.log(price); // 5

cart.removeFromCart("Tomato", 2);
price = cart.getCartPrice();
console.log(price); // 3
```
