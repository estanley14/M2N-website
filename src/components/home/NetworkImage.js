import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/home-network-image-image.jpg'
import frame from '../../assets/images/home-network-image-frame.png'
import dots from '../../assets/images/home-network-image-dots.svg'

const ImageContainer = styled.div`
    width: 288px;
    height: 328px;
    position: relative;
    // background: lightgreen;
    border: 1px dashed orange;

    & > .image {
        position: absolute;
        top: 28px;
        right: 24px;
        filter: drop-shadow(0px 52px 54px rgba(65, 62, 101, 0.296766));
        border-radius: 8px;
    }

    & > .frame {
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    & > .dots {
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: -1;
    }
`

export default function NetworkImage() {
    return (
        <ImageContainer>
            <img
                src={image}
                alt={'professionals networking'}
                className={'image'}
            />

            <img
                src={dots}
                alt={'background dots'}
                className={'dots'}
            /> 

            <img
                src={frame}
                alt={'gradient frame'}
                className={'frame'}
            />

            {/* <img
                src={dots}
                alt={'background dots'}
                className={'dots'}
            /> */}
        </ImageContainer>
    )
}
