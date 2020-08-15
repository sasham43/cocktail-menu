<template>
    <div class="cocktail">
        <div class="name">{{name}}</div>

        <div class="parts">
            <div class="part-wheel" v-for="ingredient in ingredients" :key="ingredient.name">
                <!-- <div class="part-wheel">
                </div>   -->
                <!-- {{ingredient.parts}} -->
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
export default {
    name: 'Cocktail',
    props: {
        name: String,
        ingredients: Array
    }
}
</script>

<style scoped>
.cocktail {
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
.part-wheel {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border-color: black;
    background-color: black;
    display: inline-block;
    margin-right: 15px;
}

</style>