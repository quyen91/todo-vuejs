import Vue from 'vue'
import TodoMain from './components/TodoMain.vue'
import store from './store/index.js'

window.addEventListener('load', function () {

    var todos = new Vue({
      el: '#todos',
      store,
      render: h => h(TodoMain)
    })

}) // end window on load

