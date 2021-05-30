import React from 'react'
import styled from 'styled-components'
// import { navigate } from 'gatsby'
import { BenefitsList } from './BenefitsList'
// import { IconButton } from '../reusable-components/'
// import logoImg from '../../assets/images/home-what-is-logo.svg'
// import appleStoreImg from '../../assets/images/apple-store.png'
// import googlePlayImg from '../../assets/images/google-play.png'


const StyledSection = styled.section`
    padding: 0px 16px 0px 16px;
    background: #191C23;
    border: 2px solid red;

    // @media (min-width: 720px) {
    //     padding: 0px 64px 96px 64px;
    // }

    & > .benefits-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: 1px dashed lightblue;

        & > .members-benefits {
            width: 100%;
            border: 1px dashed white;

            @media (min-width: 1024px) {
                
            }
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
