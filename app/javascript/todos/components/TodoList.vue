<template>
  <div class='todo-list'>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
         <todo-item v-bind:todo-item="todo"> </todo-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import TodoItem from '../components/TodoItem'

  export default {
    data(){
      return{
        todos: []
      }
    },

    mounted(){
      this.getTodos()
    },

    components: {
      TodoItem
    },

    methods: {
      getTodos(){
        console.log(this.todos)
        axios.get('api/v1/todos')
          .then(response => {
            this.todos =  response.data
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

