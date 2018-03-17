import axios from 'axios';

const API = {
  add_todo(todo){
    console.log('Call api')
    return axios.post('api/v1/todos', {
      todo: todo
    })
  }

  // TODO
  // update_todo(todo){}
  // destroy_todo(todo){}
}

export default API;
// To use in other functions

// API.add_todo(todo).then(function (response) {
//   console.log(response.data);
// }).catch(function (response) {
//     console.log(response);
// });