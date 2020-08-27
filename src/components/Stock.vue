<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in stock" :key="bottle.id">
            <!-- <input type="checkbox" @click="setInStock(bottle.type, !bottle.in_stock)" /> -->
            <!-- <input type="checkbox" v-model="bottle.in_stock" />
            <span>{{bottle.type}}</span> --> 
            <StockBottle :bottle="bottle" />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import StockBottle from './StockBottle'

export default {
    name: 'Stock',
    computed: {
        ...mapGetters(['stock'])
    },
    components: {
        StockBottle
    }
}
</script>

<style scoped>
.stock {
    font-size: 20px;
}
.stock-item {
    margin-top: 10px;
    margin-right: 25%;
    margin-left: 25%;
    text-align: left;
}
@media (max-width: 1000px){
    .stock-item {
      padding-left: 5%;
      padding-right: 5%;
    }
}
</style>