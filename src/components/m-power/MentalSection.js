import React from 'react'
import styled from 'styled-components'
import meditationIcon from '../../assets/images/mpower/mpower-mental-meditation.svg'
import articlesIcon from '../../assets/images/mpower/mpower-mental-articles.svg'
import gratitudeIcon from '../../assets/images/mpower/mpower-mental-gratitude.svg'
import mocksupImageMobile from '../../assets/images/mpower/mpower-mental-mockups-mobile.png'
import mocksupImageDesktop from '../../assets/images/mpower/mpower-mental-mockups-desktop.png'
import stripesImageMobile from '../../assets/images/mpower/mpower-mental-stripes-mobile.png'
import stripesImageDesktop from '../../assets/images/mpower/mpower-mental-stripes-desktop.png'
import ovalImageMobile from '../../assets/images/mpower/mpower-mental-oval-mobile.png'
// import ovalImageDesktop from '../../assets/images/mpower/mpower-mental-oval-desktop.png'
import pieSliceImageMobile from '../../assets/images/mpower/mpower-mental-pieslice-mobile.png'
// import pieSliceImageDesktop from '../../assets/images/mpower/mpower-mental-pieslice-desktop.png'

const StyledSection = styled.section`
    position: relative;
    padding-bottom: 56px;
    // border: 2px solid lightcoral;

    @media (min-width: 1024px) {
        height: 828px;
    }
`

const ContentContainer = styled.div`
    padding: 320px 16px 0px 16px;
    // border: 1px dashed dodgerblue;

    @media (min-width: 1024px) {
        position: absolute;
        top: 124px;
        right: 140px;
        padding: 0px 0px 0px 0px;
        max-width: 500px;
    }
`

const Title = styled.h2`
    width: 100%;
    margin-bottom: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: #11243D;
    // border: 1px dotted orange;

    @media (min-width: 1024px) {
        font-size: 62px;
        line-height: 100%;
    }
`

const Subtitle = styled.p`
    width: 100%;
    margin-bottom: 40px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #4F4F4F;
    // border: 1px dotted orange;
`

const ItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    // border: 1px solid black;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`

const Item = styled.div`
    display: flex;
    gap: 16px;
    // border: 1px dotted orange;

    @media (min-width: 1024px) {
        width: 100%;
    }
`

const ItemImage = styled.img`
    width: 40px;
    height: 40px;
    // border: 1px solid black;
`

const ItemTitle = styled.h4`
    margin-bottom: 8px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #333333;
    // border: 1px dotted orange;
`

const ItemDescription = styled.p`
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #707A89;
    // border: 1px dotted orange;
`

const NewMockupImage = styled.img`
    position: absolute;
    top: 36px;
    left: 0px;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        top: 124px;
        left: -64px;
    }
`

const BackgroundStripesImage = styled.img`
    position: absolute;
    top: 0px;
    right: 100px;
    width: 68px;
    height: 68px;
    opacity: 0.2;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        top: 72px;
        left: 366px;
        width: 168px;
        height: 168px;
    }
`

const BackgroundWedge = styled.img`
    position: absolute;
    top: 192px;
    left: 68px;
    width: 88px;
    height: 88px;
    // opacity: 0.2;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        top: 440px;
        width: 212px;
        height: 212px;
    }
`

const BackgroundOvalImage = styled.img`
    position: absolute;
    top: 240px;
    right: 0px;
    width: 64px;
    height: 64px;
    // opacity: 0.2;
    // border: 1px dashed orange;

    @media (min-width: 1024px) {
        top: 516px;
        left: 548px;
        width: 212px;
        height: 212px;
    }
`

export default function MentalSection() {
    return (
        <StyledSection>
            <BackgroundOvalImage src={ovalImageMobile} alt={'background image'} />
            <BackgroundWedge src={pieSliceImageMobile} alt={'background image'} />
            <BackgroundStripesImage src={stripesImageMobile} alt={'background image'} />
            
            <NewMockupImage 
                srcSet={
                    `${mocksupImageMobile} 320w`,
                    `${mocksupImageDesktop} 784w`
                }

                sizes={
                    `(min-width: 1024px) 784px`
                }

                src={mocksupImageMobile}
                alt={'trying this out'} 
            />
            <ContentContainer>
                <Title>{'Mental Wellness'}</Title>
                <Subtitle>{'Creating space for members to acknowledge, address and support their mental wellness. Providing tools and daily practices to help members build a healthy relationship with themselves.'}</Subtitle>
                <ItemsWrapper>
                    <Item>
                        <ItemImage src={meditationIcon} alt={'meditation image'} />
                        <div>
                            <ItemTitle>{'Daily Meditation'}</ItemTitle>
                            <ItemDescription>{'Daily meditations with relatable content and minority representation to guide members awareness of their own mental wellness.'}</ItemDescription>
                        </div>
                    </Item>

                    <Item>
                        <ItemImage src={articlesIcon} alt={'meditation image'} />
                        <div>
                            <ItemTitle>{'Daily Articles'}</ItemTitle>
                            <ItemDescription>{'Thought-provoking perspectives and affirmations to support members mental wellness.'}</ItemDescription>
                        </div>
                    </Item>

                    <Item>
                        <ItemImage src={gratitudeIcon} alt={'meditation image'} />
                        <div>
                            <ItemTitle>{'Daily Gratitude'}</ItemTitle>
                            <ItemDescription>{'An opportunity for members to reflect and track their mental wellness journey.'}</ItemDescription>
                        </div>
                    </Item>
                </ItemsWrapper>
            </ContentContainer>
        </StyledSection>
    )
}