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

  times(amount) {
    return null;
  }

  equals(money) {
    return this.amount === money.amount && this._currency === money._currency;
  }

  currency() {
    return this._currency;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier, this._currency);
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier, this._currency);
  }
}

module.exports = { Dollar, Franc, Money };
