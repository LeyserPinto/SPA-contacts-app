import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contacts'
import actionsReducers from './reducers/actions'
import contactsApi from '../services/api'

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        actions: actionsReducers,
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
