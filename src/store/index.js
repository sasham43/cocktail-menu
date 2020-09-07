import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

var new_cocktail_default = {
    name: '',
    ingredients: [{
        name: '',
        parts: 1
    }]
}
var new_ingredient_default = {
    name: '',
    parts: 1
}
var state = {
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
        name: '',
        ingredients: [{
            name: '',
            parts: 1
        }]
    }
}
var getters = {
    count: state => state.count,
    stock: state => state.stock,
    cocktails: state => state.cocktails,
    new_cocktail: function(state) {
        return {
            name: state.new_cocktail.name,
            ingredients: state.new_cocktail.ingredients.map((c, i) => {
                c.id = i
                return c
            })
        }
    },
    // new_cocktail: state => {
    //     return {
    //         title: state.new_cocktail.title,
    //         ingredients: state.new_cocktail.ingredients.map(c=>{
    //             c.id = state.new_cocktail.ingredients.length
    //             return c
    //         })
    //     }
    // },
}
var actions = {
    setInStock: async function({ dispatch }, { type, in_stock }) {
        const response = await axios.put('/api/stock', { type, in_stock })

        console.log('put stock', response)

        dispatch('getStock')
        // commit('setInStock', {type, in_stock})
    },
    async getCocktails({commit}){
        const response = await axios.get('/api/cocktails')

        console.log('response', response)
        commit('setCocktails', response.data)
    },
    async getStock({ commit }){
        const response = await axios.get('/api/stock')

        console.log('stock response', response)
        commit('setStock', response.data)
    },
    async addStockBottle({ getters, dispatch }, bottle){
        const response = await axios.post('/api/stock', bottle)

        console.log('posted stock', response, getters)
        // actions.getStock()
        dispatch('getStock')
        return response
    },
    addIngredient({ commit }){
        commit('addNewIngredient', _.clone(new_ingredient_default))
    },
    newBlankCocktail({ commit }){
        commit('newBlankCocktail', _.clone(new_cocktail_default))
    },
    updateIngredient({ commit }, ing){
        commit('updateNewCocktailIngredient', ing)
    },
    async saveNewCocktail(){
        console.log('posting new cocktail', state.new_cocktail)
        await axios.post('/api/cocktails', state.new_cocktail)
    },
    updateNewCocktail({commit}, name){
        commit('updateNewCocktail', name)
    }
}
var mutations = {
    setInStock: (state, { type, in_stock }) => state.stock.map(s => {
        if (s.type == type) {
            s.in_stock = in_stock
        }
        return s
    }),
    setStock: (state, stock) => state.stock = stock,
    addNewIngredient: (state, ing) => state.new_cocktail.ingredients.push(ing),
    newBlankCocktail: (state, cocktail) => state.new_cocktail = cocktail,
    updateNewCocktailIngredient: (state, ingredient) => {
        state.new_cocktail.ingredients = state.new_cocktail.ingredients.map((i, index) => {
            if (index == ingredient.id) {
                // console.log('found ingredient', in)
                return ingredient
            }
            return i
        })
    },
    updateNewCocktail: (state, name)=> state.new_cocktail.name = name,
    setCocktails: (state, cocktails) => state.cocktails = cocktails,
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

function addIds(item, i){
    item.id = i
    return item
}


export default store