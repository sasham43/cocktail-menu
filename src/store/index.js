import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const new_cocktail_default = {
    title: '',
    ingredients: [{
        name: '',
        parts: 1
    }]
}
const new_ingredient_default = {
    name: '',
    parts: 1
}

const store = new Vuex.Store({
    state: {
        count: 10,
        stock: [
            {
                type: 'Gin',
                in_stock: true,
            },
            {
                type: 'Rye',
                in_stock: true,
            },
            {
                type: 'Sweet Vermouth',
                in_stock: true,
            },
            {
                type: 'Green Chartreuse',
                in_stock: true,
            },
            {
                type: 'Benedictine',
                in_stock: true,
            },
            {
                type: 'Peychauds',
                in_stock: true,
            },
            {
                type: 'Angostura',
                in_stock: true,
            },
            {
                type: 'Absinthe',
                in_stock: true,
            },
            {
                type: 'Lime Juice',
                in_stock: true,
            },
            {
                type: 'Maraschino Liquer',
                in_stock: true
            }
        ].map(addIds),
        cocktails: [
            {
                name: 'Manhattan',
                ingredients: [
                    {
                        name: 'Rye',
                        parts: 2
                    },
                    {
                        name: 'Sweet Vermouth',
                        parts: 1
                    },
                    {
                        name: 'Angostura',
                        parts: 0
                    }
                ]
            },
            {
                name: 'La Lousiane',
                ingredients: [
                    {
                        name: 'Rye',
                        parts: 2
                    },
                    {
                        name: 'Sweet Vermouth',
                        parts: .5
                    },
                    {
                        name: 'Benedictine',
                        parts: .25
                    },
                    {
                        name: 'Absinthe',
                        parts: 0
                    },
                    {
                        name: 'Angostura',
                        parts: 0
                    },
                    {
                        name: 'Peychauds',
                        parts: 0
                    },
                ]
            },
            {
                name: 'Last Word',
                ingredients: [
                    {
                        name: 'Gin',
                        parts: 1
                    },
                    {
                        name: 'Lime Juice',
                        parts: 1
                    },
                    {
                        name: 'Maraschino Liquer',
                        parts: 1
                    },
                    {
                        name: 'Green Chartreuse',
                        parts: 1
                    },
                ]
            }
        ].map(addIds),
        new_cocktail: {
            title: '',
            ingredients: [{
                name: '',
                parts: 1
            }]
        }
    },
    getters: {
        count: state => state.count,
        stock: state => state.stock,
        cocktails: state => state.cocktails,
        new_cocktail: state => state.new_cocktail,
    },
    actions: {
        setInStock: async function({dispatch},{type, in_stock}){
            const response = await axios.put('/api/stock', {type, in_stock})

            console.log('put stock', response)

            dispatch('getStock')
            // commit('setInStock', {type, in_stock})
        },
        async getCocktails(){
            const response = await axios.get('/api/cocktails')

            console.log('response', response)
        },
        async getStock({commit}){
            const response = await axios.get('/api/stock')

            console.log('stock response', response)
            commit('setStock', response.data)
        },
        async addStockBottle({getters, dispatch},bottle){
            const response = await axios.post('/api/stock', bottle)

            console.log('posted stock', response, getters)
            // actions.getStock()
            dispatch('getStock')
            return response
        },
        addIngredient({commit}){
            commit('addNewIngredient', new_ingredient_default)
        },
        newBlankCocktail({commit}){
            commit('newBlankCocktail', new_cocktail_default)
        }
    },
    mutations: {
        setInStock: (state, {type, in_stock}) => state.stock.map(s=>{
            if(s.type == type){
                s.in_stock = in_stock
            }
            return s
        }),
        setStock: (state, stock) => state.stock = stock,
        addNewIngredient: (state, ing) => state.new_cocktail.ingredients.push(ing),
        newBlankCocktail: (state, cocktail) => state.new_cocktail = cocktail,
    }
})

function addIds(item, i){
    item.id = i
    return item
}


export default store