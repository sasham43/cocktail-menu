<template>
    <div class="add-ingredient">
        <div class="title-ingredient">
            <label>Ingredient</label>
            <input v-model="ingredient_name" type="text" />
        </div>
        <div class="parts-icon-container">
            <Parts :num_parts="ingredient_parts" :index="index" :length="partLength" /> 
        </div>
        <div class="parts-ingredient">
            <label>Parts</label>
            <select class="part-select" v-model="ingredient_parts">
                <option>0</option>
                <option>0.25</option>
                <option>0.5</option>
                <option>0.75</option>
                <option>1</option>
                <option>1.25</option>
                <option>1.5</option>
                <option>1.75</option>
                <option>2</option>
                <option>2.25</option>
                <option>2.5</option>
                <option>2.75</option>
                <option>3</option>
                <option>3.25</option>
                <option>3.5</option>
                <option>3.75</option>
                <option>4</option>
                <option>4.25</option>
                <option>4.5</option>
                <option>4.75</option>
            </select>
            <!-- <input v-model="ingredient_parts" step="0.25" type="tel"/>  -->
            <!-- <input v-model="ingredient_parts" step="0.25" type="number" pattern="\d*" />  -->
        </div>
    </div>
</template> 

<script>
import Parts from './Parts.vue'
import {mapActions} from 'vuex'

export default {
    title: 'AddIngredient',
    props: {
        ingredient: Object
    },
    computed: {
        index: function(){
            return 0
        },
        partLength: function(){
            return 1
        },
        ingredient_name: {
            get(){
                return this.ingredient.name
            },
            set(name){
                return this.updateIngredient({
                    id: this.ingredient.id,
                    name: name,
                    parts: this.ingredient.parts
                })
            }
        },
        ingredient_parts: {
            get(){
                return +this.ingredient.parts
            },
            set(parts){
                return this.updateIngredient({
                    id: this.ingredient.id,
                    name:  this.ingredient.name,
                    parts: parts
                })
            }
        }
    },
    methods: {
        ...mapActions(['updateIngredient'])
    },
    components: {
        Parts
    }
}
</script>

<style scoped>
.add-ingredient {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.add-ingredient input {
    height: 30px;
    font-family: inherit;
    font-size: 16px;
    text-align: center;
}
.add-ingredient label {
    margin-right: 10px;
}
.parts-icon-container {
    align-self: center;
}
.part-select {
    border: solid 1px #eee;
    padding: 10px 40px;
    min-width: 158px;
    -webkit-appearance: none;
}

@media(max-width: 1000px){
    .add-ingredient {
        grid-template-columns: 40% 60%;
        grid-template-areas: 
            "ingredient ingredient"
            "parts-icon parts"
        ;
        margin-bottom: 20px;
    }
    .title-ingredient {
        grid-area: ingredient;
        justify-self: end;
    }
    .parts-icon-container {
        grid-area: parts-icon;
    }
    .parts-ingredient {
        grid-area: parts;
        justify-self: end;
    }

}
</style>