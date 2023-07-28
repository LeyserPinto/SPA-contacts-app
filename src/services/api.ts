import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Contact from '../Models/Contacts'

type ApiProps = {
    results: Contact[]
    info: object
}

const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://randomuser.me/api/'
    }),
    endpoints: (builder) => ({
        getContactsList: builder.query<ApiProps, string>({
            query: () => '?inc=id,name,email,cell,picture&results=7'
        })
    })
})

export const { useGetContactsListQuery } = contactsApi
export default contactsApi
