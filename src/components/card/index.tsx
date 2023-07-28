import { useDispatch } from 'react-redux'
import * as I from 'react-icons/md'
import * as S from './style'
import ContactClass from '../../Models/Contacts'
import { setEditMode } from '../../store/reducers/actions'
import { loadData, removeContact } from '../../store/reducers/contacts'

type ContactProps = ContactClass

const Card = ({ id, name, email, cell, picture }: ContactProps) => {
    const dispatch = useDispatch()

    const editContact = () => {
        dispatch(setEditMode())
        dispatch(loadData(id.value))
    }

    return (
        <S.Card>
            <S.CardFigure>
                <img src={picture.large} alt={id.name} />
            </S.CardFigure>
            <S.CardUserData>
                <h3>{`${name.title}. ${name.first} ${name.last}`}</h3>
                <span>{email}</span>
                <span>{cell}</span>
            </S.CardUserData>
            <S.CardActions>
                <span onClick={editContact}>
                    <I.MdEdit />
                </span>
                <span onClick={() => dispatch(removeContact(id.value))}>
                    <I.MdDelete />
                </span>
            </S.CardActions>
        </S.Card>
    )
}

export default Card
