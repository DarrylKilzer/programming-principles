<template>
  <div class="hello">
    <h2>Principles</h2>
      <router-link :to="'/solid'">Solid Principle</router-link>
      <router-link :to="'/crud'">Crud Principle</router-link>
      <router-link :to="'/http'">HTTP Methods</router-link>
 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
