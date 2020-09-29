import { combineReducers } from 'redux'

import { appReducer } from './appReducer'
import { pizzaReducer } from './pizzaReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    pizza: pizzaReducer,
})
