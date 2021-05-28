import React from 'react'
import styled from 'styled-components'

import mobileImage2 from '../../assets/images/home/learnmore-image2-mobile.jpg'
import mobileFrame2 from '../../assets/images/home/learnmore-frame2-mobile.png'
import mobileStripesBlue from '../../assets/images/home/learnmore-stripes-blue.svg'
import tabletImage2 from '../../assets/images/home/learnmore-image2-tablet.jpg'
import tabletFrame2 from '../../assets/images/home/learnmore-frame2-tablet.png'
import desktop1024Image2 from '../../assets/images/home/learnmore-image2-1024.jpg'
import desktop1024Frame2 from '../../assets/images/home/learnmore-frame2-1024.png'
import desktop1440Image2 from '../../assets/images/home/learnmore-image2-1440.jpg'
import desktop1440Frame2 from '../../assets/images/home/learnmore-frame2-1440.png'

const ImageContainer = styled.div`
    position: relative;
    width: 288px;
    height: 328px;
    // border: 1px dashed orange;

    @media (min-width: 720px) {
        width: 592px;
        height: 328px;
    }

    @media (min-width: 1024px) {
        min-width: 436px;
        height: 562px;
    }

    @media (min-width: 1440px) {
        min-width: 568px;
        height: 562px;
    }

    & > .image {
        position: absolute;
        top: 28px;
        right: 0px;
        width: 251px;
        height: 280px;
        background-image:
            url(${mobileImage2});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
        box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.296766);

        @media (min-width: 720px) {
            width: 555px;
            height: 280px;
            background-image:
                url(${tabletImage2})
        }

        @media (min-width: 1024px) {
            width: 400px;
            height: 496px;
            background-image:
                url(${desktop1024Image2})
        }

        @media (min-width: 1440px) {
            width: 531px;
            height: 496px;
            background-image:
                url(${desktop1440Image2})
        }
    }

    & > .frame {
        // border: 1px solid lightgreen;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 239px;
        height: 284px;
        background-image:
            url(${mobileFrame2});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        @media (min-width: 720px) {
            width: 543px;
            height: 284px;
            background-image:
                url(${tabletFrame2})
        }

        @media (min-width: 1024px) {
            width: 387px;
            height: 475px;
            background-image:
                url(${desktop1024Frame2})
        }

        @media (min-width: 1024px) {
            width: 520px;
            height: 475px;
            background-image:
                url(${desktop1440Frame2})
        }
    }

    & > .stripes {
        // border: 1px solid lightgreen;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 177.5px;
        height: 175.61px;
        background-image:
            url(${mobileStripesBlue});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
`

export default function LearnImg2() {
    return (
        <ImageContainer>
            <div className={'frame'}></div>
            <div className={'stripes'}></div>
            <div className={'image'}></div>
        </ImageContainer>
    )
}
