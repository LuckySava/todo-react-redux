import { useDispatch, useSelector } from "react-redux";
import style from './Input.module.scss';
import { addNewTodo } from '../../redux/actions'
import { useState } from "react";
import getDate from '../../utils/getdate';
import getTimeStamp from "../../utils/getTImeStamp";

const Inupt = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const clickHandle = (e) => {
        
        e.preventDefault();

        if (value) {
            dispatch(addNewTodo({
                id: getTimeStamp(),
                text: value,
                date: getDate()
            }))
        } else {
            setError(true);
        }

        setValue('')
    }

    const onChangeHandle = (e) => {

        setValue(e.target.value)

        if (error) setError(false);
    }

    return (
        <>
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    Please type something
                </div>
            }
            <form>
                <div className="input-group mb-5">
                    <input type="text" className={`form-control ${style.text_input}`}
                        placeholder="Enter you task here"
                        aria-describedby="button-addon2"
                        value={value}
                        onChange={onChangeHandle}
                    />
                    <button onClick={clickHandle} className="btn btn-warning" type="submit" id="button-addon2">Button</button>
                </div>
            </form>
        </>
    )
}

export default Inupt;