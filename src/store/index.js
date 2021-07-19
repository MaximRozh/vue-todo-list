import {createStore} from "vuex";

export default createStore({
    state: {
        todoList: [],

    },
    actions: {
        getFromLocal({commit}, value) {
            commit('putFromLocalToState', value)
        }
    },
    mutations: {
        putFromLocalToState(state, value) {
            state.todoList = value
        },
        updateTodoList(state, newTodo) {
            state.todoList = [newTodo, ...state.todoList]
        },
        removeTodoItemFromId(state, id) {
            state.todoList = state.todoList.filter(item => item.id !== id)
        },
        changeComplited(state, complit, id) {
            state.todoList = state.todoList.map(item => item.id === id? {...item, complited:complit} : item)
        },
    },
    getters: {
        getTodoList: state => state.todoList,
        complitedFilter: state => state.todoList.filter(t => t.complited),
        notComplitedFilter: state => state.todoList.filter(t => !t.complited)
    }
})