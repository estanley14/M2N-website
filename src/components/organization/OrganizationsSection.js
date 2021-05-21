import React from 'react'
import styled from 'styled-components'
import topStripes from '../../assets/images/org-section-stripes-top.svg'
import middleStripes from '../../assets/images/org-section-stripes-middle.svg'
import bottomStripes from '../../assets/images/org-section-stripes-bottom.svg'

const StyledSection = styled.section`
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 172px 0px 0px 0px;
    background: #F3F4F6;

    & > h3 {
        margin-bottom: 32px;
        width: 484px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 62px;
        line-height: 100%;
        text-align: center;
        color: #11243D;
        border: 1px dashed orange;
    }

    & > p {
        width: 650px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: #4F4F4F;
        border: 1px dashed orange;
    }

    & > .card-container {
        margin-top: 40px;
        position: relative;
        width: 1240px;
        height: 712px;
        border: 2px dashed black;

        & > .stripes-top {
            position: absolute;
            top: -55px;
            right: 64px;
            width: 176px;
            // opacity: 0.2;
            transform: rotate(-180deg);
            border: 1px dashed orange;
        }

        & > .stripes-middle {
            position: absolute;
            top: 292px;
            left: -60px;
            width: 176px;
            // opacity: 0.2;
            transform: matrix(-1, 0, 0, 1, 0, 0);
            border: 1px dashed orange;
        }

        & > .stripes-bottom {
            position: absolute;
            right: -36px;
            bottom: -36px;
            width: 176px;
            // opacity: 0.2;
            transform: rotate(-180deg);
            border: 1px dashed orange;
        }
    }
`

export default function OrganizationsSection() {
    return (
        <StyledSection>
            <h3>Organizations</h3>
            <p>{'Multi-tiered approach to build an inclusive workforce for increased productivity, innovation and financial growth.'}</p>
            <div className={'card-container'}>
                <img 
                    src={topStripes} 
                    alt={'background stripes'} 
                    className={'stripes-top'}
                />

                <img 
                    src={middleStripes} 
                    alt={'background stripes'} 
                    className={'stripes-middle'}
                />

                <img 
                    src={bottomStripes} 
                    alt={'background stripes'} 
                    className={'stripes-bottom'}
                />
                <p>Cards 247</p>
            </div>
        </StyledSection>
    )
}
