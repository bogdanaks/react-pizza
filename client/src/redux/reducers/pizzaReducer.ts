import produce, { Draft } from 'immer'
import { PizzaState, PizzaTypes, PizzaActionTypes } from '../types/pizzaTypes'

const initialState: PizzaState = {
    pizzas: [],
    category: {
        list: [],
        active: '',
    },
}

export const pizzaReducer = produce((draft: Draft<PizzaState>, action: PizzaActionTypes) => {
    switch (action.type) {
        case PizzaTypes.FETCH_PIZZAS:
            draft.pizzas = action.payload
            break
        case PizzaTypes.FETCH_CATEGORY:
            draft.category.list = action.payload
            break
        case PizzaTypes.SET_CATEGORY:
            draft.category.active = action.payload
            break
    }
}, initialState)
