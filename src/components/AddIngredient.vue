<template>
    <div class="add-ingredient">
        <div class="title-ingredient">
            <label>Ingredient</label>
            <input v-model="ingredient_name" type="text" />
        </div>
        <div class="parts-ingredient">
            <label>Parts</label>
            <input v-model="ingredient_parts" type="number" /> 
            <div class="parts-icon-container">

            </div>
        </div>
    </div>
</template> 

<script>
import {mapActions} from 'vuex'

export default {
    title: 'AddIngredient',
    // data: function(){
    //     retu
    // },
    props: {
        ingredient: Object
    },
    computed: {
        ingredient_name: {
            get(){
                return this.ingredient.name
            },
            set(){
                return this.updateIngredient(this.ingredient.id)
            }
        },
        ingredient_parts: {
            get(){
                return this.ingredient.parts
            },
            set(){
                return this.updateIngredient(this.ingredient.id)
            }
        }
    },
    methods: {
        ...mapActions(['updateIngredient'])
    }
}
</script>

<style scoped>
.add-ingredient {
    display: grid;
    grid-template-columns: 50% 50%;
}
</style>