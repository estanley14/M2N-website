import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 160px;
    height: 45px;
    color: #FFFFFF;
    border-radius: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.5px;
    border: ${props => props.border};
    background: ${props => props.background};
`

export default function HeaderButton(props) {
    const { label, type } = props
    const { backgroundColor, border } = setButtonType(type)
    console.log(backgroundColor)

    function setButtonType(buttonType) {
        if (buttonType === 'primary') {
            return {
                backgroundColor: '#27AAE1',
                border: `1px solid #27AAE1`
            }
        } else if (buttonType === 'secondary') {
            return {
                backgroundColor: 'none',
                border: `1px solid #FFFFFF`
            }
        }
    }

    return <StyledButton background={backgroundColor} border={border}>{label}</StyledButton>
}
