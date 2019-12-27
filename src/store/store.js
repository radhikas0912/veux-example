import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana', price: 20 },
            { name: 'Papaya', price: 30 },
            { name: 'Apple', price: 40 },
            { name: 'Pemegrante', price: 50 },
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: `*${product.name}*`,
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: function(state, payload) {
            state.products.forEach(product => {
              product.price -= payload;
            });
          }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload);
            },2000)
        }
    }
})
