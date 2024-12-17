const ToDo = (function (){
    let todos = [];
    
    async function getTodos() { // METHOD "GET"
        return todos;
    }

    async function addTodo(data) { // METHOD "POST"
        if(data) {
            todos.push(data)
        } else {
            throw new Error("Data tidak boleh kosong")
        }
    }

    async function updateTodo(data) { // METHOD "PUT"
        const index = todos.findIndex((todo) => todo.id === data.id);
    
        if (index !== -1) {
            todos[index] = { ...todos[index], ...data };
        } else {
            console.error('Todo not found');
        }
    }
    
    async function updateTodoStatus(id) { // METHOD "PUT" 
        const index = todos.findIndex((todo) => todo.id === id);

        if (index !== -1) {
            todos[index].isFinished = !todos[index].isFinished;
        } else {
            console.error('Todo not found');
        }
    }

    async function deleteTodo(id) { // METHOD "DELETE"
        todos = todos.filter(item => item.id !== id)
    }

    return {
        getTodos,
        addTodo,
        updateTodo,
        updateTodoStatus,
        deleteTodo
    }
})()

export default ToDo;