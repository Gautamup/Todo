const zod  = require("zod");
// validate user input using zod

const verifyTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const todoId = zod.object({
    id:zod.string()
});
/*
    {
        title: string,
        desc: string
    }
    {
        id: string
    }
*/
module.exports = {
    verifyTodo: verifyTodo,
    todoId: todoId
}