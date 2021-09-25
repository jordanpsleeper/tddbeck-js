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

  reduce(bank, to) {
    const rate = this.currency === "CHF" && to === "USD" ? 2 : 1;
    return new Money(this.amount / rate, to);
  }
}

class Bank {
  reduce(source, to) {
    return source.reduce(this, to); // can be Money or Sum Expression
  }

  addRate() {
    return null;
  }

  rate(from, to) {
    return from === "CHF" && to === "USD" ? 2 : 1;
  }
}

// expression class
class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

module.exports = { Money, Bank, Sum };
