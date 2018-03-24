import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index.js'

window.addEventListener('load', function () {
  var tutorials = new Vue({
    el: '#tutorials',
    store,
    render: h => h(App)
  })

}) // end window on load

