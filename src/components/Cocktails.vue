<template>
    <div class="cocktails">
        <div class="cocktail-container" v-for="cocktail in cocktails" :key="cocktail.name" >
            <Cocktail :name="cocktail.name" :id="cocktail.id" :ingredients="cocktail.ingredients" />
        </div>
        <div class="add-cocktail">
            <router-link to="/add-cocktails">
                <img class="add-cocktail-button" src="../assets/add.svg" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Cocktail from './Cocktail.vue'
import {mapGetters, mapActions} from 'vuex'
import Vue from 'vue'

export default {
    name: 'Cocktails',
    data: function(){
        return {
            show_add_cocktails: true,
        }
    },
    computed: {
        ...mapGetters(['stock', 'cocktails']),
        ingredientsInStock: function(){
            return this.stock.filter(s=>s.in_stock)
        },
        // mappedCocktails: function(){
        //     return this.cocktails.map(c=>{
        //         // c.show_delete = false
        //         Vue.set(c, 'show_delete', false)
        //         return c
        //     })
        // }
    },
    methods: {
        ...mapActions(['getCocktails', 'getStock']),
        toggleAddCocktails(){
            this.show_add_cocktails = !this.show_add_cocktails
            if(!this.show_add_cocktails){
                this.getCocktails()
            }
        },
        longClick: function(cocktail){
            console.log('long click', cocktail)
            // cocktail.show_delete = !cocktail.show_delete
            Vue.set(cocktail, 'show_delete', true)
            // Vue.set(cocktail, 'show_delete', !cocktail.show_delete)
        }
    },
    created(){
        this.getCocktails()
        this.getStock()
    },
    components: {
        Cocktail,
    }
}
</script>


<style scoped>
.cocktails {
    max-height: calc(100% - 200px);
    overflow: scroll;
    padding-bottom: 100px;
}
.add-cocktail-button {
    height: 50px;
    width: 50px;
    cursor: pointer;
}
</style>