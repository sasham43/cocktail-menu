<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in stock" :key="bottle.id">
            <!-- <input type="checkbox" @click="setInStock(bottle.type, !bottle.in_stock)" /> -->
            <!-- <input type="checkbox" v-model="bottle.in_stock" />
            <span>{{bottle.type}}</span> --> 
            <StockBottle :bottle="bottle" />
        </div>
        <div class="add-stock">
            <img class="bracket-img" src="../assets/bracket.svg" />
            <button @click="toggleAddStock()" class="add-stock-button">
                Add Stock
            </button>
            <img class="bracket-img" src="../assets/bracket.svg" />
            <div v-if="show_add_stock" class="add-stock-form">
                <label class="checkbox-label add-stock-icon" for="stock_checkbox">
                    <Corner :in_stock="in_stock" />
                    <div class="in-stock-label">
                        In Stock
                    </div>
                </label>
                <input class="checkbox" id="stock_checkbox" type="checkbox" v-model="in_stock" />
                <input class="add-stock-type" v-model="type" type="text" placeholder="Type..." />
                <input class="add-stock-name" v-model="name" type="text" placeholder="Name..." />
                <button @click="addBottle()" class="add-stock-button submit-stock-button">
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
              show_add_stock: false,
        }
    },
    computed: {
        ...mapGetters(['stock']),
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
.in-stock-label {
    display: none;
}


@media (max-width: 1000px){
    #app {
      padding-left: 5%;
      padding-right: 5%;
    }

    .add-stock-form {
        display: grid;
        /* grid-template-columns: 10% 90%; */
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
    
}
/* art deco icon by Olena Panasovska from the Noun Project */
</style>