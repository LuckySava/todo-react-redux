import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './List.module.scss';
import Todo from './Todo';
import * as Button from '../../ui/Buttons'
import { searchTodo } from '../../redux/actions';

const List = () => {

    const todos = useSelector(state => state.todoReducer.todos);
    const [searchValue, setSearchValue] = useState('');
    const [searchErrorBage, setSearchErrorBage] = useState(false);
    const dispatch = useDispatch();

    const handleOnchange = (e) => {
        setSearchErrorBage(false)
        setSearchValue(e.target.value)
    }

    const handleSearchClick = () => {
        if (searchValue.trim()) {
            dispatch(searchTodo(searchValue))
            setSearchValue('')
        } else {
            setSearchErrorBage(true)
        }
    }

    const lists = todos.map(elem => <Todo key={elem.id} elem={elem} />);

    return (
        <>

            {lists.length ?
                <>
                    <div className={`input-group ${style.search_input}`}>

                        <div className={style.search_wrapper}>
                            <input
                                className="form-control border rounded-pill"
                                type='search'
                                value={searchValue}
                                id="example-search-input"
                                onChange={handleOnchange}
                            />
                            <span className="input-group-append">

                                <button onClick={handleSearchClick} otype="button" className={`btn bg-opacity-25 bg-success`}>
                                    <Button.SearchButton />
                                </button>

                            </span>
                        </div>
                        {searchErrorBage && <span className={`badge rounded-pill bg-danger ${style.search_bage}`}>Please type something</span>}



                    </div>

                    <ul className={`list-group ${style.todos}`}>
                        {lists}
                    </ul>
                </>
                : <h3>Nothing to show</h3>
            }
        </>

    )
}

export default List;