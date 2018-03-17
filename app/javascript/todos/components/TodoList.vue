<template>
  <div class='todo-list'>
    <ul>
      <li v-for="todo in this.$store.state.todoLists" :key="todo.id">
         <todo-item :todo-item="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
  import TodoItem from '../components/TodoItem'

  export default {
    components: {
      TodoItem
    },
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

