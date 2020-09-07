<template>
    <div class="add-cocktail">
        <div class="input">
            <label>Name</label>
            <input type="text" />
        </div> 
        <!-- {{new_cocktail.ingredients}} -->
        <!-- <div v-for="ingredient in new_cocktail.ingredients" :key="ingredient.name">
            {{ingredient.name}} - {{ingredient.parts}}
            <AddIngredient :ingredient="ingredient" />
        </div> -->
        <div class="ingredients" >
            <AddIngredient :ingredient="ingredient" v-for="ingredient in new_cocktail.ingredients" :key="ingredient.name" />
        </div>
        <div class="add-ingredient-button">
            <button @click="addIngredient()">Add Ingredient</button>
        </div>
    </div>
</template>

<script>
import AddIngredient from './AddIngredient.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    title: 'AddCocktail',
    computed: {
        ...mapGetters(['new_cocktail'])
    },
    methods: {
        ...mapActions(['addIngredient'])
    },
    components: {
        AddIngredient
    }
}
</script>

<style scoped>
.ingredients {
    margin-top: 20px;
}
</style>