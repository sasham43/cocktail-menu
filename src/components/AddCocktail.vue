<template>
    <div class="add-cocktail">
        <div class="input">
            <label>Name</label>
            <input type="text" />
        </div>
        <div class="ingredients">
            <AddIngredient v-for="ingredient in new_cocktail.ingredients" :key="ingredient.name" />
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

</style>