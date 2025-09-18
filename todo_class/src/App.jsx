import './App.css'
import React from 'react'
import SingleTodo from './SingleTodo';

class App extends React.Component {
  constructor(props) {
    //Mouting Phase
    super(props);
    this.state = { todos: [], inputValue: '', message: '', counter: 0, isAdding: true, currentEditItem: 0 };

  }

  ontodoSubmit(newTodo) {
    if (newTodo?.trim() == '') return;
    if (!this.state.isAdding) {
      this.setState({
        todos: this.state.todos?.map(todo => {
          if (todo.key == this.state.currentEditItem) {
            return ({ key: todo.key, value: this.state.inputValue });
          } else {
            return todo;
          }
        }),
        inputValue: '',
        isAdding: true

      })
    } else {
      this.setState({ todos: [...this.state.todos, { value: newTodo, key: this.state.counter }], inputValue: '', counter: this.state.counter + 1 });
    }
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  editTodoItem(key, todos) {
    console.log("key on edit is " + key)
    var editTodo = todos?.filter(todo => todo?.key == key)[0]
    this.setState({ currentEditItem: key, isAdding: false, inputValue: editTodo.value });
  }

  deleteTodoItem(key, todos) {
    console.log("key on delete is " + key)
    console.log("key on delete is " + JSON.stringify(this.state))
    var newTodos = todos?.filter(todo => todo?.key != key);
    if (!this.state.isAdding && this.state.currentEditItem == key) {
      this.setState({ todos: newTodos, isAdding: true, currentEditItem: 0, inputValue: '' });
    } else {
      this.setState({ todos: newTodos });
    }

  }
  render() {
    //Mouting, Updating Phases
    return (<div>
      <h1>Todo List Application </h1>
      <h1>React Class implementation</h1>
      <div>
        <input type="text" placeholder='Enter your todo item'
          onChange={(e) => this.onInputChange(e)}
          value={this.state.inputValue}
        />
        <button onClick={() => this.ontodoSubmit(this.state.inputValue)} >{this.state.isAdding ? "Add Todo Item" : "Edit Todo Item"}</button>
      </div>
      <div>
        {this.state.todos.length > 0 ? (<ol>
          {this.state.todos?.map(todo => <SingleTodo key={todo.key + todo.value} value={todo.value} refKey={todo.key} editTodoItem={(key) => this.editTodoItem(key, this.state.todos)} deleteTodoItem={(key) => this.deleteTodoItem(key, this.state.todos)} />)}
        </ol>) : (<p>No Todo items added so far!!</p>)}
      </div>
      <div>
        <h2>Message Board</h2>
        <p>{this.state.message}</p>
      </div>
    </div>);
  }

  static getDerivedStateFromProps(props, state) {
    //Mouting, Updating Phase
    // return ({message: state.message+ (' \n getDerivedStateFromProps  update called')})
    console.log('getDerivedStateFromProps runs on update');

    return {};

  }
  


  componentDidMount() {
    // this will run after the render of initial class component renders
    //Mouting phase runs once
    setTimeout(() => {
      this.setState({ message: this.state.message + (' \n componentDidMount update called') });
    }
      , 1000);

  }


  getSnapshotBeforeUpdate(prevProps, PrevState) {
    // runs on updating the componet , updating phase
    console.log('getSnapshotBeforeUpdate runs on update');
    return {};
  }
  shouldComponentUpdate() {
    //updating phase
    // this.setState({message:this.state.message+('<br/> shouldcomponent update called')});
    console.log('shouldComponentUpdate runs on update');

    return true;
  }
  componentDidUpdate() {
    // on updating phase
    // this.setState({message:this.state.message+('<br/> componentDidUpdate update called')});
    console.log('componentDidUpdate runs on update' + JSON.stringify(this.state.todos));
  }
}


export default App
