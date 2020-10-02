import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

// enums
export enum PizzaTypes {
    FETCH_PIZZAS = 'PIZZA/FETCH_PIZZAS',
    FETCH_CATEGORY = 'PIZZA/FETCH_CATEGORY',
    SET_CATEGORY = 'PIZZA/SET_CATEGORY',
}

// initialState
export interface PizzaItem {
    _id: string
    title: string
}
export interface CategoryItem {
    _id: string
    name: string
}

export interface PizzaState {
    pizzas: PizzaItem[]
    category: {
        list: CategoryItem[]
        active: string
    }
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
interface FetchCategoriesAction {
    type: typeof PizzaTypes.FETCH_CATEGORY
    payload: CategoryItem[]
}
interface SetCategoryAction {
    type: typeof PizzaTypes.SET_CATEGORY
    payload: string
}

export type PizzaActionTypes = FetchPizzaAction | FetchCategoriesAction | SetCategoryAction
