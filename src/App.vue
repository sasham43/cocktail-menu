<template>
  <div id="app">
    <Title />
    <Cocktails />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Cocktails from './components/Cocktails.vue'

export default {
  name: 'App',
  components: {
    Cocktails,
    Title
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
  padding-left: 25%;
  padding-right: 25%;
}
</style>
