const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Transaction = keystone.list('Transactions');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/transactions', (req, res) => {
    Transaction.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  // app.get('*', (req, res) => {
  // 	res.redirect('/');
  // });
};