<template>
    <form class="form" @submit.prevent="addItem">
        <input
        type="text"
        class="input"
        v-model="title"
        placeholder="add something to to-do list"
        />
        <button type="submit" class="btn-submit">Add to List</button>
    </form>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
    data() {
        return {
            title: "",
        };
    },
    computed: {
    ...mapState(["todoList"]),
    },
    methods: {
    ...mapMutations(["updateTodoList"]),
    addItem() {
        if (this.title.trim()) {
            const newTodos = {
            id: Date.now(),
            title: this.title,
            complited: false,
            };
        this.updateTodoList(newTodos);
        localStorage.setItem("TodoList", JSON.stringify(this.todoList || []));
        this.title = "";
        }
    },
},
};
</script>

<style scoped>
.form {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px 20px;
    margin-top: calc(13px + (20 - 13) * (100vw - 320px) / (1200 - 320));
    margin-bottom: calc(13px + (20 - 13) * (100vw - 320px) / (1200 - 320));
}
.input {
    outline: none;
    border: none;
    flex: 0 1 400px;
    border-radius: 20px;
    border: 1px solid #34495e;
    text-align: center;
}
.input:focus {
    border: none;
    box-shadow: 0 0 2px #34495e, 0 0 10px #34495e, 0 0 10px #34495e;
}
.btn-submit {
    background: #41b883;
    border: none;
    border-radius: 30px;
    width: calc(80px + (100 - 80) * (100vw - 320px) / (1200 - 320));
    height: 25px;
    transition: all 0.5s ease;
}
.btn-submit:hover {
    transform: scale(1.1);
    box-shadow: 0 0 2px #41b883, 0 0 5px #41b883, 0 0 10px #34495e;
}
</style>
