import React from 'react'
import styled from 'styled-components'
import IconButton from '../reusable-components/IconButton'
import topImage from '../../assets/images/home-learnmore-develop-image.png'
import topImageStripes from '../../assets/images/home-learnmore-develop-stripes.svg'
import topImageFrame from '../../assets/images/home-learnmore-develop-frame.png'

const StyledSection = styled.section`
    padding: 0px 16px 56px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px dashed lightgreen;

    & > h2 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        color: #2A2C30;
        border: 1px dashed orange;
    }

    & > p {
        margin-top: 16px;
        margin-bottom: 32px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #4B5259;
        border: 1px dashed orange;
    }

    & > .top-image {
        overflow: visible;
        margin-bottom: 24px;
        position: relative;
        width: 288px;
        height: 328px;
        border: 1px dashed lightgreen;


        & > .image {
            position: absolute;
            top: 24px;
            left: 0px;
        }

        & > .frame {
            position: absolute;
            bottom: 0px;
            right: 0px;
        }

        & > .stripes {
            position: absolute;
            top: 0px;
            right: 0px;
        }
    }

    & > .develop-button {
        align-self: flex-start;
    }

    & > .bottom-image {
        margin-top: 64px;
        overflow: visible;
        margin-bottom: 24px;
        position: relative;
        width: 288px;
        height: 328px;
        border: 1px dashed lightgreen;


        & > .image {
            position: absolute;
            top: 24px;
            left: 0px;
        }

        & > .frame {
            position: absolute;
            bottom: 0px;
            right: 0px;
        }

        & > .stripes {
            position: absolute;
            top: 0px;
            right: 0px;
        }
    }

    & > .opportunities-button {
        align-self: flex-start;
    }
`

export default function LearnMoreSection() {
    return (
        <StyledSection>
            <div className={'top-image'}>
                <img
                    src={topImageStripes}
                    alt={'backgorund stripes'}
                    className={'stripes'}
                />

                <img
                    src={topImage}
                    alt={'professional development image'}
                    className={'image'}
                />

                <img
                    src={topImageFrame}
                    alt={'gardient border frame'}
                    className={'frame'}
                />
            </div>

            <h2>{'Professional Development'}</h2>
            <p>{'Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…'}</p>

            <IconButton label={'Learn More'} color={'blue'} className={'develop-button'} />

            <div className={'bottom-image'}>
                <img
                    src={topImageStripes}
                    alt={'backgorund stripes'}
                    className={'stripes'}
                />

                <img
                    src={topImage}
                    alt={'professional development image'}
                    className={'image'}
                />

                <img
                    src={topImageFrame}
                    alt={'gardient border frame'}
                    className={'frame'}
                />
            </div>

            <h2>{'Career Opportunities'}</h2>
            <p>{'Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces, hiring organizations will have…'}</p>

            <IconButton label={'Learn More'} color={'blue'} className={'opportunities-button'} />

        </StyledSection>
    )
}
