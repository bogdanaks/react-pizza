import produce, { Draft } from 'immer'
import { PizzaState, PIZZA, PizzaActionTypes } from '../types/pizzaTypes'

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
