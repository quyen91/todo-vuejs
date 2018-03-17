<template>
  <div id='todo-new'>
    <h2>Add new todo</h2>
    <input type="text" v-model="new_todo.name" placeholder="name">
    <input type="text" v-model="new_todo.body" placeholder="body">

    <button @click="addTodo">Add</button>
    <br>
    <hr>
  </div>
</template>

<script>

  export default {
    name: 'todo-new',

    data(){
      return {
        new_todo: {}
      }
    },

    methods: {
      addTodo(){
        this.$store.dispatch('add_todo', this.new_todo)
        this.new_todo = {}
      }
    }
  }
</script>