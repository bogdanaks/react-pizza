import produce, { Draft } from 'immer'
import { PIZZA, PizzaActionTypes } from '../actions/pizzaAction/types'

interface PizzaState {
    pizzas: Array<object>
}

const initialState: PizzaState = {
    pizzas: [],
}

export const pizzaReducer = produce((draft: Draft<PizzaState>, action: PizzaActionTypes) => {
    switch (action.type) {
        case PIZZA.FETCH_PIZZAS:
            draft.pizzas = action.payload
            break
    }
}, initialState)
