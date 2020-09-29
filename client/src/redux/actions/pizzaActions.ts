import { PizzaTypes, PizzaThunk } from '../types/pizzaTypes'
import api from 'axios'

export const fetchPizzas = (): PizzaThunk => {
    return async (dispatch) => {
        const { data } = await api.get('/api/pizza')
        dispatch({ type: PizzaTypes.FETCH_PIZZAS, payload: data })
    }
}
