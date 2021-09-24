class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this._currency = currency;
  }

  // factory method
  static dollar(amount) {
    return new Dollar(amount, "USD");
  }

  static franc(amount) {
    return new Franc(amount, "CHF");
  }

  equals(money) {
    return (
      // compare constructors as you can't use prototypes on right hand of instanceof
      this.amount === money.amount && this.constructor === money.constructor
    );
  }

  currency() {
    return this._currency;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier, "USD");
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier, "CHF");
  }
}

module.exports = { Dollar, Franc, Money };
