<template>
<div class="todo-list_container">
    <SelectTodos 
    @giveFilterdTodos='selectedFilter'></SelectTodos>

    <ul class="todo-list" 
    v-if="filterTodos.length">
    <TodoItem 
        v-for="(todo, index) in filterTodos" :key="todo.id"
        :todo='todo'
        :index='index'
        @removeTodoItem="removeTodoItem"
        @changeComplitedItem="changeComplitedItem"
    ></TodoItem>
    </ul>
    <p class="epmty" v-else> {{`${filter} lists is epmty`}}</p>
</div>
</template>

<script>
import TodoItem from "@/components/todoItem"
import SelectTodos from "@/components/SelectTodos"
import {mapGetters} from "vuex"
import {mapMutations} from "vuex"

    export default {
        data() {
            return {
                filter: "all"
            }
        },        
        methods: {
            ...mapMutations(["removeTodoItemFromId" ,'changeComplited']),
            removeTodoItem(id) {
                this.removeTodoItemFromId(id)
            },
            changeComplitedItem(todo) {
                todo.complited = !todo.complited
                this.changeComplited(todo.complited, todo.id)
            },
            selectedFilter(v) {
                this.filter = v
            }
        },
        computed: {
            ...mapGetters(['getTodoList', 'complitedFilter', 'notComplitedFilter']), 
            filterTodos() {
                if(this.filter === 'all') {
                    return this.getTodoList
                }
                return this.filter === "complited" ? this.complitedFilter : this.notComplitedFilter
            }
        },
        components: {
            SelectTodos,
            TodoItem
        }
    }
</script>

<style scoped>
.todo-list_container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.todo-list{
    list-style: none;
    width: 100%;
    
}
.epmty {
    margin-top: 20px;
    font-size: 24px;
    color: #131320;
}
</style>