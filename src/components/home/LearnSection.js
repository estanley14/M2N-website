import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { IconButton } from '../reusable-components/'
import { LearnImg1, LearnImg2 } from '../reusable-components/'
import developImage from '../../assets/images/home-learnmore-develop-full-image.png'
import developImageTablet from '../../assets/images/home-learnmore-develop-tablet.png'
import developImage1024 from '../../assets/images/home-learnmore-develop-1024.png'
import developImage1440 from '../../assets/images/home-learnmore-develop-1440.png'
import opportunitiesImage from '../../assets/images/home-learnmore-opportunities-full-image.png'
import opportunitiesImageTablet from '../../assets/images/home-learnmore-opportunities-tablet.png'
import opportunitiesImage1024 from '../../assets/images/home-learnmore-opportunities-1024.png'
import opportunitiesImage1440 from '../../assets/images/home-learnmore-opportunities-1440.png'

const StyledSection = styled.section`
    padding: 96px 16px 56px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    background: #F3F4F6;
    // border: 2px solid lightcoral;

    @media (min-width: 720px) {
        padding: 96px 64px 96px 64px;
    }

    @media (min-width: 1024px) {
        padding: 160px 64px 160px 64px;
    }

    @media (min-width: 1440px) {
        padding: 160px 140px 160px 140px;
    }

    & > .develop-details {
        display: flex;
        flex-direction: column;
        align-items: center;  
        
        @media (min-width: 720px) {
            align-items: flex-start;
        }

        @media (min-width: 1024px) {
            flex-direction: row;
            gap: 24px;
            align-items: center;
        }

        & > .develop-image {
            order: 1;
            width: 288px;
            height: 352px;
            background-image: 
                url(${developImage});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            // border: 1px dashed orange;

            @media (min-width: 720px) {
                width: 100%;
                height: 328px;
                background-image: 
                    url(${developImageTablet})
            }

            @media (min-width: 1024px) {
                order: 2;
                background-image: 
                    url(${developImage1024})
            }

            @media (min-width: 1440px) {
                background-image: 
                    url(${developImage1440})
            }
        }

        & > .wrapper {
            order: 2;
            display: flex;
            flex-direction: column;
            align-tems: flex-start;
            // border: 2px solid blue;

            @media (min-width: 1024px) {
                order: 1;
            }

            & > h4 {
                margin-bottom: 16px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 120%;
                color: #2A2C30;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: right;
                }
            }
        
            & > p {
                margin-bottom: 32px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 140%;
                color: #4B5259;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: right;
                }
            }

            &  > .learn-button {
                align-self: flex-start;

                @media (min-width: 1024px) {
                    align-self: flex-end;
                }
            }
        }
    }

    & > .opportunities-details {
        display: flex;
        flex-direction: column;
        align-items: center;  

        @media (min-width: 720px) {
            align-items: flex-start;
        }

        @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            gap: 24px;
        }

        & > .opportunities-image {
            order: 1;
            width: 288px;
            height: 352px;
            background-image: 
                url(${opportunitiesImage});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            // border: 1px dashed orange;

            @media (min-width: 720px) {
                width: 100%;
                height: 328px;
                background-image: 
                    url(${opportunitiesImageTablet})
            }

            @media (min-width: 1024px) {
                order: 1;
                background-image: 
                    url(${opportunitiesImage1024})
            }

            @media (min-width: 1440px) {
                background-image: 
                    url(${opportunitiesImage1440})
            }
        }

        & > .wrapper {
            order: 2;
            // border: 2px solid blue;

            @media (min-width: 1024px) {
                order: 2;
            }

            & > h4 {
                margin-bottom: 16px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 120%;
                color: #2A2C30;
                // border: 1px dashed orange;
            }
        
            & > p {
                margin-bottom: 32px;
                font-family: DM Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 140%;
                color: #4B5259;
                // border: 1px dashed orange;
            }
        }
    }
`

export default function LearnSection() {

    function handleDevelopClick() {
        navigate('/mpower#development-start')
    }

    function handleOpportunitiesClick() {
        navigate('/mpower#opportunities')
    }

    return (
        <StyledSection>
            <div className={'develop-details'}>
                <LearnImg1 />
                <div className={'wrapper'}>
                    <h4>{'Professional Development'}</h4> 
                    <p>{'Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…'}</p> 
                    <IconButton
                        label={'Learn more'}
                        color={'blue'}
                        className={'learn-button'}
                        onClick={() => handleDevelopClick()}
                    />
                </div>
            </div>

            <div className={'opportunities-details'}>
                <LearnImg2 />
                <div className={'wrapper'}>
                    <h4>{'Career Opportunities'}</h4> 
                    <p>{'Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces, hiring organizations will have…'}</p> 
                    <IconButton
                            label={'Learn more'}
                            color={'blue'}
                            className={'learn-button'}
                            onClick={() => handleOpportunitiesClick()}
                    />
                </div>
            </div>
        </StyledSection>
    )
}
