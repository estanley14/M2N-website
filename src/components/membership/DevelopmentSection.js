import React from 'react'
import styled from 'styled-components'
import DevelopmentCard from './DevelopmentCard'
import empowerIcon from '../../assets/images/membership/development-empower-icon.svg'
import engageIcon from '../../assets/images/membership/development-engage-icon.svg'
import educateIcon from '../../assets/images/membership/development-educate-icon.svg'

const StyledSection = styled.section`
    padding: 96px 16px 96px 16px;
    background: #F3F4F6;
    display: flex;
    flex-direction: column;
    // border: 4px solid lightcoral;

    @media (min-width: 720px) {
        padding: 96px 64px 96px 64px;
    }

    @media (min-width: 1024px) {
        padding: 160px 64px 160px 64px;
    }

    @media (min-width: 1440px) {
        padding: 160px 140px 160px 140px;
    }
`

const Title = styled.h2`
    align-self: center;
    margin-bottom: 32px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 100%;
    text-align: center;
    color: #11243D;
    // border: 1px dashed green;

    @media (min-width: 720px) {
        width: 600px;
        font-size: 62px;
    }

    @media (min-width: 1024px) {
        width: 664px;
    }
`

const SubTitle = styled.p`
    margin-bottom: 64px;
    align-self: center;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #4F4F4F;
    // border: 1px dashed green;

    @media (min-width: 720px) {
        width: 600px;
    }
    
    @media (min-width: 1024px) {
        width: 664px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    // border: 1px dashed green;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 24px;
    }
`

export default function DevelopmentSection() {
    return (
        <StyledSection>
            <Title>{'Member Development'}</Title>
            <SubTitle>{'Members only coursework, discussion groups and guest lectures by globally recognized thought leaders that empower, educate, and engage minority professionals.'}</SubTitle>
            <CardWrapper>
                <DevelopmentCard 
                    title={'Empower'}
                    subtitle={'Members find empowerment by understanding the value their lived experience provides to employing organizations.'}
                    icon={empowerIcon}
                />

                <DevelopmentCard 
                    title={'Educate'}
                    subtitle={'Members continue their education by participating in high level programing to address individual gaps in education or job experience.'}
                    icon={educateIcon}
                />

                <DevelopmentCard 
                    title={'Engage'}
                    subtitle={'Members engage in expanding their skills to better manage daily work, collaborate with peers, and successfully interact with executive management.'}
                    icon={engageIcon}
                />
            </CardWrapper> 
        </StyledSection>
    )
}
