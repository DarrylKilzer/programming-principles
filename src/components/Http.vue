<template>
    <div class="http">
        <h1>HTTP Methods</h1>
        <router-link :to="'/'">Back To Menu</router-link>
        <ul>
            <li v-for="word in http">
                <router-link :to="'/http/'+word.toLowerCase()">{{word}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'http',
    data () {
        return {
            http: ['Post', 'Delete', 'Put', 'Get', 'Patch']
            //crud: 'CRUD'
            //http: [{letter: 'C', route: 'post'}]
        }
    }
}
</script>

<style>
</style>