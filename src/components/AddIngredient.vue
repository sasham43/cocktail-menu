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
            set(name){
                return this.updateIngredient({
                    id: this.ingredient.id,
                    name: name,
                    parts: this.ingredient.parts
                })
            }
        },
        ingredient_parts: {
            get(){
                return this.ingredient.parts
            },
            set(parts){
                return this.updateIngredient({
                    id: this.ingredient.id,
                    name:  this.ingredient.name,
                    parts: parts
                })
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
.add-ingredient input {
    height: 30px;
    font-family: inherit;
    font-size: 16px;
    text-align: center;
}
.add-ingredient label {
    margin-right: 10px;
}
</style>