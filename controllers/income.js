const IncomeSchema = require('../models/incomeModels');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Convert amount to a number
    const parsedAmount = parseFloat(amount);
    
    const income = new IncomeSchema({
        title,
        amount: parsedAmount,  // Use parsed amount
        category,
        description,
        date
    });

    try {
        // Validate required fields
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if amount is a valid positive number
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ message: "Amount must be a positive number" });
        }

        // Save income record
        await income.save();
        res.status(200).json({ message: "Income added successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }

    console.log(income);  // Logs the saved income object
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    console.log(params)
    IncomeSchema.findByIdAndDelete(id)
    .then((income) =>{
        res.status(200).json({message: 'Income Deleted'})
    
    })
    .catch((err) =>{
        res.status(200).json({message: 'Income Deleted'})
    })
}