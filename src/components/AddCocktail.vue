<template>
    <div class="add-cocktail">
        <div class="input">
            <label>Name</label>
            <input v-model="new_cocktail_name" type="text" />
        </div> 
        <!-- {{new_cocktail.ingredients}} -->
        <!-- <div v-for="ingredient in new_cocktail.ingredients" :key="ingredient.name">
            {{ingredient.name}} - {{ingredient.parts}}
            <AddIngredient :ingredient="ingredient" />
        </div> -->
        <div class="ingredients" >
            <AddIngredient :ingredient="ingredient" v-for="ingredient in new_cocktail.ingredients" :key="ingredient.id" />
        </div>
        <div class="add-ingredient-button">
            <button @click="addIngredient()">Add Ingredient</button>
        </div>
        <div class="submit-cocktail">
            <button @click="saveCocktail()">Save Cocktail</button>
        </div>
        <router-link to="/">
            <img class="add-cocktail-button" src="../assets/add.svg" />
        </router-link>
    </div>
</template>

<script>
import AddIngredient from './AddIngredient.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    title: 'AddCocktail',
    computed: {
        ...mapGetters(['new_cocktail']),
        new_cocktail_name: {
            get(){
                return this.new_cocktail.name
            },
            set(name){
                return this.updateNewCocktail(name)
            }
        }
    },
    methods: {
        ...mapActions(['addIngredient', 'saveNewCocktail', 'updateNewCocktail', 'newBlankCocktail']),
        saveCocktail: async function(){
            await this.saveNewCocktail()
            this.$router.push({path: '/'})
        }
    },
    created(){
        this.newBlankCocktail()
    },
    components: {
        AddIngredient
    }
}
</script>

<style scoped>
.add-cocktail {
    max-height: calc(100% - 200px);
    overflow: scroll;
    padding-bottom: 100px;
}
.ingredients {
    margin-top: 20px;
}
.add-cocktail-button {
    height: 50px;
    width: 50px;
    cursor: pointer;
}
.add-cocktail input {
    height: 30px;
    font-family: inherit;
    font-size: 18px;
    text-align: center;
}
.add-cocktail label {
    margin-right: 20px;
}
button {
    font-family: inherit;
    font-size: 16px;
    background: none;
    border: solid 1px #ccc;
    padding: 10px;
    margin: 10px;
}
</style>