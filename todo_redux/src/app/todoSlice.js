import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { todos: [], currentIndex: 0, todoCounter: 0,isEditing:false }

const todoSlice = createSlice({
    name: 'todos', initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id:state.todoCounter+1,value:action.payload});
            state.todoCounter++;
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id) {
                    return { ...todo, value: action.payload.value }
                }
                else {
                    return todo;
                }
            })
            state.currentIndex=action.payload.id;
            state.isEditing=false
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id)
            if(state.currentIndex==action.payload.id){
                state.currentIndex=0;
                state.isEditing=false;
            }
        },
        editTodo:(state,action)=>{
            state.currentIndex=action.payload;
            state.isEditing=true;
        }

    }
});

export const { addTodo, editTodo, deleteTodo,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
