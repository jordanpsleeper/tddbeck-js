class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }

  equals(money) {
    return this.amount === money.amount;
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }

  equals(franc) {
    return this.amount === franc.amount;
  }
}

module.exports = { Dollar, Franc };
