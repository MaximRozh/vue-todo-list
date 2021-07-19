<template>
    <li class="todo-list__item">
        <span 
        :class="{'throw': todo.complited}" 
        class="todo-list__title">
            <input 
            type="checkbox" class="check" 
            :checked="todo.complited" 
            @change="changeComplitedItem(todo)">
            {{index + 1}}.
            {{todo.title}}
            
        </span>
        <button class="todo-list__btn" @click="removeTodoItem(todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        props: ["todo", "index"],
        methods: {
            removeTodoItem(id) {
                this.$emit("removeTodoItem", id)
            },
            changeComplitedItem(todo) {
                this.$emit("changeComplitedItem", todo)
            }
        },
        
    }
</script>

<style scoped>
.todo-list__item {
    display: block;
    margin-bottom: 15px;
    min-width: 165px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    border-radius: 15px;
    transition: all .3s ease;
    color: #131320;
}
.todo-list__item:hover {
    border-radius: 15px;
    box-shadow: 0 0 2px #41B883, 0 0 10px #41B883, 0 0 10px #41B883;
    border: none;
    transform: scale(1.01);
}
.throw {
    text-decoration: line-through;
}
.todo-list__btn {
    border-radius: 50%;
    background-color: firebrick;
    color: white;
    width: 24px;
    height: 22px;
}
.todo-list__title {
    width: 100%;
    display: flex;
    align-items: center;
}
.check {
    min-width:25px;
    min-height:25px;
    border-radius: 50%;
    margin-right: calc(15px + (25 - 15) * (100vw - 320px) / (1200 - 320));;
}
</style>