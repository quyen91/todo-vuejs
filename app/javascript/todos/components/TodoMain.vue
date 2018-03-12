<template>
  <div id='todos'>
    <todo-list> </todo-list>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList'

  export default {
    components: {
      TodoList
    },
  }
</script>