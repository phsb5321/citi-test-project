const keystone = require('keystone');

const Types = keystone.Field.Types;

const Transaction = new keystone.List('Transactions');

Transaction.add({
  title: {
    type: Types.Text,
    isRequired: true,
    initial: true
  },
  price: {
    type: Types.Number,
    isRequired: true,
    index: true,
    initial: true

  },
  tag: {
    type: Types.Text,
    isRequired: true,
    index: true,
    initial: true

  },
  date: {
    type: Types.Date,
    default: Date.now,
    index: true,
    initial: true

  },
  debit: {
    type: Boolean,
    isRequired: true,
    index: true,
    initial: true
  }
});

Transaction.register();