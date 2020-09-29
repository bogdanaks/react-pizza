export enum PIZZA {
    FETCH_PIZZAS = 'PIZZA/FETCH_PIZZAS',
}

interface FetchPizzaAction {
    type: typeof PIZZA.FETCH_PIZZAS
    payload: Array<object>
}

export type PizzaActionTypes = FetchPizzaAction
