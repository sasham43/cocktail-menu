<template>
    <div class="title">
        <div @click="toggleMenu()" class="title-text">
            Crump Cocktails
        </div> 
        <!-- <div class="bg-container">

            <div class="bg">
                bg
            </div>

            <div class="bg-link">
                link
            </div>

        </div> -->
        <Menu class="menu" :hide="hide_menu" />           
    </div>
</template>

<script>
import Menu from './Menu'

export default {
    name: 'Title',
    data: function(){
        return {
            hide_menu: false
        }
    },
    methods: {
        toggleMenu: function(){
            this.hide_menu = !this.hide_menu
        }
    },
    components: {
        Menu,
    }
}
</script>

<style scoped>
.title {
    font-size: 35px;
    text-align: center;
    margin-bottom: 50px;
}
.title-text {
    display: inline-block;
    border-bottom: solid 1px black;
}
/* .menu {
    opacity: 0;
}
.show {
    opacity: 1;
} */


/* ink effects  */
.bg-container {
    height: 41px;
    width: 100px;
    position: relative;
    overflow: hidden;
}
.bg {
  background: url('https://codyhouse.co/demo/ink-transition-effect/img/ink.png');
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translateY(-50%) translateX(-2%);
  /* height: 100 */
  height: 100%;
  height: 200%;
  width: 2500%;
  background-size: 100% 100%;
  animation: fade 2s steps(24) reverse;
  transition: .5s;
  /* filter: invert(1); */
  filter: contrast(2) invert(1) grayscale(1);
}
.bg:hover {
  animation: fade2 2s steps(24) forwards;
}
@keyframes fade {
  0% {
    transform: translateY(-50%) translateX(-2%);
  }
  100% {
    transform: translateY(-50%) translateX(-98%);
  }
}
@keyframes fade2 {
  0% {
    transform: translateY(-50%) translateX(-2%);
  }
  100% {
    transform: translateY(-50%) translateX(-98%);
  }
}
</style>