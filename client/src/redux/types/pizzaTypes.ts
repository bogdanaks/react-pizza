// enums
export enum PIZZA {
    FETCH_PIZZAS = 'PIZZA/FETCH_PIZZAS',
}

// initialState
export interface PizzaState {
    pizzas: Array<object>
}

// actions
interface FetchPizzaAction {
    type: typeof PIZZA.FETCH_PIZZAS
    payload: Array<object>
}

export type PizzaActionTypes = FetchPizzaAction
