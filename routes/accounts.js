const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const accounts = [
    {
      id: 1,
      name: "Alice",
      balance: 5000,
      transactions: [
        { to: "Bob", amount: 2000, date: "2025-04-10" }
      ]
    },
    {
      id: 2,
      name: "Bob",
      balance: 3000,
      transactions: [
        { from: "Alice", amount: 2000, date: "2025-04-10" }
      ]
    }
  ];
  res.json(accounts); // ✅ Send as JSON
});

module.exports = router;
