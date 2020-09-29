import produce, { Draft } from 'immer'
import { AppTypes } from '../types/appTypes'

interface AppState {
    app: Boolean
}

const initialState: AppState = {
    app: true,
}

export const appReducer = produce((draft: Draft<AppState>, action) => {
    switch (action.type) {
        case AppTypes.SHOW_ALERT:
            draft.app = false
            break
        case AppTypes.HIDE_ALERT:
            draft.app = true
            break
    }
}, initialState)
