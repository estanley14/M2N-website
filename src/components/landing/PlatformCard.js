import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    position: relative;
    padding: 56px 20px 40px 20px;
    // width: 288px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.15);
    // border: 1px solid pink;
`

const Title = styled.h5`
    margin-bottom: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 22px;
    color: #FFFFFF;
    // border: 1px dashed green;
`

const Subtitle = styled.h5`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    opacity: 0.75;
    // border: 1px dashed green;
`

const ImageIcon = styled.img`
    position: absolute;
    top: -26px;
    // border: 1px dashed green;
`

export default function PlatformCard(props) {
    const {
        icon,
        title,
        subtitle
    } = props

    return (
        <CardContainer>
            <ImageIcon
                src={icon}
                alt={'card icon'}
            />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </CardContainer>
    )
}
