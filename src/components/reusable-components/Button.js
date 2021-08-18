import React from 'react'
import styled from 'styled-components'
import arrowIcon from '../../assets/icons/arrow.svg'

const StyledButton = styled.button`
    padding: 8px 24px 8px 24px;
    height: 40px;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 4px;
    align-items: center;
    gap: 10px;
    background: #416FF4;

    & > p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;
        // border: 1px dashed orange;
    }

    & > img {
        display: none;
        height: 24px;
        border: 1px dashed orange;
    }
`

export default function Button(props) {
    const { label, className, onClick } = props

    return <StyledButton className={className} onClick={onClick}>
        <p>{label}</p>
        <img src={arrowIcon} alt={'arrow'} />
    </StyledButton>
}
