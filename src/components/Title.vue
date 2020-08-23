<template>
    <div class="title">
        <div @click="toggleMenu()" class="title-text">
            Crump Cocktails
        </div> 
        <Menu v-if="show_menu" />           
    </div>
</template>

<script>
import Menu from './Menu'

export default {
    name: 'Title',
    data: function(){
        return {
            show_menu: false
        }
    },
    methods: {
        toggleMenu: function(){
            this.show_menu = !this.show_menu
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
</style>