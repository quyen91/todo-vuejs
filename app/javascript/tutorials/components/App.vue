<template>
   <div id='tutorials' class='appWrap'>
     <!-- <tutorial-new /> -->
     <div class="toolbarWrap"><tutorial-toolbar /></div>
     <div class="contentWrap">
        <tutorial-new />
        <tutorial-list />
      </div>
   </div>

</template>

<script>
import TutorialList from '../components/TutorialList'
import TutorialNew from '../components/TutorialNew'
import TutorialToolbar from '../components/TutorialToolbar'

export default {

  mounted(){
    console.log('App reached')
    this.$store.dispatch('fetch_tutorials')
  },

  components: {
    TutorialList,
    TutorialNew,
    TutorialToolbar
  },

  computed: {
    tutorialLists(){
      return this.$store.getters.tutorialList
    }
  }

}
</script>

<style lang="scss" scoped>
.appWrap{
  display: flex;
  
}
</style>
