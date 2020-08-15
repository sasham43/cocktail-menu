<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Cocktails />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cocktails from './components/Cocktails.vue'

export default {
  name: 'App',
  components: {
    Cocktails
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: 'Poiret One', cursive;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
