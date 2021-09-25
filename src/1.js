class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // factory method
  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(money) {
    return this.amount === money.amount && this.currency === money.currency;
  }

  // needs to return an expression
  plus(addend) {
    return new Sum(this, addend);
  }
}

class Bank {
  reduce(sum, to) {
    return sum.reduce(to);
  }
}

// expression class
class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

module.exports = { Money, Bank, Sum };
