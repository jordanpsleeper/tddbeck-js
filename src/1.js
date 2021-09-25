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
    const amount = sum.augend.amount + sum.addend.amount;
    return new Money(amount, to);
  }
}

// expression class
class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }
}

module.exports = { Money, Bank, Sum };
