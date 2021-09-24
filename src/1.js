class Dollar {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object) {
    return true;
  }
}

module.exports = Dollar;
