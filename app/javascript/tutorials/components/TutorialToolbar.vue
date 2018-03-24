<template>
  <div class='toolbar'>
    <div>
      <button>Add new</button>
      <button v-if="editMode">Delete</button>
      <button v-if="editMode">Edit</button>
    </div>

    <div> {{ selectedTutorial.name }}</div>
  </div>
</template>

<script>


export default {
  computed: {
    selectedTutorial() {
      return this.$store.getters.selectedTutorial
    },

    editMode(){
      return this.$store.getters.editMode
    }
  }
}
</script>
