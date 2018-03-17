<template>
  <div id='todos'>
    <todo-search />
    <!-- <todo-new v-on:add-new-todo="handleAddNew"/> -->
    <todo-new />
    <todo-list/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList'
  import TodoNew from '../components/TodoNew'
  import TodoSearch from '../components/TodoSearch'

  export default {
    components: {
      TodoList,
      TodoNew,
      TodoSearch,
    },

    mounted(){
      this.$store.dispatch('fetch_todos')
    },

    computed: {
      todoLists(){
        return this.$store.getters.todos
      }
    }
  }
</script>