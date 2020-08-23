<template>
    <div class="cocktail">
        <div class="name">{{name}}</div>

        <div class="parts">
            <div v-for="(ingredient, index) in ingredients" :key="ingredient.name">
                <Parts :num_parts="ingredient.parts" :index="index" :length="partLength" />
            <!-- <Parts :num_parts="ingredient.parts" v-for="ingredient in ingredients" :key="ingredient.name" /> -->
                
            </div>
        </div>
            
        <div class="ingredients">
            <div class="ingredient" v-for="ingredient in ingredients" :key="ingredient.name">
                {{ingredient.name}}    
                <!-- {{ingredient.parts}} -->
            </div>
        </div>
    </div>
</template>

<script>
import Parts from './Parts.vue'

export default {
    name: 'Cocktail',
    props: {
        name: String,
        ingredients: Array
    },
    computed: {
        propArray: function(){
            return new Array(this)
        },
        partLength: function(){
            return this.ingredients.filter(i=>i.parts > 0).length
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
    /* grid-template-columns: 25% 25% 25% 25%; */
    grid-template-areas:
        "name parts"
        "ingredients ingredients"
    ;
}
.parts {
    grid-area: parts;
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

</style>