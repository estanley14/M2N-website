import React from 'react'
import styled from 'styled-components'
import arrowIcon from '../../assets/icons/arrow.svg'
import arrowRedIcon from '../../assets/icons/arrow-red.svg'

const StyledButton = styled.button`
    padding: 10px 24px 10px 24px;
    display: flex;
    gap: 10px;
    background: none;
    color: ${props => props.color};
    border: ${props => props.border};
    // border: 1px solid #416FF4;
    border-radius: 4px;

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
        // color: #416FF4;
        // color: ${props => props.color};
        // border: 1px dashed orange;
    }

    & > img {
        // border: 1px dashed orange;
    }
`

export default function IconButton(props) {
    const { label, color } = props
    const { 
        textColor, 
        buttonBorder,
    } = setButtonColor(color)

    function setButtonColor(colorValue) {
        if (colorValue === 'blue') {
            return {
                textColor: `#416FF4`,
                buttonBorder: `1px solid #416FF4`
            }
        } else if (colorValue === 'red') {
            return {
                textColor: `#FF6D55`,
                buttonBorder: `1px solid #FF6D55`
            }
        }
    }

    function setIcon(colorValue) {
        if (colorValue === 'blue') {
            return arrowIcon
        } else if (colorValue === 'red') {
            return arrowRedIcon
        }
    }

    let iconImage = setIcon(color)

    return (
        <StyledButton color={textColor} border={buttonBorder}>
            <p color={textColor}>{label}</p>
            <img
                src={iconImage}
                alt={'arrow icon'}
            />
        </StyledButton>
    )
}
