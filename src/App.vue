<template>
<div class="todo-list">
  <AddTodo></AddTodo>
  
    <TodoList
    v-if="getTodoList.length"
    ></TodoList>
  
  <NoTodos v-else></NoTodos>
</div>
</template>

<script>
import AddTodo from '@/components/addTodo'
import TodoList from '@/components/todoList'
import NoTodos from '@/components/noTodos'
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex'
import {mapMutations} from "vuex"

export default {
  name: "App",
  methods: {
    ...mapActions(["getFromLocal"]),
    ...mapMutations(["checkComplit"]),
  },
  computed: {
    ...mapGetters(['getTodoList']),
  },
  mounted() {
    if(localStorage.TodoList) {
      let valueFromLocal = JSON.parse(localStorage.getItem("TodoList"))
      this.getFromLocal(valueFromLocal)
    }
  },
  watch: {
    getTodoList(newV, oldV) {
      localStorage.setItem("TodoList", JSON.stringify(newV || []));
    },
  },
  components: {
    TodoList,
    AddTodo,
    NoTodos,
  },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  .todo-list {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
