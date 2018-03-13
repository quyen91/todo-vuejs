<template>
  <div>
    <div v-if="editMode">
      <input type="text" v-model="todoItem.name">
      <input type="text" v-model="todoItem.body">
    </div>
    <div v-else>
      <p> Name: {{todoItem.name}} </p>
      <p> Body: {{todoItem.body}} </p>
    </div>

    <button v-if="editMode" @click="updateTodo">Save</button>
    <button v-if="!editMode" @click="editMode=true">Edit</button>
    <button v-if="!editMode" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        editMode: false
      }
    },

    props: [
      'todoItem'
    ],

    methods: {
      updateTodo(){
        this.editMode = false
        console.log(this.todoItem)
      },

      deleteTodo(){
        console.log('delete')
      }
    }
  }
</script>
