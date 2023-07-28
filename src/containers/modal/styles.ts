import { styled } from 'styled-components'
import themeVariaveis from '../../styles/theme.variaveis'

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Board = styled.form`
    background-color: #100f188a;
    width: 31.25rem;
    height: 31.25rem;
    backdrop-filter: blur(8px);
    border-radius: 5px;
    padding: 1em;
    display: flex;
    flex-direction: column;
`

const boardSectionsFlex = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoardHead = styled(boardSectionsFlex)`
    height: 150px;
    justify-content: space-evenly;
    & img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: thin solid ${themeVariaveis.colors.ternaryWhite};
        margin-bottom: 10px;
    }
`

export const BoardInputs = styled(boardSectionsFlex)`
    height: 60%;
    flex-direction: column;
    gap: 15px;
`
export const Inputbox = styled.div`
    position: relative;
    width: 100%;
    & input {
        width: 100%;
        height: 40px;
        padding-left: 0.5em;
        background-color: transparent;
        border-radius: 5px;
        border: thin solid ${themeVariaveis.colors.indigo};
        color: ${themeVariaveis.colors.principalWhite};
        font-size: 1em;
        margin-bottom: 20px;
    }

    & span {
        position: absolute;
        top: 15%;
        left: 2%;
        color: ${themeVariaveis.colors.indigo};
        transition: all ease 0.3s;
    }

    & input:focus,
    & input:valid {
        background-color: #564f6b;
        border-color: ${themeVariaveis.colors.turquoise};
        outline: none;
        & ~ span {
            color: ${themeVariaveis.colors.turquoise};
            transform: translate(-5px, -38px);
        }
    }
`
export const InputNameSection = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 5rem auto auto;
    gap: 15px;
`

export const BoardButtons = styled(boardSectionsFlex)``

export const boardButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5em;
    cursor: pointer;
`

export const BoardButton = styled(boardButton)`
    border: thin solid ${themeVariaveis.colors.indigo};
    font-size: 1em;
    padding: 5px 1em;
    margin: 0 10px;
    color: ${themeVariaveis.colors.secondaryWhite};
    display: flex;
    align-items: center;
    border-radius: 5px;

    &:hover {
        background-color: ${themeVariaveis.backgorund.principal};
    }

    & svg {
        margin-right: 8px;
        fill: ${themeVariaveis.colors.turquoise};
    }
`
export const CloseButton = styled(boardButton)`
    position: absolute;
    top: 2%;
    right: 2%;
    & svg {
        fill: ${themeVariaveis.colors.ternaryWhite};
    }
`
