<template>
    <div>
        <label class="checkbox-label" :for="checkbox_id">
            <Corner :in_stock="in_stock" />
        </label>
        <input class="checkbox" :id="checkbox_id" type="checkbox" v-model="in_stock" />
        <span class="bottle-type">{{bottle.type}}</span>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Corner from './Corner'

export default {
    name: 'StockBottle',
    props: {
        bottle: Object
    },
    computed: {
        checkbox_id: function(){
            return `in-stock-${this.bottle.type}`
        },
        in_stock: {
            get(){
                return this.bottle.in_stock
            },
            set(){
                console.log(this.bottle.type, !this.bottle.in_stock)
                this.setInStock({
                    type: this.bottle.type, 
                    in_stock: !this.bottle.in_stock
                })
            }
        }
    },
    methods: {
        ...mapActions(['setInStock'])
    },
    components: {
        Corner,
    }
}

</script>

<style>
.corner-image {
    width: 30px;
    height: 30px; 
    /* font-size: 10px; */
    transform: rotate(315deg);
}
.checkbox {
    display: none;
}
.bottle-type {
    vertical-align: super;
}

/* art deco corner by Olena Panasovska from the Noun Project */
</style>