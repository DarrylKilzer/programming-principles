<template>
    <div class="solid">
        <h1>S.O.L.I.D.</h1>
        <router-link :to="'/'">Back To Menu</router-link>
        <ul>
            <li v-for="letter in solid">
                <router-link :to="'/solid/'+letter">{{letter}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'solid',
    data () {
        return {
            solid: 'SOLID'
        }
    }
}
</script>

<style>
</style>