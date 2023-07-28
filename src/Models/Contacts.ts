type Person = {
    title: string
    first: string
    last: string
}

type Picture = {
    large: string
    medium: string
    thumbnail: string
}

type Id = {
    name: string
    value: string
}

class Contact {
    name: Person
    email: string
    cell: string
    picture: Picture
    id: Id
    constructor(
        name: Person,
        email: string,
        cell: string,
        picture: Picture,
        id: Id
    ) {
        this.name = name
        this.email = email
        this.cell = cell
        this.picture = picture
        this.id = id
    }
}

export default Contact
