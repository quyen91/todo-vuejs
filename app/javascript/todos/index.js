import Vue from 'vue'
import TodoMain from './components/TodoMain.vue'

window.addEventListener('load', function () {

    var todos = new Vue({
      el: '#todos',
      render: h => h(TodoMain)
    })

}) // end window on load

