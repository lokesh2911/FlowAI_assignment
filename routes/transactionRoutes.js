const router = require('express').Router();
const {addIncome, getIncomes, deleteIncome}=require('../controllers/income')
// Simple GET route to test
router.post('/add-income', addIncome)
     .get('/get-incomes',getIncomes)
     .delete('/delete-income/:id',deleteIncome)

module.exports = router;
