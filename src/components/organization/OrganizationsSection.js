import React from 'react'
import styled from 'styled-components'
import OrgCard from './OrgCard'
import topStripes from '../../assets/images/org-section-stripes-top.svg'
import middleStripes from '../../assets/images/org-section-stripes-middle.svg'
import bottomStripes from '../../assets/images/org-section-stripes-bottom.svg'
import boltImg from '../../assets/images/org-card-bolt.svg'
import keyImg from '../../assets/images/org-card-key.svg'
import supportImg from '../../assets/images/org-card-support.svg'
import connectImg from '../../assets/images/org-card-connect.svg'


const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 172px 15px 167px;
    background-position: 
        top 352px right 164px,
        top 644px left 40px,
        top 888px right 64px;
    background-repeat: no-repeat;
    background-color: #F3F4F6;
    background-image: 
        url(${topStripes}),
        url(${middleStripes}),
        url(${bottomStripes});
    // background: #F3F4F6;

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
        // border: 1px dashed orange;
    }

    & > p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: #4F4F4F;
        // border: 1px dashed orange;
    }

    & > .card-container {
        // display: none;
        padding: 56px 0px 0px 0px;
        margin-top: 40px;
        position: relative;
        max-width: 1000px;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        justify-content: center;
        // border: 2px dashed black;
    }
`

export default function OrganizationsSection() {
    return (
        <StyledSection>
            <h3>Organizations</h3>
            <p>{'Multi-tiered approach to build an inclusive workforce for increased productivity, innovation and financial growth.'}</p>
            <div className={'card-container'}>

                <OrgCard 
                    title={'Prepare'}
                    body={'Support for creating an inclusive workspace where diverse talent can contribute unique value to the organization.'}
                    icon={boltImg}
                />

                <OrgCard 
                    title={'Recruit'}
                    body={'Access to an expansive recruiting pool of diverse professionals actively engaged in the MPower platform.'}
                    icon={keyImg}
                />

                <OrgCard 
                    title={'Connect'}
                    body={'Reciprocal 1:1 mentorship opportunities will build authentic relationships within the organization. '}
                    icon={connectImg}
                />

                <OrgCard 
                    title={'Support'}
                    body={'Unique systems and 1:1 services for hiring managers will streamline on-boarding process and increase employee engagement.'}
                    icon={supportImg}
                />
            </div>
        </StyledSection>
    )
}
