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
  import axios from 'axios'

  export default {
    name: 'todo-new',
    data(){
      return {
        new_todo: {}
      }
    },

    methods: {
      addTodo(){
        axios.post('api/v1/todos', {
            todo: this.new_todo
          })
          .then(response => {
            this.$emit('add-new-todo', response.data);
            console.log('success')
          })
          .catch(error => {
            console.error(error);
          });
        console.log(this.new_todo)
      }
    }
  }
</script>