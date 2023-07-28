import { createSlice } from '@reduxjs/toolkit'
import ContactClass from '../../Models/Contacts'

type ActionsState = {
    editing: boolean
    adding: boolean
    contact?: ContactClass
}

const initialState: ActionsState = {
    editing: false,
    adding: false
}

const actionsSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        setEditMode: (state) => {
            state.editing = !state.editing
            state.adding = false
        },
        setAddingMode: (state) => {
            state.adding = !state.adding
            state.editing = false
        }
    }
})

export const { setAddingMode, setEditMode } = actionsSlice.actions
export default actionsSlice.reducer
