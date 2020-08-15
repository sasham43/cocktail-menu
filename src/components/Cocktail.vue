<template>
    <div>
        <div>{{name}}</div>
        
        <span v-for="ingredient in ingredients" :key="ingredient.name">
            {{ingredient.name}}    {{ingredient.parts}}
        </span>
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

</style>