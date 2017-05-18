<template>
    <div class="crud">
        <h1>C.R.U.D.</h1>
        <router-link :to="'/'">Back To Menu</router-link>
        <ul>
            <li v-for="letter in crud">
                <router-link :to="'/crud/'+letter.toLowerCase()">{{letter}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'crud',
    data () {
        return {
            crud: 'CRUD'
        }
    }
}
</script>

<style>
</style>