import React from 'react'
import styled from 'styled-components'
import EducationItem from './EducationItem'
import mockupMobile from '../../assets/images/landing/benefits-image-mobile.png'
import mockup2Mobile from '../../assets/images/landing/benefits-image2-mobile.png'

const StyledSection = styled.section`
    padding: 64px 16px 48px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1A202E;
    color: white;
    border: 4px solid dodgerblue;
`

const Title = styled.h2`
    margin-bottom: 60px;
    width: 288px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -1.386px;
    border: 1px dashed green;
`

const MockupImage = styled.img`
    margin-bottom: 24px;
    border: 1px dashed green;
`

const Header3 = styled.h3`
    margin-bottom: 30px;
    width: 100%;
    // align-self: flex-start;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -1.386px;
    border: 1px dashed green;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid white;
`

const Mockup2Image = styled.img`
    margin-top: 184px;
    margin-bottom: 24px;
    border: 1px dashed green;
`

export default function BenefitsSection() {
    return (
        <StyledSection>
            <Title>{'MPower Benefits for You'}</Title>
            <MockupImage
                src={mockupMobile}
                alt={'product image'}
            />
            <Header3>{'Education'}</Header3>
            <ListWrapper>
                <EducationItem text={'Learn how to use your minority experience as an asset'} />
                <EducationItem text={'Grow your business and leadership skills with dynamic content'} />
                <EducationItem text={'Find inspiration in minority success stories and teachings'} />
            </ListWrapper>
            <Mockup2Image
                src={mockup2Mobile}
                alt={'product image'}
            />
            <Header3>{'Opportunity'}</Header3>
            <ListWrapper>
                <EducationItem text={'Find employment within companies committed to supporting minority professionals'} />
                <EducationItem text={'Accelerate your career through reciprocal mentor relationships'} />
                <EducationItem text={'Engage in on-going dialogue and professional support within the MPower community'} />
            </ListWrapper>
        </StyledSection>
    )
}
