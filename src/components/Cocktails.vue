<template>
    <div class="cocktails">
        <div v-for="cocktail in cocktails" :key="cocktail.name" >
            <Cocktail :name="cocktail.name" :ingredients="cocktail.ingredients" />
        </div>
    </div>
</template>

<script>
import Cocktail from './Cocktail.vue'

export default {
    name: 'Cocktails',
    data: function(){
        return {
            cocktails: [
                {
                    name: 'Manhattan',
                    ingredients: [
                        {
                            name: 'Rye',
                            parts: 2
                        },
                        {
                            name: 'Sweet Vermouth',
                            parts: 1
                        },
                        {
                            name: 'Angostura bitters',
                            parts: 'dash'
                        }
                    ]
                }
            ]
        }
    },
    components: {
        Cocktail
    }
}
</script>


<style>

</style>