import { PizzaTypes, PizzaThunk } from '../types/pizzaTypes'
import api from 'axios'

export const fetchPizzas = (): PizzaThunk => {
    return async (dispatch) => {
        const { data } = await api.get('/api/pizza')
        dispatch({ type: PizzaTypes.FETCH_PIZZAS, payload: data })
    }
}

// Category actions
export const fetchCategories = (): PizzaThunk => {
    return async (dispatch) => {
        const { data } = await api.get('/api/category')
        dispatch({ type: PizzaTypes.FETCH_CATEGORY, payload: data })
    }
}

export const setCategory = (name: string) => {
    return {
        type: PizzaTypes.SET_CATEGORY,
        payload: name,
    }
}
