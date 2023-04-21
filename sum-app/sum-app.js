class SumApp {
  numbers = [];

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    if (this.numbers.length === 0) {
      return 0;
    }
    let count = 0;
    this.numbers.forEach((element) => {
      count += element;
    });
    return count;
  }

  reset() {
    this.numbers = [];
  }
}

const sum = new SumApp();

sum.addNumber(5);
sum.addNumber(6);
console.log(sum.getSum());
