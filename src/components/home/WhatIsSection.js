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
    padding: 0px 16px 0px 16px;
    background: #191C23;
    border: 2px solid red;

    & > .section-header {
        width: 100%;
        height: 274px;
        background: #416FF4;

        & > .product-image {
            width: 336px;
            height: 266px;
            background-image: 
                url(${productImage});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px dashed orange;
        }

        & > .background-stripes {
            width: 112px;
            height: 174px;
            background-image: 
                url(${backgroundStripesMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px dashed orange;
        }

        & > .red-oval {
            width: 260px;
            height: 260px;
            background-image: 
                url(${redOvalMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px dashed orange;
        }

        & > .gray-oval {
            width: 376px;
            height: 376px;
            background-image: 
                url(${grayOvalMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px dashed orange;
        }
    }

    & > .benefits-container {
        display: flex;
        flex-direction: column;
        align-items: center;
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
            <div className={'section-header'}>
                <div className={'product-image'}></div>
                {/* <div className={'background-stripes'}></div> */}
                <div className={'red-oval'}></div>
                <div className={'gray-oval'}></div>
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
