import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    tutorialLists: [],
    selectedTutorial: '',
    editMode: false,
    newMode: false
  },

  mutations: {
    FETCH_TUTORIALS(state, tutorials){
      state.tutorialLists = tutorials
    },

    SELECT_TUTORIAL(state, tutorial){
      console.log(tutorial)
      state.selectedTutorial = tutorial
      state.editMode = true
    }

  },

  actions : {
    fetch_tutorials({commit}){
      axios.get('api/v1/tutorials')
        .then(response => {
          console.log(response.data)
          commit('FETCH_TUTORIALS', response.data)
        })
        .catch(error => {
          console.error(error);
        });
    },

    select_tutorial({commit}, tutorial){
      commit('SELECT_TUTORIAL', tutorial)
    }

  },

  getters: {
    tutorialLists: state => state.tutorialLists,
    selectedTutorial: state => state.selectedTutorial,
    editMode: state => state.editMode
  }
})
