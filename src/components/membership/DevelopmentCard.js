import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 32px 24px 64px 24px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 16px;
`

const CardIcon = styled.img`
    margin-bottom: 32px;
    width: 80px;
    height: 80px;
    // border: 1px dashed green;
`

const Title = styled.h4`
    margin-bottom: 24px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    color: #333333;
    // border: 1px dashed green;
`

const SubTitle = styled.p`
    height: 98px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #707A89;
    // border: 1px dashed green;
`

export default function DevelopmentCard(props) {
    const {
        title,
        subtitle,
        icon
    } = props

    return (
        <CardContainer>
            <CardIcon src={icon} alt={'empower icon'} />
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </CardContainer>
    )
}
