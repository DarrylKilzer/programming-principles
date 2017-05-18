<template>
  <div class="crud">
          <router-link :to="'/crud'">Back To Crud Principle</router-link>
    <h1>{{crud.name}}</h1>
    <p>{{crud.description}}</p>
  </div>
</template>

<script>
import store from '@/store/solid-store'

export default {
  data(){
    return {
      crud: store.getCrud(this.$route.params.letter)
    }
  }
}
</script>

<style scoped>

</style>