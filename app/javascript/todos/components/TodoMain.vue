<template>
  <div id='todos'>
    <todo-search />
    <!-- <todo-new v-on:add-new-todo="handleAddNew"/> -->
    <todo-new @add-new-todo="handleAddNew"/>
    <todo-list :todoList="todoList"/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList'
  import TodoNew from '../components/TodoNew'
  import TodoSearch from '../components/TodoSearch'
  import axios from 'axios'

  export default {
    components: {
      TodoList,
      TodoNew,
      TodoSearch,
    },

    data(){
      return{
        todoList: []
      }
    },

    mounted(){
      this.getTodoList()
    },

    methods: {
      getTodoList(){
        axios.get('api/v1/todos')
          .then(response => {
            this.todoList =  response.data
          })
          .catch(error => {
            console.error(error);
          });
      },

      handleAddNew(todo){
       this.todoList.splice(0, 0, todo)
      }
    }
  }
</script>