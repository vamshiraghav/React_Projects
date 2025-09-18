import React  from "react";

class SingleTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={todoItem:props};

    }

    // static getDerivedStateFromProps(props,state){
    //     //
    // }

    render(){
        return(
            <li key={this.state.todoItem.refKey}>
                <span>{this.state.todoItem.value} </span>
                <button onClick={()=>this.state.todoItem.editTodoItem(this.state.todoItem.refKey)}>Edit</button>
                <button onClick={()=>this.state.todoItem.deleteTodoItem(this.state.todoItem.refKey)}>Delete</button>
                
                </li>

        );
    }



}

export default SingleTodo;