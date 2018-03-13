<template>
  <div id='search-todo'>
    <h2>Search todo</h2>
    <input type="text" v-model="keyword">
    <button @click="searchTodo">Search</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        keyword: ''
      }
    },
    methods: {
      searchTodo(){
        console.log(this.keyword)
      }
    }
  }
</script>