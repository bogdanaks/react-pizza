import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

// enums
export enum PizzaTypes {
    FETCH_PIZZAS = 'PIZZA/FETCH_PIZZAS',
}

// initialState
export interface PizzaItem {
    title: string
}
export interface PizzaState {
    pizzas: PizzaItem[]
}

//thunk type
export type PizzaThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    PizzaState,
    unknown,
    Action<string>
>

// actions
interface FetchPizzaAction {
    type: typeof PizzaTypes.FETCH_PIZZAS
    payload: PizzaItem[]
}

export type PizzaActionTypes = FetchPizzaAction
