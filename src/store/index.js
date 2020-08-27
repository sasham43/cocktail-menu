import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
    },
    getters: {
        count: state => state.count,
        stock: state => state.stock,
        cocktails: state => state.cocktails,
    },
    actions: {
        setInStock: function({commit},{type, in_stock}){
            commit('setInStock', {type, in_stock})
        },
        async getCocktails(){
            const response = await axios.get('/api')

            console.log('response', response)
        }
    },
    mutations: {
        setInStock: (state, {type, in_stock}) => state.stock.map(s=>{
            if(s.type == type){
                s.in_stock = in_stock
            }
            return s
        })
    }
})

function addIds(item, i){
    item.id = i
    return item
}


export default store