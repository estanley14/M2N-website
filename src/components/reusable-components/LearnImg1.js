import React from 'react'
import styled from 'styled-components'
import mobileImage1 from '../../assets/images/home/learnmore-image1-mobile.jpg'
import mobileFrame1 from '../../assets/images/home/learnmore-frame1-mobile.png'
import mobileStripesRed from '../../assets/images/home/learnmore-stripes-red.svg'

import tabletImage1 from '../../assets/images/home/learnmore-image1-tablet.jpg'
import tabletFrame1 from '../../assets/images/home/learnmore-frame1-tablet.png'

import desktop1024Image1 from '../../assets/images/home/learnmore-image1-1024.jpg'
import desktop1024Frame1 from '../../assets/images/home/learnmore-frame1-1024.png'

import desktop1440Image1 from '../../assets/images/home/learnmore-image1-1440.jpg'
import desktop1440Frame1 from '../../assets/images/home/learnmore-frame1-1440.png'



const ImageContainer = styled.div`
    order: 2;
    position: relative;
    width: 288px;
    height: 352px;
    // border: 1px dashed orange;

    @media (min-width: 720px) {
        width: 592px;
        height: 328px;
    }

    @media (min-width: 1024px) {
        min-width: 436px;
        height: 549px;
    }

    @media (min-width: 1440px) {
        min-width: 568px;
        height: 549px;
    }

    & > .image {
        position: absolute;
        top: 24px;
        left: 0px;
        width: 244px;
        height: 275px;
        background-image:
            url(${mobileImage1});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
        box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.296766);

        @media (min-width: 720px) {
            width: 548px;
            height: 275px;
            background-image:
                url(${tabletImage1})
        }

        @media (min-width: 1024px) {
            width: 392px;
            height: 496px;
            background-image:
                url(${desktop1024Image1})
        }

        @media (min-width: 1440px) {
            width: 524px;
            height: 496px;
            background-image:
                url(${desktop1440Image1})
        }
    }

    & > .frame {
        position: absolute;
        top: 72px;
        left: 56px;
        width: 232px;
        height: 254px;
        background-image:
            url(${mobileFrame1});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;

        @media (min-width: 720px) {
            width: 536px;
            height: 254px;
            background-image:
                url(${tabletFrame1})
        }

        @media (min-width: 1024px) {
            width: 380px;
            height: 475px;
            background-image:
                url(${desktop1024Frame1})
        }

        @media (min-width: 1440px) {
            width: 512px;
            height: 475px;
            background-image:
                url(${desktop1440Frame1})
        }
    }

    & > .stripes {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 177.5px;
        height: 175.61px;
        background-image:
            url(${mobileStripesRed});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
    }
`

export default function LearnImg1() {
    return (
        <ImageContainer>
            <div className={'frame'}></div>
            <div className={'stripes'}></div>
            <div className={'image'}></div>
        </ImageContainer>
    )
}
