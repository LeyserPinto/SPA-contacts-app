import { styled } from 'styled-components'
import themeVariaveis from '../../styles/theme.variaveis'
import { BoardContainer } from '../../styles'

export const Container = styled(BoardContainer)`
    display: grid;
    grid-template-rows: 30px auto 40px;

    & ::-webkit-scrollbar {
        background-color: ${themeVariaveis.backgorund.secondary};
        width: 5px;
    }
    & ::-webkit-scrollbar-thumb {
        background-color: ${themeVariaveis.backgorund.ternary};
        border-radius: 5px;
    }
`

export const BoardHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: end;
    justify-content: space-between;

    & h2 {
        font-size: 1.2em;
    }
    & p {
        text-align: center;
        font-size: 14px;
        max-width: 80%;
        color: ${themeVariaveis.colors.ternaryWhite};
    }
`

export const BoardCards = styled.section`
    padding: 1em;
    overflow: auto;
`
export const BoardFooter = styled.section`
    margin-top: 0.8em;
`
