<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in stock" :key="bottle.id">
            {{bottle.type}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Stock',
    computed: {
        ...mapGetters(['stock'])
    }
}
</script>

<style scoped>
.stock-item {
    margin-top: 10px;
}
</style>