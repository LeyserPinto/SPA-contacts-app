//dependencies imports
import { useSelector, useDispatch } from 'react-redux'
//internal imports
import type { RootState } from '../../store/index'
import Card from '../../components/card'
import * as S from './styles'
import Modal from '../modal'
import { BoardButton } from '../../styles'
import * as I from 'react-icons/md'
import { setAddingMode } from '../../store/reducers/actions'

const Board = () => {
    const dispatch = useDispatch()
    const contacts = useSelector((state: RootState) => state.contacts.list)
    const { editing, adding } = useSelector((state: RootState) => state.actions)

    const addingMode = () => {
        dispatch(setAddingMode())
    }

    return (
        <>
            <S.Container>
                <S.BoardHeader>
                    <h2>EBAC: Contact App</h2>
                    <p>Main Board</p>
                </S.BoardHeader>
                <S.BoardCards>
                    {contacts.map((row) => (
                        <Card
                            key={row.id.value}
                            id={row.id}
                            name={row.name}
                            email={row.email}
                            cell={row.cell}
                            picture={row.picture}
                        />
                    ))}
                </S.BoardCards>
                <S.BoardFooter>
                    <BoardButton onClick={addingMode}>
                        <I.MdAdd /> Add User
                    </BoardButton>
                </S.BoardFooter>
            </S.Container>
            {(editing || adding) && <Modal />}
        </>
    )
}

export default Board
