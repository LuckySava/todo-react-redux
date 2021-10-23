import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/actions";

export const Thunk = () => {
    const dispatch = useDispatch();
    const fakeTodos = useSelector(state => state.todoReducer.fakeTodos);

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <ul>
            {
                fakeTodos
                    ? fakeTodos.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })
                    : <p>loading...</p>
            }
        </ul>
    )
}

export default Thunk;