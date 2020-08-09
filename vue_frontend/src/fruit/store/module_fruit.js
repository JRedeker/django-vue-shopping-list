import api from "../../rest/rest";
    
export const MAX_COUNT = 42
export const MIN_COUNT = 0
export const ACTION_GET_FRUITS = 'ACT_GET_FRUITS'
export const ACTION_SET_ACTIVE_FRUIT = 'ACT_SET_ACTIVE_FRUIT'
export const ACTION_INCREMENT_COUNTER = 'ACT_INC_COUNT'
export const ACTION_DECREMENT_COUNTER = 'ACT_DEC_COUNT'
const MUTATION_SET_FRUITS = 'MUT_SET_FRUITS'
const MUTATION_SET_ACTIVE_FRUIT = 'MUT_SET_ACTIVE_FRUIT'
const MUTATION_INCREMENT_COUNTER = 'MUT_INC_COUNT'
const MUTATION_DECREMENT_COUNTER = 'MUT_DEC_COUNT'

export default {
    namespaced: false,
    state: {
        count: 0,
        fruits: [],
        activeFruit: null,
    },
    mutations: {
        [MUTATION_SET_FRUITS](state, fruitList) {
           state.fruits = fruitList;
        },
        [MUTATION_SET_ACTIVE_FRUIT](state, fruit) {
            state.activeFruit = fruit;
        },
        [MUTATION_INCREMENT_COUNTER]: state => state.count++,
        [MUTATION_DECREMENT_COUNTER]: state => state.count--
    },
    actions: {
        [ACTION_GET_FRUITS](context) {
            api.getFruits()
                .then(function (response) {
                    context.commit(MUTATION_SET_FRUITS, response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        [ACTION_SET_ACTIVE_FRUIT](context, fruitId) {
            api.getFruit(fruitId)
                .then(function (response) {
                    context.commit(MUTATION_SET_ACTIVE_FRUIT, response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        [ACTION_INCREMENT_COUNTER](context) {
            if (context.state.count < MAX_COUNT) {
                context.commit(MUTATION_INCREMENT_COUNTER);
            }
        },
        [ACTION_DECREMENT_COUNTER](context) {
            if (context.state.count > MIN_COUNT) {
                context.commit(MUTATION_DECREMENT_COUNTER);
            }
        }
        
    },
}