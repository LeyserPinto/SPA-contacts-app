import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: grid;
    grid-template-columns: 0.2fr 0.6fr 0.2fr;
    gap: 1.5rem;
`

export const CardActions = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    & span {
        font-size: 1.6em;
        cursor: pointer;

        & svg:hover {
            fill: #d2b8ff;
        }
    }
`

export const CardFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #ffffff49;
    }
`

export const CardUserData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & span {
        color: #aba9a9;
    }
    & :last-child {
        font-size: 0.8em;
    }
`
