import { PizzaState } from './pizzaTypes'
import { AppState } from './appTypes'

// initialState
export interface RootState {
    app: AppState
    pizza: PizzaState
}
