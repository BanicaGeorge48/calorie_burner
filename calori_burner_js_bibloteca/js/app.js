import { createStore } from "./redux/index.js";

const reducer = (state, action) => {
    switch(action.type){
        case 'BURN' :
    return {
        calories: state.calories + 1.42,
        clicks: state.clicks - 1,
    };
        default:
        return state 
    }
};

const initialState = {
    calories: 0,
    clicks: 1360563,
};

const store = createStore(reducer, initialState); 
// store.dispatch()
// store.getState()
// store.subscribe()

store.subscribe(() => {
    console.log('ha cambiado algo en el store', store.getState());
    const state = store.getState();
    window.result.textContent = `You have burned ${state.calories.toFixed(2)} calories`;
    window.remaining.textContent = `You have ${state.clicks} clicks left`;
});


const burn = () => {
    store.dispatch({
        type: 'BURN',
    });
};

window.burn.addEventListener('click', burn);