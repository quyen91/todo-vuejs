<template>
  <div class='todo-list'>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
         <todo-item :todo-item="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import TodoItem from '../components/TodoItem'

  export default {
    components: {
      TodoItem
    },

    props: ["todoList"]
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

