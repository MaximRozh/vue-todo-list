<template>
<div class="select-container">
    <form class="dropdown-el" @click.prevent="filterdTodos" :class="{'expanded': dropDown}">
        <input type="radio" :name="filter" checked="checked" ><label :for="filter" class="main" >{{filter}}</label>
        <input type="radio" name="all" value="all"><label for="all" class="label">all</label>
        <input type="radio" name="complited" value="complited"><label for="complited" class="label">complited</label>
        <input type="radio" name="unfinished" value="unfinished"><label for="unfinished" class="label">unfinished</label>
    </form>
</div>

</template>

<script>
    export default {
        data() {
            return {
                filter: "all",
                dropDown: false
            }
        },
        methods: {
            filterdTodos(e) {
                this.dropDown = !this.dropDown
                if(e.target.tagName === "LABEL") {
                    this.filter = e.target.htmlFor
                    this.$emit('giveFilterdTodos', this.filter)
                }
            },
        }
    }

</script>

<style scoped>
.select-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: calc(5px + (20 - 5) * (100vw - 320px) / (1200 - 320));
}
.dropdown-el {
    position: relative;
    display: inline-block;
    width: calc(150px + (200 - 150) * (100vw - 320px) / (1200 - 320));
    max-height:  35px;
    min-height: 20px;
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    white-space: nowrap;
    color: #444;
    outline: none;
    border: 0.06em solid transparent;
    border-radius: 1em;
    background-color: #cde4f5;
    transition: 0.3s all ease-in-out;
}
.main {
    text-align: center;
    line-height: 0.8rem;

}

.dropdown-el input {
    width: 1px;
    height: 1px;
    display: inline-block;
    position: absolute;
    opacity: 0;
}
.dropdown-el label {
    border-top: 0.06em solid #d9d9d9;
    display: block;
    height: 2em;
    cursor: pointer;
    position: relative;
    transition: 0.3s all ease-in-out;
    padding: 8px 16px ;
}

.dropdown-el input:checked + label {
    font-size: calc(16px + (22 - 16) * (100vw - 320px) / (1200 - 320));
    font-weight: 500;
    max-height:  35px;
    min-height: 20px;
    color: #131320;
}

.dropdown-el::after {
    content: "";
    position: absolute;
    right: 13px;
    top: 14px;
    border: 0.3em solid #131320;
    border-color: #131320 transparent transparent transparent;
    transition: 0.4s all ease-in-out;
}
.dropdown-el.expanded {
    border: 0.06em solid #41B883;
    background: #fff;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
    max-height: 15em;
}

.label:hover{
    background-color: #cde4f5;
    color: #1FBF7C
}
.dropdown-el.expanded input:checked + label {
    color: #131320;
}
.dropdown-el.expanded::after {
    transform: rotate(-180deg);
    top: 8px;
}

</style>