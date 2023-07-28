import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootState } from '../../store'
import { setAddingMode, setEditMode } from '../../store/reducers/actions'
import * as I from 'react-icons/md'
import {
    editContact,
    addContact,
    resetSelected
} from '../../store/reducers/contacts'

const Modal = () => {
    const { selected } = useSelector((state: RootState) => state.contacts)
    const { editing } = useSelector((state: RootState) => state.actions)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [titleName, setTitleName] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const [picture, setPicture] = useState(
        'https://img.freepik.com/premium-photo/user-icon-person-symbol-human-avatar-3d-render_473931-217.jpg?w=740'
    )
    const [id, setId] = useState({
        name: 'IDBYDATE',
        value: Date.now().toString()
    })

    const dispatch = useDispatch()

    const setContactFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    const setContactLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }
    const setContactTitleName = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
    }

    const setContactEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const setContactCell = (e: ChangeEvent<HTMLInputElement>) => {
        setCell(e.target.value)
    }
    const saveContactData = (e: FormEvent, isEdit: boolean) => {
        const Contact = {
            name: {
                first: firstName,
                last: lastName,
                title: titleName
            },
            email: email,
            cell: cell,
            picture: { large: picture, medium: '', thumbnail: '' },
            id: id
        }

        e.preventDefault()
        if (isEdit) {
            dispatch(editContact(Contact))
            dispatch(setEditMode())
        } else {
            dispatch(addContact(Contact))
            dispatch(setAddingMode())
        }
    }

    const cancelOperation = (e: FormEvent, isEdit: boolean) => {
        e.preventDefault()
        if (isEdit) {
            dispatch(setEditMode())
        } else {
            dispatch(setAddingMode())
        }
        dispatch(resetSelected())
    }

    useEffect(() => {
        if (selected !== undefined) {
            if (selected.name.first.length > 0) {
                setFirstName(selected.name.first)
                setLastName(selected.name.last)
                setTitleName(selected.name.title)
            }
            if (selected.email.length > 0) {
                setEmail(selected.email)
            }
            if (selected.cell.length > 0) {
                setCell(selected.cell)
            }
            if (selected.picture.large.length > 0) {
                setPicture(selected.picture.large)
            }
            if (selected.id.value.length > 0) {
                setId({
                    name: selected.id.name,
                    value: selected.id.value
                })
            }
        }
    }, [selected])
    return (
        <S.ModalContainer>
            <S.Board>
                <S.BoardHead>
                    <img src={picture} alt="use Image" />
                </S.BoardHead>
                <S.BoardInputs>
                    <S.InputNameSection>
                        <S.Inputbox>
                            <input
                                type="text"
                                required
                                value={titleName}
                                onChange={setContactTitleName}
                            />
                            <span>Title</span>
                        </S.Inputbox>
                        <S.Inputbox>
                            <input
                                type="text"
                                required
                                value={firstName}
                                onChange={setContactFirstName}
                            />
                            <span>Fist Name</span>
                        </S.Inputbox>
                        <S.Inputbox>
                            <input
                                type="text"
                                required
                                value={lastName}
                                onChange={setContactLastName}
                            />
                            <span>Last Name</span>
                        </S.Inputbox>
                    </S.InputNameSection>
                    <S.Inputbox>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={setContactEmail}
                        />
                        <span>Email</span>
                    </S.Inputbox>
                    <S.Inputbox>
                        <input
                            type="tel"
                            required
                            value={cell}
                            onChange={setContactCell}
                            maxLength={15}
                        />
                        <span>Phone</span>
                    </S.Inputbox>
                </S.BoardInputs>
                <S.BoardButtons>
                    <S.BoardButton
                        type="submit"
                        onClick={(e) => saveContactData(e, editing)}
                    >
                        <I.MdSave />
                        Save
                    </S.BoardButton>
                    <S.BoardButton onClick={(e) => cancelOperation(e, editing)}>
                        <I.MdCancel />
                        Cancel
                    </S.BoardButton>
                </S.BoardButtons>
            </S.Board>
            <S.CloseButton onClick={() => dispatch(setEditMode())}>
                <I.MdClose />
            </S.CloseButton>
        </S.ModalContainer>
    )
}

export default Modal
