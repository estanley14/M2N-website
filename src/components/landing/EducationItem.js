import React from 'react'
import styled from 'styled-components'
import checkIcon from '../../assets/images/landing/benefits-check-icon.svg'

const ItemContainer = styled.div`
    padding: 20px 20px 20px 20px;
    display: flex;
    gap: 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
`

const Text = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    color: #FFFFFF;
    // border: 1px dashed orange;
`

const CheckImage = styled.img`
    // border: 1px dashed green;
`

export default function EducationItem(props) {
    const { text } = props
    
    return (
        <ItemContainer>
            <CheckImage
                src={checkIcon}
                alt={'checkmark icon'}
            />
            <Text>{text}</Text>
        </ItemContainer>
    )
}
