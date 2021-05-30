import React from 'react'
import styled from 'styled-components'
// import { PlatformCard1, PlatformCard2, PlatformCard3 } from '../reusable-components/'
import mobileGraph from '../../assets/images/home-platform-graphic.png'
import desktopGraph from '../../assets/images/home/platform-graphic-desktop.png'
import membershipCardMobile from '../../assets/images/home/platform-membership-card-mobile.png'
import membershipCardDesktop from '../../assets/images/home/platform-membership-card-desktop.png'
import placementCardMobile from '../../assets/images/home/platform-placement-card-mobile.png'
import placementCardDesktop from '../../assets/images/home/platform-placement-card-desktop.png'
import servicesCardMobile from '../../assets/images/home/platform-services-card-mobile.png'
import servicesCardDesktop from '../../assets/images/home/platform-services-card-desktop.png'
import backgroundDots from '../../assets/images/home/platform-background-stripes.svg'


const StyledSection = styled.section`
    position: relative;
    padding: 0px 16px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // gap: 48px;
    overflow: hidden;
    border: 2px dashed black;

    @media (min-width: 1024px) {
        // overflow: visible;

        // background: lightblue;
        display: block;
    }

    // & > .graph-image {
    //     width: 288px;
    //     border: 1px dashed orange;
    // }

    & > .graph {
        width: 288px;
        width: 100%;
        height: 288px;
        background-image:
            url(${mobileGraph});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px dashed orange;

        @media (min-width: 1024px) {
            position: absolute;
            top: 60px;
            left: calc(50% - 435px/2);
            width: 435px;
            height: 435px;    
            background-image:
                url(${desktopGraph});
        }
    }

    & > .card-container {
        width: 100%;
        border: 1px solid blue;

        & > .card-1 {
            width: 288px;
            height: 196px;
            background-image: 
                url(${membershipCardMobile});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            border: 1px dashed orange;
    
            @media (min-width: 1024px) {
                position: absolute;
                top: 162px;
                left: 128px;
                width: 352px;
                height: 172px;
                background-image:
                    url(${membershipCardDesktop});
            }
        }

        & > .card-2 {
            width: 288px;
            height: 180px;
            background-image: 
                url(${placementCardMobile});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            border: 1px dashed orange;
    
            @media (min-width: 1024px) {
                position: absolute;
                top: 162px;
                right: 128px;
                width: 352px;
                height: 172px;
                background-image:
                    url(${placementCardDesktop});
            }
        }
    }

    & > .background-dots {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            position: absolute;
            left: 226px;
            bottom: -24px;
            // border: 1px dashed orange;    
        }
    }
`

const CardContainer = styled.div`
    max-width: 288px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border: 1px solid dodgerblue;
    // opacity: 0.3;
    background: none;
    z-index: -1;

    @media (min-width: 1024px) {
        // background: lightgrey;
        width: 100%;
        height: 824px;
        display: block;
    }

    // & > .card-1 {
    //     width: 288px;
    //     height: 196px;
    //     background-image: 
    //         url(${membershipCardMobile});
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     border: 1px dashed orange;

    //     @media (min-width: 1024px) {
    //         position: absolute;
    //         top: 162px;
    //         left: 128px;
    //         width: 352px;
    //         height: 172px;
    //         background-image:
    //             url(${membershipCardDesktop});
    //     }
    // }

    // & > .card-1 {
    //     width: 288px;
    //     height: 196px;
    //     background-image: 
    //         url(${membershipCardMobile});
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     // border: 1px dashed orange;

    //     @media (min-width: 1024px) {
    //         position: absolute;
    //         top: 162px;
    //         left: 128px;
    //         width: 352px;
    //         height: 172px;
    //         background-image:
    //             url(${membershipCardDesktop});
    //     }
    // }

    // & > .card-2 {
    //     width: 288px;
    //     height: 180px;
    //     background-image: 
    //         url(${placementCardMobile});
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     border: 1px dashed orange;

    //     @media (min-width: 1024px) {
    //         position: absolute;
    //         top: 162px;
    //         right: 128px;
    //         width: 352px;
    //         height: 172px;
    //         background-image:
    //             url(${placementCardDesktop});
    //     }
    // }

    // & > .card-3 {
    //     width: 288px;
    //     height: 180px;
    //     background-image: 
    //         url(${servicesCardMobile});
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     border: 1px dashed orange;

    //     @media (min-width: 1024px) {
    //         position: absolute;
    //         bottom: 152px;
    //         left: calc(50% - 352px/2);
    //         width: 352px;
    //         height: 172px;
    //         background-image:
    //             url(${servicesCardDesktop});
    //     }
    // }
`


const PlatformCard = ({ children }) => {
    return (
        <CardContainer>
            { children }
        </CardContainer>
    )
}


export default function PlatformSection() {
    return (
        <StyledSection>
            <div className={'graph'}></div>
            <div className={'card-container'}>
                <div className={'card-1'}></div>
            </div>

            <div className={'card-container'}>
                <div className={'card-2'}></div>
            </div>

            {/* <img
                src={mobileGraph}
                alt={'platform graph iamge'}
                className={'graph-image'}
            /> */}
            {/* <div className={'card-container'}> */}
                {/* <PlatformCard> */}
                    {/* <div className={'card-2'}></div> */}
                    {/* <div className={'card-3'}></div> */}
                    {/* <img
                        src={membershipCardMobile}
                        alt={'alt text'}
                        className={'card-1'}
                    /> */}
                    {/* <img
                        src={placementCardMobile}
                        alt={'alt text'}
                        className={'card-2'}
                    /> */}
                    {/* <img
                        src={servicesCardMobile}
                        alt={'alt text'}
                        className={'card-3'}
                    /> */}
                {/* </PlatformCard> */}
                {/* <PlatformCard1 title={'Membership'} body={'Builds an active network of diverse professionals empowered by their individual lived experiences through personal & professional development.'} />
                <PlatformCard2 title={'Placement'} body={'Internal recruiting services engage a network of companies committed to recruiting, onboarding, and mentoring M2N membership.'} />
                <PlatformCard3 title={'Services'} body={'Supports transformation change at the systematic level through DEI support and services lead by industry leaders.'} /> */}
            {/* </div> */}
            <img 
                src={backgroundDots}
                alt={'background dots image'}
                className={'background-dots'}
            />
        </StyledSection>
    )
}
