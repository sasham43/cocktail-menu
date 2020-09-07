<template>
  <div id="app">
    <img id="lr" class="menu-corner top-corner left-corner" src="./assets/edge.svg" />
    <Title />
    <img id="tr" class="menu-corner top-corner right-corner" src="./assets/edge.svg" />
    <router-view></router-view>
    <img id="br" class="menu-corner bottom-corner right-corner" src="./assets/edge.svg" />
    <img id="bl" class="menu-corner bottom-corner left-corner" src="./assets/edge.svg" />
  </div>
</template>

<script>
import Title from './components/Title.vue'
// import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    // Menu,
    Title
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

html, body {
  /* height: 100%; */
  height: calc(100% - 16px);
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: 'Poiret One', cursive;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding-left: 25%;
  padding-right: 25%;
  position: relative;
  height: 100%;
}
.menu-corner {
  width: 75px;
  height: 75px;
  position: absolute;
}
.top-corner {
  top: 10px;
}
.bottom-corner {
  bottom: 10px;
}
.left-corner {
  left: 10px;
}
.right-corner {
  right: 10px;
}
.top-corner.left-corner {
  transform: scale(-1, 1);
}
.bottom-corner.left-corner {
  transform: scale(-1);
}
.bottom-corner.right-corner {
  transform: scale(1, -1);
}
/* #tl {
  top: 10px;
  left: 10px;
}
#tr {
  top: 10px;
  right: 10px;
}
#br {
  bottom: 10px;
  right: 10px;
}
#bl {
  bottom: 10px;
  left: 10px;
} */

@media (max-width: 1000px){
    #app {
      padding-left: 5%;
      padding-right: 5%;
    }
}
</style>
