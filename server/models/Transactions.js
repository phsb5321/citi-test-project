const { Text, DateTime, Float, Checkbox } = require('@keystonejs/fields');


const TransactionFields = {
    fields: {
        title: {
            type: Text, 
            isRequired: true
        },
        price: {
            type: Float,
            isRequired: true
        },
        tag: {
            type: Text,
            isRequired: true
        },
        date: {
            type: DateTime,
            default: Date.now
        },
        debit: {
            type: Checkbox,
            isRequired: true
        }
    }
};

module.exports = TransactionFields
