<template>
  <div class='add-new'>
    <input type="text" v-model='new_tutorial'>
    <button @onclick='submitTutorial'>Add</button>
  </div>
</template>

<script>


export default {
  data(){
    return{
      editMode: false,
      new_tutorial: ''
    }
  },

  methods: {
    submitTutorial(){

    }
  }

}
</script>
