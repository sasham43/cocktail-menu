<template>
    <div class="stock">
        <div class="stock-item" v-for="bottle in stock" :key="bottle.type">
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

</style>