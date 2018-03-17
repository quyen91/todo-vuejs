import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API from '../api/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: []
  },

  mutations: {
    FETCH_TODOS(state, todos){
      console.log('Fetching')
      state.todoLists = todos
    },

    ADD_TODO(state, todo){
      // state.todoLists.push(todo);
      state.todoLists.unshift(todo);

      console.log('Mutation: Ok, todo has been added');
    },
    // TODO:
    // deleteTodo(){},
    // updateTodo(){}
  },

  actions: {
    add_todo({commit}, todo){
      API.add_todo(todo).then(function (response) {
        commit('ADD_TODO', response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },

    fetch_todos({commit}){
      axios.get('api/v1/todos')
        .then(response => {
          commit('FETCH_TODOS', response.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  },

  getters: {
    getTodos(state){ return state.todoLists }
  }

})