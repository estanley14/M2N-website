import React from 'react'
import styled from 'styled-components'
import heroOval from '../../assets/images/hero-oval.svg'
import stripesImg from '../../assets/images/shapes-stripes.svg'
import blobImg from '../../assets/images/shapes-blob.svg'
import heroImg from '../../assets/images/hero-image2.jpg'

const HeroContainer = styled.section`
    padding-top: 64px;
    width: 100%;
    height: 700px;
    background: #2B3990;

    & > .hero-image {
        position: absolute;
        top: 22.29%;
        right: 9.38%;
        left: 56.67%;
        bottom: -3.71%;
        width: 488px;
        border-radius: 8px;
        filter: drop-shadow(0px 52px 54px rgba(65, 62, 101, 0.296766));
        // border: 1px solid white;
        z-index: 2;
    }

    & > .hero-oval {
        position: absolute;
        top: 344px;
        left: -491px;
        width: 802px;
        // border: 1px dashed orange;
    }

    & > .hero-shapes-wrapper {
        position: absolute;
        top: 112px;
        left: 852px;
        width: 568px;
        height: 524px;
        // border: 2px dashed orange;

        & > .hero-stripes {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 176px;
            // border: 1px solid white;
        }

        & > .hero-blob {
            position: absolute;
            top: 0px;
            right: 0px;
            min-width: 488px;
            height: 524px;
            width: 176px;
            // border: 1px solid white;
        }
    }
`

export default function HeroSection() {
    return (
        <HeroContainer>
            <img
                src={heroImg}
                alt="hero image"
                className={'hero-image'}
            />

            <img
                src={heroOval}
                alt="oval"
                className={'hero-oval'}
            />
            <div className={'hero-shapes-wrapper'}>
                <img 
                    src={stripesImg} 
                    alt={'stripes'} 
                    className={'hero-stripes'}
                />

                <img 
                    src={blobImg} 
                    alt={'blobb'} 
                    className={'hero-blob'}
                />
            </div>
        </HeroContainer>
    )
}
