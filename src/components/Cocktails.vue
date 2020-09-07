<template>
    <div class="cocktails">
        <!-- count{{count}} -->
        <div v-for="cocktail in cocktails" :key="cocktail.name" >
            <Cocktail v-if="show_add_cocktails" :name="cocktail.name" :ingredients="cocktail.ingredients" />
        </div>
        <div v-if="!show_add_cocktails" class="add-cocktail-menu">
            <AddCocktail />
        </div>
        <div class="add-cocktail">
            <img @click="toggleAddCocktails()" class="add-cocktail-button" src="../assets/add.svg" />
        </div>
    </div>
</template>

<script>
import Cocktail from './Cocktail.vue'
import AddCocktail from './AddCocktail.vue'
import {mapGetters, mapActions} from 'vuex'

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
        }
    },
    methods: {
        ...mapActions(['getCocktails']),
        toggleAddCocktails(){
            this.show_add_cocktails = !this.show_add_cocktails
        }
    },
    created(){
        this.getCocktails()
    },
    components: {
        Cocktail,
        AddCocktail,
    }
}
</script>


<style scoped>
.add-cocktail-button {
    height: 50px;
    width: 50px;
    cursor: pointer;
}
</style>