import { PizzaTypes, PizzaThunk } from '../types/pizzaTypes'
// import api from 'axios'

export const fetchPizzas = (): PizzaThunk => {
    return async (dispatch) => {
        const pizzas = await (
            await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
        ).json()

        dispatch({ type: PizzaTypes.FETCH_PIZZAS, payload: pizzas })
    }
}
