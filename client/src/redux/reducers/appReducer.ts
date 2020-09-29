import produce, { Draft } from 'immer'
import { APP } from '../types/appTypes'

interface AppState {
    app: Boolean
}

const initialState: AppState = {
    app: true,
}

export const appReducer = produce((draft: Draft<AppState>, action) => {
    switch (action.type) {
        case APP.SHOW_ALERT:
            draft.app = false
            break
        case APP.HIDE_ALERT:
            draft.app = true
            break
    }
}, initialState)
