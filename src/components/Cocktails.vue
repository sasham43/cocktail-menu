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
                            name: 'Angostura',
                            parts: 0
                        }
                    ]
                },
                {
                    name: 'La Lousiane',
                    ingredients: [
                        {
                            name: 'Rye',
                            parts: 2
                        },
                        {
                            name: 'Sweet Vermouth',
                            parts: .5
                        },
                        {
                            name: 'Benedictine',
                            parts: .25
                        },
                        {
                            name: 'Absinthe',
                            parts: 0
                        },
                        {
                            name: 'Angostura',
                            parts: 0
                        },
                        {
                            name: 'Peychauds',
                            parts: 0
                        },
                    ]
                },
                {
                    name: 'Last Word',
                    ingredients: [
                        {
                            name: 'Gin',
                            parts: 1
                        },
                        {
                            name: 'Lime Juice',
                            parts: 1
                        },
                        {
                            name: 'Maraschino Liquer',
                            parts: 1
                        },
                        {
                            name: 'Green Chartreuse',
                            parts: 1
                        },
                    ]
                }
            ],
            stock: [
                {
                    type: 'Gin',
                    in_stock: true,
                },
                {
                    type: 'Rye',
                    in_stock: true,
                },
                {
                    type: 'Sweet Vermouth',
                    in_stock: true,
                },
                {
                    type: 'Green Chartreuse',
                    in_stock: true,
                },
                {
                    type: 'Angostura',
                    in_stock: true,
                },
                {
                    type: 'Benedictine',
                    in_stock: true,
                },
                {
                    type: 'Peychauds',
                    in_stock: true,
                },
                {
                    type: 'Angostura',
                    in_stock: true,
                },
                {
                    type: 'Absinthe',
                    in_stock: true,
                },
                {
                    type: 'Lime Juice',
                    in_stock: true,
                }
            ]
        }
    },
    computed: {
        ingredientsInStock: function(){
            return this.stock.filter(s=>s.in_stock)
        }
    },
    components: {
        Cocktail
    }
}
</script>


<style>

</style>