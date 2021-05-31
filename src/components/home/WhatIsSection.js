import React from 'react'
import styled from 'styled-components'
// import { navigate } from 'gatsby'
import { BenefitsList } from './BenefitsList'
import productImage from '../../assets/images/home/whatis-image-mobile.png'
import backgroundStripesMobile from '../../assets/images/home/whatis-stripes-mobile.svg'
import redOvalMobile from '../../assets/images/home/whatis-redoval-mobile.svg'
import grayOvalMobile from '../../assets/images/home/whatis-grayoval-mobile.svg'

// import { IconButton } from '../reusable-components/'
// import logoImg from '../../assets/images/home-what-is-logo.svg'
// import appleStoreImg from '../../assets/images/apple-store.png'
// import googlePlayImg from '../../assets/images/google-play.png'


const StyledSection = styled.section`
    position: relative;
    padding: 274px 16px 96px 16px;
    background: #191C23;
    // border: 2px solid red;

    & > .blue-background {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 274px; 
        background: #416FF4;
    }

    & > .product-image {
        position: absolute;
        top: 64px;
        // border: 1px dashed orange;
    }

    & > .stripes {
        position: absolute;
        top: 200px;
        right: 0px;
        // border: 1px dashed orange;
    }

    & > .red-oval {
        position: absolute;
        top: -40px;
        left: -114px;
        // border: 1px dashed orange;
    }

    & > .gray-oval {
        width: 376px;
        // width: 100%;
        position: absolute;
        top: 0px;
        left: calc(50% - 376px/2);
        // border: 2px dashed white;
    }

    & > .header-container {
        margin-top: 120px;
        color: white;
        border: 2px dashed lightcoral;
    }

    & > .benefits-container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        // border: 1px dashed lightblue;

        & > .members-benefits {
            width: 100%;
            border: 1px dashed white;
        }

        & > .organizations-benefits {
            width: 100%;
            border: 1px dashed white;
        }
    }
`
export default function WhatIsSection() {

    return (
        <StyledSection>
            <div className={'blue-background'}></div>
            <img
                src={grayOvalMobile}
                alt={'temp alt'}
                className={'gray-oval'}
            />

            <img
                src={redOvalMobile}
                alt={'temp alt'}
                className={'red-oval'}
            />

            <img
                src={backgroundStripesMobile}
                alt={'temp alt'}
                className={'stripes'}
            />

            <img
                src={productImage}
                alt={'temp alt'}
                className={'product-image'}
            />

            <div className={'header-container'}>
                <h4>{'What is'}</h4>
                <h4>{'?'}</h4>
            </div>

            <div className={'benefits-container'}>
                <BenefitsList
                    color={'blue'}
                    listTitle={'For Members'}
                    labels={['Newsfeed', 'Online Classes', 'Keynote Speakers']}
                    buttonLabel={'View Benefits'}
                    className={'members-benefits'}
                />
                <BenefitsList
                    color={'red'}
                    listTitle={'For Organizations'}
                    labels={['Jobs', 'Talent Scores', 'Systems & Services']}
                    buttonLabel={'View Benefitssss'}
                    className={'organizations-benefits'}
                />
            </div>
        </StyledSection>
    )
}
