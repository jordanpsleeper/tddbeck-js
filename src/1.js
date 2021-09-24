class Dollar {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount = this.amount * 2;
  }
}

module.exports = Dollar;
