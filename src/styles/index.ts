import { createGlobalStyle, styled } from 'styled-components'
import MainBg from '../resources/images/vivid-blurred-colorful-wallpaper-background.jpg'
import themeVariaveis from './theme.variaveis'

export default createGlobalStyle`
//Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
 }
 body{
    overflow: hidden;
 }
 #root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #0e0c18, #0e0c18c2), url(${MainBg});
    background-size: cover;
    color: #F0F0F0;
 }

`

export const Container = styled.div`
    width: 100%;
    max-width: 650px;
    height: 100vh;
`
export const BoardContainer = styled(Container)`
    height: 80vh;
    background-color: #d8d8d823;
    backdrop-filter: blur(5.5px);
    border-radius: 5px;
    padding: 1em;
`
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
