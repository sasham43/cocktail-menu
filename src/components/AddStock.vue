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
        <router-link class="stock-link" to="/stock">
            <img class="bracket-img" src="../assets/bracket.svg" />
        </router-link>
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
.add-stock {
    display: grid;
    /* grid-template-areas:
        "add-stock-type add-stock-type"
        "add-stock-name add-stock-name"
        "add-stock-button add-stock-button"
        ". link"
    ; */
    /* grid-template-areas:
        "add-stock-icon type"
        "add-stock-name add-stock-button "
        ". link"
    ; */
    grid-template-columns: 1fr;
    grid-template-areas:
        "add-stock-icon ."
        "add-stock-type add-stock-type"
        "add-stock-name add-stock-name"
        "add-stock-button add-stock-button"
        "stock-link stock-link"
    ;
}
.add-stock-icon {
    grid-area: add-stock-icon;
}
#stock_checkbox {
    grid-area: checkbox;
}
.add-stock-type {
    grid-area: add-stock-type;
}
.add-stock-name {
    grid-area: add-stock-name;
}
.add-stock-button {
    grid-area: add-stock-button;
}
.stock-link {
    grid-area: stock-link;
}
.bracket-img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
}
</style>