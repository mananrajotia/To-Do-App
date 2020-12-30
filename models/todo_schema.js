const mongoose=require("mongoose");

const todo_schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const task = mongoose.model('task', todo_schema);
module.exports = task;