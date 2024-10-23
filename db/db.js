const mongoose = require('mongoose');
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Connection failed", error.message); // Log the specific error message
    }
}

module.exports = { db };
