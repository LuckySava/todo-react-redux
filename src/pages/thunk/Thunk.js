import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/actions";

export const Thunk = () => {
    const dispatch = useDispatch();
    const fakeTodos = useSelector(state => state.todoReducer.fakeTodos);

    // useEffect(() => {
    //     dispatch(fetchTodos())
    // }, [])

    const clickHandle = () => {
        dispatch(fetchTodos())
    }

    return (
        <>
            <button
                onClick={clickHandle}
                className={`btn btn-warning`}
                disabled={fakeTodos.length ? true : false}
            >
                Load fake todos from server via API
            </button>

            <ul style={{marginTop: '20px'}}>
                {fakeTodos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </>

    )
}

export default Thunk;