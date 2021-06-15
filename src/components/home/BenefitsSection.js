import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { BenefitsList } from './BenefitsList'
import logoMobile from '../../assets/images/home/benefits-logo-mobile.png'
import logoDesktop from '../../assets/images/home/benefits-logo-desktop.png'
// import mockupsMobile from '../../assets/images/home/benefits-mockups-mobile.png'
// import mobileImg from '../../assets/images/home/benefits-mockups-mobile.png'
import appleStoreMobile from '../../assets/images/home/whatis-applestore-mobile.svg'
import appleStoreDesktop from '../../assets/images/home/whatis-applestore-desktop.svg'
import googlePlayMobile from '../../assets/images/home/whatis-googleplay-mobile.svg'
import googlePlayDesktop from '../../assets/images/home/whatis-googleplay-desktop.svg'
import redOval from '../../assets/images/home/benefits-redoval.svg'
import dotsImage from '../../assets/images/home/benefits-dots.svg'
import grayOvalMobile from '../../assets/images/home/benefits-grayoval-mobile.svg'
import grayOvalDesktop from '../../assets/images/home/benefits-grayoval-desktop.svg'
import stripesMobile from '../../assets/images/home/benefits-stripes-mobile.svg'
import stripesDesktop from '../../assets/images/home/benefits-stripes-desktop.svg'
import mockupsMobile from '../../assets/images/home-benefits-mockups-mobile.png'
import mockupsDesktop from '../../assets/images/home-benefits-mockups-desktop.png'

const StyledSection = styled.section`
    position: relative;
    padding: 0px 0px 96px 0px;
    display: flex;
    flex-direction: column;
    background #191C23;
    // border: 2px solid red;

    @media (min-width: 1024px) {
        padding: 0px 0px 0px 0px;
        flex-direction: row;
        justify-content: space-between;
    }

    & > .blue-section {
        position: relative;
        width: 100%;
        height: 276px;
        order: 1;
        background: #416FF4;
        // border: 2px dashed lightgreen;

        @media (min-width: 1024px) {
            min-width: 648px;
            height: auto;
            order: 2;
        }

        & > .gray-oval {
            position: absolute;
            top: 32px;
            left: calc(50% - 377px/2);
            width: 377px;
            height: 377px;
            background-image:
                url(${grayOvalMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                position: absolute;
                top: 160px;
                left: -66px;
                width: 672px;
                height: 672px;
                background-image:
                    url(${grayOvalDesktop});
            }
        }

        & > .stripes {
            position: absolute;
            bottom: -101px;
            right: -36px;
            width: 112px;
            height: 175px;
            background-image:
                url(${stripesMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: stretch;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                top: 596px;
                right: 36px;
                width: 177px;
                height: 175px;
                background-image:
                    url(${stripesDesktop});
            }
        }

        & > .image {
            position: absolute;
            top: 64px;
            left: -18px;
            width: 337px;
            height: 268px;
            background-image:
                url(${mockupsMobile});
            background-repeat: no-repeat;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                top: 210px;
                left: -73px;
                background-image:
                    url(${mockupsDesktop});
                width: 734px;
                height: 583px;
            }
        }
    }

    & > .content-wrapper {
        position: relative;
        padding: 120px 0px 0px 0px;
        width: 100%;
        order: 2;
        // border: 2px dashed lightgreen;

        @media (min-width: 1024px) {
            padding: 185px 140px 232px 160px;
            order: 1;
        }

        & > .description-wrapper {
            margin-bottom: 40px;
            padding-left: 16px;
            padding-right: 16px;
            // border: 1px dashed white;

            @media (min-width: 1024px) {
                padding: 0px 0px 0px 0px;
                margin-bottom: 72px;
                // width: 496px;
            }

            & > h2 {
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 120%;
                color: #FFFFFF;

                @media (min-width: 1024px) {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 62px;
                    line-height: 120%;
                    color: #FFFFFF;
                }
            }

            & > div {
                display: flex;
                align-items: center;
                gap: 4px;
                // border: 1px dotted orange;

                & > .logo-image {
                    width: 116px;
                    height: 40px;
                    background-image:
                        url(${logoMobile});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;

                    @media (min-width: 1024px) {
                        width: 262px;
                        height: 72px;
                        background-image:
                        url(${logoDesktop});
                    }
                }

                & > h2 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 120%;
                    color: #FFFFFF;

                    @media (min-width: 1024px) {
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 62px;
                        line-height: 120%;
                        color: #FFFFFF;
                    }
                }
            }

            & > p {
                font-family: DM Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 140%;
                color: #FFFFFF;
                opacity: 0.7;
                // border: 1px dotted orange;
            }

            & > .button-wrapper {
                margin-top: 32px;
                display: flex;
                gap: 12px;
                // border: 1px dotted blue;

                & > .applestore-image {
                    // border: 1px solid white;
                    width: 116px;
                    height: 40px;
                    background-image:
                        url(${appleStoreMobile});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: stretch;
                    cursor: pointer;

                    @media (min-width: 1024px) {
                        width: 132px;
                        height: 48px;
                        background-image: 
                            url(${appleStoreDesktop});
                    }
                }

                & > .googleplay-image {
                    width: 116px;
                    height: 40px;
                    background-image:
                        url(${googlePlayMobile});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: stretch;
                    cursor: pointer;

                    @media (min-width: 1024px) {
                        width: 156px;
                        height: 48px;
                        background-image: 
                            url(${googlePlayDesktop});
                    }
                }
            }
        }

        & > .benefits-wrapper { 
            padding-left: 16px;
            padding-right: 16px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            // border: 1px dashed white;

            @media (min-width: 1024px) {
                padding: 0px 0px 0px 0px;
                flex-direction: row;
                width: 496px;
            }
    
            & > .members-benefits {
                width: 100%;
                // border: 2px dotted orange;
            }
    
            & > .organizations-benefits {
                width: 100%;
                // border: 2px dotted orange;
            }
        }
    }

    & > .red-oval {
        position: absolute;
        top: -20px;
        left: -114px;
        width: 260px;
        height: 260px;
        // border: 1px dashed orange;
    }

    & > .dots {
        position: absolute;
        bottom: -60px;
        left: -148px;
        width: 258px;
        height: 123px;
        // border: 1px dashed orange;

        @media (min-width: 1024px) {
            bottom: -40px;
            left: -54px;
        }
    }
`

export default function BenefitsSection() {

    function handleMembersClick() {
        navigate('/membership/')
    }

    function handleOrganizationsClick() {
        navigate('/organization/')
    }

    function handleAppleStoreClick() {
        navigate('/mpower-app/')
    }

    function handleGoogleStoreClick() {
        navigate('/mpower-app/')
    }

    return (
        <StyledSection>
            <div className={'blue-section'}>
                <div className={'gray-oval'}></div>
                <div className={'stripes'}></div>
                <div className={'image'}></div>
            </div>

            <div className={'content-wrapper'}>
                <div className={'description-wrapper'}>
                    <h2>{'What is'}</h2>
                    <div>
                        <div className={'logo-image'}></div>
                        <h2>{'?'}</h2>
                    </div>  
                    <p>{'A dynamic and interactive online platform to empower minority professionals.  '}</p>

                    <div className={'button-wrapper'}>
                        <div 
                            className={'applestore-image'}
                            onClick={() => handleAppleStoreClick()}
                        ></div>
                        <div 
                            className={'googleplay-image'}
                            onClick={() => handleGoogleStoreClick()}
                        ></div>
                    </div>
                </div>
                <div className={'benefits-wrapper'}>
                    <BenefitsList
                        color={'blue'}
                        listTitle={'For Members'}
                        labels={['Newsfeed', 'Online Classes', 'Keynote Speakers']}
                        buttonLabel={'View Benefits'}
                        className={'members-benefits'}
                        toPath={'/membership/'}
                        onClick={() => handleMembersClick()}
                    />

                    <BenefitsList
                        color={'red'}
                        listTitle={'For Organizations'}
                        labels={['Jobs', 'Talent Scores', 'Systems & Services']}
                        buttonLabel={'View Benefits'}
                        className={'organizations-benefits'}
                        toPath={'/organization'}
                        onClick={() => handleOrganizationsClick()}
                    />
                </div>
            </div>
            <img
                src={redOval}
                alt={'background shape oval'}
                className={'red-oval'}
            />

            <img
                src={dotsImage}
                alt={'background shape dots'}
                className={'dots'}
            />
        </StyledSection>
    )
}
