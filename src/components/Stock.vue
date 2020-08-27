<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in stock" :key="bottle.id">
            <!-- <input type="checkbox" @click="setInStock(bottle.type, !bottle.in_stock)" /> -->
            <!-- <input type="checkbox" v-model="bottle.in_stock" />
            <span>{{bottle.type}}</span> --> 
            <StockBottle :bottle="bottle" />
        </div>
        <div class="add-stock">
            <button class="add-stock-button">
                Add Stock
            </button>
            <div class="add-stock-form">
                <label class="checkbox-label" for="stock_checkbox">
                    <Corner :in_stock="in_stock" />
                </label>
                <input class="checkbox" id="stock_checkbox" type="checkbox" v-model="in_stock" />
                <input v-model="type" type="text" placeholder="Type..." />
                <input v-model="name" type="text" placeholder="Name..." />
                <button @click="addBottle()" class="add-stock-button">
                    Add Bottle to Stock
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import StockBottle from './StockBottle'
import Corner from './Corner'

export default {
    name: 'Stock',
    data: function(){
        return {
              in_stock: true,
              name: '',
              type: '',
        }
    },
    computed: {
        ...mapGetters(['stock']),
        // new_bottle: function(){
        //     return {
        //         in_stock: this.in_stock,
        //         name: this.name,
        //         type: this.type,
        //     }
        // }
    },
    methods: {
        ...mapActions(['getStock', 'addStockBottle']),
        addBottle: function(){
            var bottle = {
                in_stock: this.in_stock,
                name: this.name,
                type: this.type,
            }

            this.addStockBottle(bottle)
        }
    },
    created(){
        this.getStock()
    },
    components: {
        StockBottle,
        Corner,
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
.add-stock-button {
    border: 0;
    background: #fff;
    font-family: inherit;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
}
</style>