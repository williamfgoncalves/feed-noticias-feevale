/* eslint-disable */
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link :to="{ name: 'Home'}">Diário de Noticias | Feevale</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'brasil' }}">Brasil</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'economia' }}">Economia</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'esporte' }}">Esporte</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'mundo' }}">Mundo</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'politica' }}">Política</router-link>
            <router-link :to="{ name: 'Type', params: { type: 'tecnologia' }}">Tecnologia</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
      name:'Menu',
    }
</script>

<style scoped>
    .navbar{
       margin-bottom: 20px;
    }
    a {
        margin-left: 15px;
    }
    a:hover{
        color: white;
        font-weight: bold;
    }
</style>