<template>
    <div class="cocktails">
        <!-- count{{count}} -->
        <div v-for="cocktail in cocktails" :key="cocktail.name" >
            <Cocktail :name="cocktail.name" :ingredients="cocktail.ingredients" />
        </div>
    </div>
</template>

<script>
import Cocktail from './Cocktail.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Cocktails',
    data: function(){
        return {
        }
    },
    computed: {
        ...mapGetters(['stock', 'cocktails']),
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