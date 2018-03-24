<template>
  <div class='todoLists'>
    <ul>
      <li v-for="tutorial in this.$store.state.tutorialLists"
          :key="tutorial.id"
          @click="selectTutorial(tutorial)">
        {{tutorial.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  methods: {
    selectTutorial(tutorial){
      this.$store.dispatch('select_tutorial', tutorial)
    }
  }
}
</script>

<style lang="scss" scoped>
.todoLists{
  // flex: 60%;
  li{
    display: inline-block;
    padding: 20px;
    margin: 5px;
    border: 1px solid transparent;
    &:hover{
      border: solid 1px green;
      color: black;
      background: rgb(127, 216, 127);
    }
    &.selected{
      border: solid 1px green;
      color: black;
      background: rgb(127, 216, 127);
    }
  }
}

</style>
