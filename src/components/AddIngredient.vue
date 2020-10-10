<template>
    <div class="add-ingredient">
        <div class="title-ingredient">
            <label>Ingredient</label>
            <input v-model="ingredient_name" type="text" />
        </div>
        <div class="parts-icon-container">
            <Parts :num_parts="ingredient_parts" :index="index" :length="partLength" /> 
        </div>
        <div class="parts-ingredient">
            <label>Parts</label>
            <input v-model="ingredient_parts" step="0.25" type="number" /> 
        </div>
    </div>
</template> 

<script>
import Parts from './Parts.vue'
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
        index: function(){
            return 0
        },
        partLength: function(){
            return 1
            // return this.ingredients.filter(i=>i.parts > 0).length
        },
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
                return +this.ingredient.parts
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
    },
    components: {
        Parts
    }
}
</script>

<style scoped>
.add-ingredient {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
.parts-icon-container {
    align-self: center;
}

@media(max-width: 1000px){
    .add-ingredient {
        /* grid-template-columns: 1fr; */
        grid-template-columns: 40% 60%;
        grid-template-areas: 
            "ingredient ingredient"
            "parts-icon parts"
        ;
        margin-bottom: 20px;
    }
    .title-ingredient {
        grid-area: ingredient;
        justify-self: end;
    }
    .parts-icon-container {
        grid-area: parts-icon;
    }
    .parts-ingredient {
        grid-area: parts;
        justify-self: end;
    }

}
</style>