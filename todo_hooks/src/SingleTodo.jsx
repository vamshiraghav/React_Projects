
function SingleTodo(props) {
    const { todo, deleteTodo, EditTodo } = props;
    console.log({ todo, deleteTodo, EditTodo })
    return (
        <li key={todo.key}>
            <div style={{display:'flex',padding:'20px',justifyContent:'center'}}>
                <div style={{display:'auto',alignItems:'center',padding:'30px'}}>{todo.value}</div>
                <div style={{display:'flex',margin:'20px'}}>
                    <button onClick={() => EditTodo(todo.key)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.key)}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default SingleTodo;