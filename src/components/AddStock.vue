<template>
    <div class="add-stock"> 
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
</template>

<script>
import Corner from './Corner'
export default {
    title: 'AddStock',
    components: {
        Corner,
    }
}
</script>

<style scoped>

</style>