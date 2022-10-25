const redux = require('redux')

const createStore = redux.createStore

const BUY_TOKEN = 'BUY_TOKEN';


function buyToken () {
    return {
        type: BUY_TOKEN,
        info: 'Redux actions'
    }
}

const initialState = {
    tokenCount: 10000
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case BUY_TOKEN: return {
            ...state,
            tokenCount: state.tokenCount - 1
        }
        default: return state
    }

}

const store = createStore(reducer)
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()))

store.dispatch(buyToken())
store.dispatch(buyToken())      // few more state transitions
store.dispatch(buyToken())      // few more state transitions
store.dispatch(buyToken())      // few more state transitions
store.dispatch(buyToken())      // few more state transitions

unsubscribe()