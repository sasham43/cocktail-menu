<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in sortedStock" :key="bottle.id">
            <StockBottle :bottle="bottle" />
        </div>
        <div class="add-stock">
            <!-- <img class="bracket-img" @click="toggleAddStock()" src="../assets/bracket.svg" />
            <div v-if="show_add_stock" class="add-stock-form">
                <AddStock />
            </div> -->
            <router-link to="/add-stock">
                <img class="bracket-img" src="../assets/bracket.svg" />
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import StockBottle from './StockBottle'
// import AddStock from './AddStock'
import _ from 'lodash'
// import Corner from './Corner'

export default {
    name: 'Stock',
    // data: function(){
    //     return {
    //           in_stock: true,
    //           name: '',
    //           type: '',
    //           show_add_stock: false,
    //     }
    // },
    computed: {
        ...mapGetters(['stock']),
        sortedStock: function(){
            return _.sortBy(this.stock, ['type'])
            // return this.stock.
        }
    },
    methods: {
        ...mapActions(['getStock', 'addStockBottle']),
        addBottle: async function(){
            var bottle = {
                in_stock: this.in_stock,
                name: this.name,
                type: this.type,
            }

            await this.addStockBottle(bottle)

            this.resetBottle()
        },
        resetBottle(){
            this.name = ''
            this.type = ''
        },
        toggleAddStock(){
            this.show_add_stock = !this.show_add_stock
        }
    },
    created(){
        this.getStock()
    },
    components: {
        StockBottle,
        // AddStock,
    }
}
</script>

<style>
.stock {
    font-size: 20px;
    max-height: calc(100% - 200px);
    overflow: scroll;
    padding-bottom: 100px;
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
      margin-left: 1%;
      margin-right: 1%;
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
.add-stock-form {
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 50px 50px 50px;
    grid-template-areas:
        "icon type"
        ". name"
        ". button"
    ;
    margin-top: 15px;
}
.add-stock-icon {
    grid-area: icon;
}
.add-stock-name {
    grid-area: name;
    font-family: inherit;
    font-size: 16px;
}
.add-stock-type {
    grid-area: type;
    font-family: inherit;
    font-size: 16px;
}
.submit-stock-button {
    grid-area: button;
}
.bracket-img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
}
@media (max-width: 1000px){
    #app {
      padding-left: 5%;
      padding-right: 5%;
    }
}
/* .in-stock-label {
    display: none;
}

@media (max-width: 1000px){
    #app {
      padding-left: 5%;
      padding-right: 5%;
    }

    .add-stock-form {
        display: grid;

        grid-template-columns: 1fr;
        grid-template-rows: 50px 50px 50px;
        grid-template-areas:
            "icon"
            "type"
            "name"
            "button"
        ;
        margin-top: 15px;
        padding: 0 15px;
    }
    .in-stock-label {
        display: inline-block;
    }
    
} */
/* art deco icon by Olena Panasovska from the Noun Project */
</style>