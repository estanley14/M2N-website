import React from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'

const StyledSection = styled.section`
    padding: 76px 16px 180px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1A202E;
    border: 4px solid gold;
`

const Title = styled.h2`
    margin-bottom: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1.584px;
    color: #FFFFFF;
    border: 1px dashed green;
`

export default function SurveySection() {
    return (
        <StyledSection>
            <Title>{'Help our vision come to life with your feedback'}</Title>
            <HeaderButton
                label={'Take the Survey'}
                type={'primary'}
            />
        </StyledSection>
    )
}
