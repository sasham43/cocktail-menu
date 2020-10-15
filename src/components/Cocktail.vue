<template>
    <div class="cocktail">
        <div class="name"  v-longclick="() => longClick()">
            <span>{{name}}</span>
            <button @click="deleteCocktail(id)" v-if="show_delete" class="delete-button">
                <img id="lr" class="remove-icon" src="../assets/remove.svg" />
            </button>
        </div>

        <div class="parts">
            <div v-for="(ingredient, index) in sortedIngredients" :key="ingredient.name">
                <Parts :num_parts="ingredient.parts" :index="index" :length="partLength" />                
            </div>
        </div>
            
        <div class="ingredients">
            <div class="ingredient" v-for="ingredient in sortedIngredients" :key="ingredient.name">
                <span class="ingredient-name" :class="{inStock: inStock(ingredient.name)}">{{ingredient.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Parts from './Parts.vue'
import {mapGetters, mapActions} from 'vuex'
import _ from 'lodash'

export default {
    name: 'Cocktail',
    props: {
        id: Number,
        name: String,
        ingredients: Array,
    },
    data: function(){
        return {
            show_delete: false
        }
    },
    computed: {
        ...mapGetters(['stock']),
        propArray: function(){
            return new Array(this)
        },
        partLength: function(){
            return this.ingredients.filter(i=>i.parts > 0).length
        },
        sortedIngredients: function(){
            return _.orderBy(this.ingredients, 'parts', 'desc')
        }
    },
    methods: {
        ...mapActions(['deleteCocktail']),
        inStock: function(name){
            return this.stock.filter(s=>s.in_stock).map(s=>s.type).includes(name)
        },
        longClick: function(){
            this.show_delete = !this.show_delete
        }
    },
    components: {
        Parts
    }
}
</script>

<style scoped>
.cocktail {
    margin: 12px 0;
    display: grid;
    grid-template-areas:
        "name parts"
        "ingredients ingredients"
    ;    
}
.parts {
    grid-area: parts;
    justify-self: end;
}
.parts>div{
    display: inline-block;
}
.ingredients {
    grid-area: ingredients;
    justify-self: start;
}
.name {
    font-size: 25px;
    justify-self: start;
}
.ingredient {
    display: inline-block;
    margin-right: 15px;
}
.ingredient-name {
    color: #aaa;
}
.inStock {
    color: black;
}

.delete-button {
    background: inherit;
    border: none;
    position: absolute;
}
.remove-icon {
    width: 50px;
    height: 50px;
}
.cocktail-container {
    position: relative;
}

@media (max-width: 1000px){
    .cocktail {
        grid-template-areas:
        "name"
        "parts"
        "ingredients"
        ;
        padding: 0 10px;
    }
    .parts,
    .ingredient {
        text-align: left;
    }
    .parts {
        width: 100%;
    }
}

</style>