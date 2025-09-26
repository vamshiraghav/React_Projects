import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, deleteTodo, updateTodo } from "./app/todoSlice";

const Todo = () => {

    const [value, setValue] = useState('');
    const { todos,isEditing,currentIndex } = useSelector((state) => state.todos);
    // const initialState = { todos: [], currentIndex: 0, todoCounter: 0,isEditing:false }
      const dispatch = useDispatch();
    return (<>
        <div>
            <h2>Todo Application</h2>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} label="Enter todo value" />
                <button onClick={() => {
                    if (isEditing) {
                        dispatch(updateTodo({value,id:currentIndex})); setValue('')

                    } else {    
                         dispatch(addTodo(value)); 
                        setValue('')

                    }
                }}>{isEditing ? 'Edit todo' : 'Add todo'}</button>
                <button onClick={()=>dispatch(addTodo(value))}>second</button>
            </div>
            <div>
                {JSON.stringify(todos)} hello
                {isEditing}
                {currentIndex}
                <ol>
                    {todos?.map(todo => (<li>
                        <div>
                            <div>{todo.value} {todo.id}</div>
                            <div><button onClick={() => {dispatch(editTodo(todo.id));
                            setValue(todo.value);
                            }


                            }>Edit todo</button>
                                <button onClick={() => {
                                    dispatch(deleteTodo({ id: todo.id }));
                                    (currentIndex==todo.id) && setValue('');
                                }}>Delete todo</button>
                            </div>
                        </div>
                    </li>))}
                </ol>
            </div>
        </div>
    </>)


}

export default Todo;