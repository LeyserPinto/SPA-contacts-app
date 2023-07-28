import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../Models/Contacts'

type ContactState = {
    list: Contact[]
    selected?: Contact
}

const initialState: ContactState = {
    list: [
        {
            name: {
                title: 'Mr',
                first: 'Tejas',
                last: 'Moolya'
            },
            email: 'tejas.moolya@example.com',
            cell: '8437087706',
            id: {
                name: 'UIDAI',
                value: '358060641308'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/men/17.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/17.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/men/17.jpg'
            }
        },
        {
            name: {
                title: 'Mr',
                first: 'Iván',
                last: 'Velasco'
            },
            email: 'ivan.velasco@example.com',
            cell: '654-147-340',
            id: {
                name: 'DNI',
                value: '40933408-V'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/men/47.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/47.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/men/47.jpg'
            }
        },
        {
            name: {
                title: 'Mr',
                first: 'Ronald',
                last: 'Peterson'
            },
            email: 'ronald.peterson@example.com',
            cell: '081-395-3449',
            id: {
                name: 'PPS',
                value: '6145496T'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/men/23.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/men/23.jpg'
            }
        },
        {
            name: {
                title: 'Miss',
                first: 'Loretta',
                last: 'Sautter'
            },
            email: 'loretta.sautter@example.com',
            cell: '0175-7365625',
            id: {
                name: 'SVNR',
                value: '60 220295 S 886'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/women/81.jpg',
                medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/women/81.jpg'
            }
        },
        {
            name: {
                title: 'Ms',
                first: 'Pavitra',
                last: 'Bhardwaj'
            },
            email: 'pavitra.bhardwaj@example.com',
            cell: '9518321805',
            id: {
                name: 'UIDAI',
                value: '542228115609'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/women/88.jpg',
                medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/women/88.jpg'
            }
        },
        {
            name: {
                title: 'Mr',
                first: 'Yandel',
                last: 'Urías'
            },
            email: 'yandel.urias@example.com',
            cell: '(658) 186 9585',
            id: {
                name: 'NSS',
                value: '66 42 52 3420 6'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/men/3.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/3.jpg',
                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg'
            }
        },
        {
            name: {
                title: 'Mr',
                first: 'Sagar',
                last: 'Hiremath'
            },
            email: 'sagar.hiremath@example.com',
            cell: '7663324625',
            id: {
                name: 'UIDAI',
                value: '499154383371'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/men/76.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',
                thumbnail:
                    'https://randomuser.me/api/portraits/thumb/men/76.jpg'
            }
        }
    ]
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        loadData: (state, action: PayloadAction<string>) => {
            state.selected = state.list.find(
                (row) => row.id.value == action.payload
            )
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            const contactIndex = state.list.findIndex(
                (row) => row.id.value === action.payload.id.value
            )

            state.list[contactIndex] = action.payload
        },
        addContact: (state, action: PayloadAction<Contact>) => {
            const contactExist = state.list.find(
                (row) => row.id.value === action.payload.id.value
            )

            if (!contactExist) {
                state.list.push(action.payload)
            }
        },
        removeContact: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(
                (row) => row.id.value !== action.payload
            )
        },
        resetSelected: (state) => {
            state.selected = new Contact(
                {
                    first: '',
                    last: '',
                    title: ''
                },
                '',
                '',
                {
                    large: 'https://img.freepik.com/premium-photo/user-icon-person-symbol-human-avatar-3d-render_473931-217.jpg?w=740',
                    medium: '',
                    thumbnail: ''
                },
                {
                    name: '',
                    value: ''
                }
            )
        }
    }
})

export const {
    loadData,
    editContact,
    removeContact,
    addContact,
    resetSelected
} = contactSlice.actions
export default contactSlice.reducer
