class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }

  equals(franc) {
    return this.amount === franc.amount;
  }
}

module.exports = { Dollar, Franc };
