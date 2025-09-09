const express = require('express')
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionCtrl')

// Router
const router = express.Router()

// Routes
// addTransaction
router.post('/add-transaction',addTransaction)
// EditTransaction
router.post('/edit-transaction',editTransaction)
// deleteTransaction
router.post('/delete-transaction',deleteTransaction)

// getTransaction
router.post('/get-transaction',getAllTransaction)

module.exports = router