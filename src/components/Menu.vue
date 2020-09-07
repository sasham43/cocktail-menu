<template>
    <div class="menu">
        <div class="link-container">
            <router-link class="link" to="/">Cocktails</router-link>
            <div class="bg" :class="{hide: hide}"></div>
        </div>
        <div class="link-container">
            <router-link class="link" to="/stock">Stock</router-link>
            <div class="bg" :class="{hide: hide}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        hide: Boolean
    }
}
</script>

<style scoped>
.menu {
    font-size: 18px;
    padding-top: 10px;
    /* opacity: 0; */
    /* transition: opacity 3s ease-in; */
    /* animation: fadein 3s; */
}
.link {
    margin-right: 10px;
    color: #aaa;
}
.router-link-exact-active {
    color: black;
}

/* @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
} */

/* ink effects  */
.link-container {
    /* height: 41px;
    width: 100px; */
    position: relative;
    overflow: hidden;
    display: inline-block;
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
  animation: fade 1.5s steps(24) reverse;
  transition: .5s;
  /* filter: invert(1); */
  filter: contrast(2) invert(1) grayscale(1);
}
.bg.hide {
  animation: fade2 1.5s steps(24) forwards;
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