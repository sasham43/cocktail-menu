<template>
    <div class="cocktail">
        <div class="name">{{name}}</div>

        <div class="parts">
            <div v-for="(ingredient, index) in ingredients" :key="ingredient.name">
                <Parts :num_parts="ingredient.parts" :index="index" :length="partLength" />                
            </div>
        </div>
            
        <div class="ingredients">
            <div class="ingredient" v-for="ingredient in ingredients" :key="ingredient.name">
                <span class="ingredient-name" :class="{inStock: inStock(ingredient.name)}">{{ingredient.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Parts from './Parts.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Cocktail',
    props: {
        name: String,
        ingredients: Array
    },
    computed: {
        ...mapGetters(['stock']),
        propArray: function(){
            return new Array(this)
        },
        partLength: function(){
            return this.ingredients.filter(i=>i.parts > 0).length
        }
    },
    methods: {
        inStock: function(name){
            return this.stock.filter(s=>s.in_stock).map(s=>s.type).includes(name)
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
}

</style>