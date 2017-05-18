<template>
  <div class="principle">
    <h1>{{principle.name}}</h1>
    <p>{{principle.description}}</p>
  </div>
</template>

<script>
import store from '@/store/solid-store'

export default {
  data(){
    return {
      principle: store.getPrinciple(this.$route.params.letter)
    }
  }
}
</script>

<style scoped>

</style>