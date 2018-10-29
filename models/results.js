const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;