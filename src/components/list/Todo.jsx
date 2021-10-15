import style from './List.module.scss';
import * as Button from '../../ui/Buttons';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, updateTodo } from '../../redux/actions';
import { useState } from 'react';
import classNames from 'classnames';

const Todo = ({ elem }) => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(elem.text);
    const [editMode, setEditMode] = useState(false);
    const [editBage, setEditBage] = useState(false);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const deleteTodoItem = (id) => {
        dispatch(deleteTodo(id))
    }

    const getEditMode = (id) => {
        setEditMode(true)
    }

    const saveTodo = (id) => {
        if (value) {
            dispatch(updateTodo(id, value));
            setEditMode(false);
            setEditBage(true)
        } else {
            alert('Todo cannot be empty')
        }
    }

    return (

        <li
            className={classNames(
                'list-group-item',
                `${style.todo}`,

                {
                    [`${style.disabled_elem}`]: elem.isInSearch,

                }
            )}
        >

            {
                !editMode
                    ?
                    <div className={style.text}>
                        <small className={style.todo_date}>{elem.date} {editBage && "(edited)"}</small>
                        {elem.text}
                    </div>
                    :
                    <div className={`form-floating ${style.edit_mode_field}`}>
                        <textarea onChange={handleOnChange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={value} />
                        <label className={style.floating_label} htmlFor="floatingTextarea">Click "Save" button to close edit message</label>
                        {!value && <span className="badge bg-danger">Todo cannot be empty</span>}
                    </div>

            }

            <div className={style.list_btns}>

                <button onClick={deleteTodoItem.bind(null, elem.id)} type="button" className="btn btn-danger">
                    <Button.DeleteButtons />
                </button>

                <button onClick={getEditMode} type="button" className="btn btn-primary">
                    <Button.EditButton />
                </button>

                <button onClick={saveTodo.bind(null, elem.id)} type="button"
                    className={classNames(
                        'btn-success btn',
                        {
                            [`${style.disabled_btn}`]: !editMode,

                        }
                    )}
                >
                    <Button.SaveButton />
                </button>

            </div>
        </li>
    )
}

export default Todo;