describe("ShoppingCart", function () {
  it("ShoppingCart should have addToCart method", function () {
    const shoppingCart = new ShoppingCart();
    chai.expect(shoppingCart).to.have.property("addToCart");
    chai.expect(typeof shoppingCart.addToCart).to.equal("function");
  });

  it("ShoppingCart should have getCartPrice method", function () {
    const shoppingCart = new ShoppingCart();
    chai.expect(shoppingCart).to.have.property("getCartPrice");
    chai.expect(typeof shoppingCart.getCartPrice).to.equal("function");
  });

  it("getCartPrice method should return correct cart price", function () {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addToCart("Tomato", 1, 2);
    chai.expect(shoppingCart.getCartPrice()).to.equal(2);
  });

  it("getCartPrice method should return correct cart price", function () {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addToCart("Tomato", 1, 2);
    shoppingCart.addToCart("Apple", 0.5, 5);
    chai.expect(shoppingCart.getCartPrice()).to.equal(4.5);
  });

  it("ShoppingCart should have removeFromCart method", function () {
    const shoppingCart = new ShoppingCart();
    chai.expect(shoppingCart).to.have.property("removeFromCart");
    chai.expect(typeof shoppingCart.removeFromCart).to.equal("function");
  });

  it("removeFromCart method should remove all items of a kind", function () {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addToCart("Tomato", 1, 2);
    shoppingCart.addToCart("Apple", 0.5, 5);
    chai.expect(shoppingCart.getCartPrice()).to.equal(4.5);
    shoppingCart.removeFromCart("Tomato");
    chai.expect(shoppingCart.getCartPrice()).to.equal(2.5);
  });

  it("removeFromCart method should remove items of a kind by quantity", function () {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addToCart("Tomato", 1, 2);
    shoppingCart.addToCart("Apple", 0.5, 5);
    chai.expect(shoppingCart.getCartPrice()).to.equal(4.5);
    shoppingCart.removeFromCart("Tomato", 1);
    chai.expect(shoppingCart.getCartPrice()).to.equal(3.5);
  });
});
