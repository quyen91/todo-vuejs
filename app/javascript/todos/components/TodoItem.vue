<template>
  <div>
    <p>Name: {{todoItem.name}}</p>
    <p>Body: {{todoItem.body}}</p>
  </div>
</template>

<script>
  export default {
    props: [
      'todoItem'
    ],
  }
</script>
