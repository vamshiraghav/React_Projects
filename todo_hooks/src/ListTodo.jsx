import SingleTodo from "./SingleTodo";

function ListTodo(props){

 const {todos,deleteTodo,EditTodo} = props;
    return (
        <div>
           <p>List of Todo Items Added</p>
           <ol>
            {todos?.map(todo=><SingleTodo key={todo.key} {...{todo,deleteTodo, EditTodo}} />)}
           </ol>
        </div>
    )
}

export default ListTodo;