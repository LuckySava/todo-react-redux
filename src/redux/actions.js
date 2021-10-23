import ACTION from './actionsType';

export const addNewTodo = (todo) => ({ type: ACTION.addTodo, payload: todo });

export const deleteTodo = (id) => ({ type: ACTION.removeTodo, payload: id });

export const editTodo = (id) => ({ type: ACTION.editTodo, payload: id });

export const updateTodo = (id, text) => ({ type: ACTION.updateTodo, payload: { id, text } });

export const searchTodo = (text) => ({ type: ACTION.searchTodo, payload: text });

export const fetchTodos = () => async(dispatch) =>{
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        const todos = await data.json();
        return dispatch({type: ACTION.fetchTodo, payload:todos})
    } catch(err) {
        throw new Error(err.message);
    }

}
