// mongodb+srv://upadhyaygautam97:IEgZjJTSZGPju4XX@cluster0.enxxmjp.mongodb.net/todos
const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb+srv://upadhyaygautam97:IEgZjJTSZGPju4XX@cluster0.enxxmjp.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
});

const todo = mongoose.model('Todo',todoSchema);
module.exports = {
    todo
}
/*
 todo {
    title: string,
    description : string,
    completed: boolean
 }
*/