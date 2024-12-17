import ToDo from "./todo.js";

async function getData() {
    let datas = await ToDo.getTodos();
    let finishedTodo = datas.filter(item => item.isFinished === true);
    let unfinishedTodo = datas.filter(item => !item.isFinished);
    createFinished(finishedTodo);
    createNotFinished(unfinishedTodo);
}

function createNotFinished(datas) {
    let todosEL = document.getElementById('todo');
    // while (todosEL.firstChild) {
    //     todosEL.removeChild(todosEL.firstChild);
    // }
    todosEL.replaceChildren()
    
    datas.forEach(item => {
        const newBlock = document.createElement('div');
        newBlock.className = "block max-w-sm p-6 bg-yellow-300 border border-gray-200 rounded-lg shadow hover:bg-yellow-400 my-3";
        newBlock.innerHTML = `
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-800">${item.title}</h5>
            <div class="flex justify-center">
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onclick="(async () => { await finishedTodo('${item.id}'); })()">Done</button>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onclick="(async () => { await deleteTodo('${item.id}'); })()">Delete</button>
            </div>
        `;
        todosEL.appendChild(newBlock)
    });
}

function createFinished(datas) {
    let todosEL = document.getElementById('finished');
    // while (todosEL.firstChild) {
    //     todosEL.removeChild(todosEL.firstChild);
    // }
    todosEL.replaceChildren()
    
    datas.forEach(item => {
        const newBlock = document.createElement('div');
        newBlock.className = "block max-w-sm p-6 bg-green-300 border border-gray-200 rounded-lg shadow hover:bg-green-400 my-3";
        newBlock.innerHTML = `
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-800">${item.title}</h5>
            <div class="flex justify-center">
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onclick="(async () => { await deleteTodo('${item.id}'); })()">Delete</button>
            </div>
        `;
        todosEL.appendChild(newBlock)
    });
}

function generateID() {

    function randomHex() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    } 

    return (
        randomHex() + randomHex() + '-' +
        randomHex() + '-' +
        randomHex() + '-' +
        randomHex() + '-' +
        randomHex() + randomHex() + randomHex()
    );
}

async function addNewTodo() {
    let titleEL = document.getElementById('title');
    let title = titleEL.value

    let data = {
        id: generateID(),
        title: title,
        isFinished: false
    }

    try {
        await ToDo.addTodo(data)
        titleEL.value = ""
    } catch (err) {
        console.error(err)
    }
}

async function finishedTodo(id) {
    try {
        await ToDo.updateTodoStatus(id)
        await getData()
    } catch (error) {
        console.error(err)
    }
}

async function deleteTodo(id) {
    try {
        await ToDo.deleteTodo(id)
        await getData()
    } catch (error) {
        console.error(err)
    }
}

window.finishedTodo = finishedTodo;
window.deleteTodo = deleteTodo;

document.getElementById('submit-btn').addEventListener('click', () => {
    addNewTodo()
    getData()
})

