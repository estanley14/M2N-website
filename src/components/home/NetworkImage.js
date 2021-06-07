import React from 'react'
import styled from 'styled-components'
// import image from '../../assets/images/home-network-image-image.jpg'
// import frame from '../../assets/images/home-network-image-frame.png'
// import dots from '../../assets/images/home-network-image-dots.svg'

import mobileImage from '../../assets/images/network-image-mobile.jpg'
import mobileFrame from '../../assets/images/network-frame-mobile.png'
import mobileDots from '../../assets/images/network-dots-mobile.png'

import tabletImage from '../../assets/images/network-image-tablet.jpg'
import tabletFrame from '../../assets/images/network-frame-tablet.png'
import tabletDots from '../../assets/images/network-dots-tablet.svg'

import desktop1024Image from '../../assets/images/network-image-1024.jpg'
import desktop1024Frame from '../../assets/images/network-frame-1024.png'
import desktop1024Dots from '../../assets/images/network-dots-1024.svg'

import desktop1440Image from '../../assets/images/network-image-1440.jpg'
import desktop1440Frame from '../../assets/images/network-frame-1440.png'
import desktop1440Dots from '../../assets/images/network-dots-1440.svg'

const ImageContainer = styled.div`
    width: 288px;
    height: 328px;
    position: relative;
    // border: 1px dashed orange;

    @media (min-width: 720px) {
        width: 593px;
        height: 328px;
    }

    @media (min-width: 1024px) {
        width: 436px;
        height: 657px;
    }

    @media (min-width: 1440px) {
        width: 568px;
        height: 657px;
    }

    & > .image {
        position: absolute;
        top: calc(50% - 277px/2);
        left: calc(50% - 240px/2);
        width: 240px;
        height: 277px;
        filter: drop-shadow(0px 52px 54px rgba(65, 62, 101, 0.296766));
        border-radius: 8px;
        background-image:
            url(${mobileImage});
        background-repeat: no-repeat;
        background-position: center;
        // border: 1px solid red;

        @media (min-width: 720px) {
            width: 521px;
            height: 261px;
            top: calc(50% - 261px/2);
            left: calc(50% - 521px/2);
    
            background-image: 
                url(${tabletImage});
        }

        @media (min-width: 1024px) {
            width: 380px;
            height: 576px;
            top: calc(50% - 576px/2);
            left: calc(50% - 380px/2);

            background-image: 
                url(${desktop1024Image});
        }

        @media (min-width: 1440px) {
            width: 496px;
            height: 576px;
            bottom: 0px;
            left: 32px;

            background-image: 
                url(${desktop1440Image});
        }
    }

    & > .frame {
        width: 241px;
        height: 243px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background-image:
            url(${mobileFrame});
        background-repeat: no-repeat;
        background-position: center;
        // border: 1px solid lightblue;

        @media (min-width: 720px) {
            width: 522px;
            height: 243px;
            background-image: 
                url(${tabletFrame});
        }

        @media (min-width: 1024px) {
            width: 381px;
            height: 572px;
            background-image: 
                url(${desktop1024Frame});
        }

        @media (min-width: 1440px) {
            width: 497px;
            height: 572px;
            background-image: 
                url(${desktop1440Frame});
        }
    }

    & > .dots {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 258px;
        height: 123px;
        background-image:
            url(${mobileDots});
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
        // border: 1px solid lightgreen;

        @media (min-width: 720px) {
            background-image: 
                url(${tabletDots});
        }

        @media (min-width: 1024px) {
            background-image: 
                url(${desktop1024Dots});
        }

        @media (min-width: 1440px) {
            background-image: 
                url(${desktop1440Dots});
        }
    }
`

export default function NetworkImage(props) {
    const { className } = props

    return (
        <ImageContainer className={className}>
            <div className={'image'}></div>
            <div className={'dots'}></div>
            <div className={'frame'}></div>
        </ImageContainer>
    )
}
