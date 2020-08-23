<template>
    <div class="menu">
        <router-link class="link" to="/">Cocktails</router-link>
        <router-link class="link" to="/stock">Stock</router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.menu {
    font-size: 18px;
}
.link {
    margin-right: 10px;
    color: #aaa;
}
.router-link-exact-active {
    color: black;
}
</style>