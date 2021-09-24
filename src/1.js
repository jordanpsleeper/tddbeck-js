class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return (
      // compare constructors as you can't use prototypes on right hand of instanceof
      this.amount === money.amount && this.constructor === money.constructor
    );
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }
}

module.exports = { Dollar, Franc };
