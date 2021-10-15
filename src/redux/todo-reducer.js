import ACTION from './actionsType';

let initialState = {
    todos: [],
    searchTitle: '',
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.addTodo:

            let newTodo = {
                id: action.payload.id,
                text: action.payload.text,
                date: action.payload.date,
                isInSearch: false,
                editmode: false,
            }

            return {
                ...state,
                todos: [...state.todos, newTodo],
            }

        case ACTION.removeTodo:
            return {
                ...state,
                todos: [...state.todos.filter(elem => elem.id !== action.payload)],
            }

        case ACTION.updateTodo:
            const newTodos = [...state.todos];
            return {
                ...state,
                todos: newTodos.map(elem => {
                    if (elem.id === action.payload.id) {
                        elem.text = action.payload.text
                    }
                    return elem;
                })
            }

        case ACTION.searchTodo:
            return {
                ...state,
                todos: [...state.todos.map(elem => {
                    if (elem.text.toLowerCase().includes(action.payload)) {
                        elem.isInSearch = true
                    } else {
                        elem.isInSearch = false
                    }
                    return elem;
                })]
            }

        default:
            console.log('nothing change in todoReducer');
            return state;
    }
}

export default todoReducer;