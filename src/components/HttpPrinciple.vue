<template>
  <div class="hhtp">
            <router-link :to="'/http'">Back To HTTP Methods</router-link>
    <h1>{{http.name}}</h1>
    <p>{{http.description}}</p>
  </div>
</template>

<script>
import store from '@/store/solid-store'

export default {
  data(){
    return {
      http: store.getHttp(this.$route.params.word)
    }
  }
}
</script>

<style scoped>

</style>