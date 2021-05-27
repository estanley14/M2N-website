import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../reusable-components/'
import developImage from '../../assets/images/home-learnmore-develop-full-image.png'
import opportunitiesImage from '../../assets/images/home-learnmore-opportunities-full-image.png'

// import developFrame from '../../assets/images/home-learnmore-develop-frame.png'
// import developStripes from '../../assets/images/home-learnmore-develop-stripes.svg'

const StyledSection = styled.section`
    padding: 96px 16px 56px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    border: 2px solid lightcoral;

    & > .develop-details {
        display: flex;
        flex-direction: column;
        align-items: center;    

        & > .develop-image {
            border: 1px dashed orange;
        }
    
        & > h4 {
            margin-bottom: 16px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #2A2C30;
            border: 1px dashed orange;
        }
    
        & > p {
            margin-bottom: 32px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #4B5259;
            border: 1px dashed orange;
        }

        &  > .learn-button {
            align-self: flex-start;
        }
    }

    & > .opportunities-details {

        & > .opportunities-image {
            border: 1px dashed orange;
        }
    
        & > h4 {
            margin-bottom: 16px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;
            color: #2A2C30;
            border: 1px dashed orange;
        }
    
        & > p {
            margin-bottom: 32px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            color: #4B5259;
            border: 1px dashed orange;
        }
    }
`

export default function LearnSection() {
    return (
        <StyledSection>
            <div className={'develop-details'}>
                <img 
                    src={developImage} 
                    alt={'professional development image'} 
                    className={'develop-image'}
                />
                <h4>{'Professional Development'}</h4> 
                <p>{'Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…'}</p> 
                <IconButton
                        label={'Learn more'}
                        color={'blue'}
                        className={'learn-button'}
                />
            </div>

            <div className={'opportunities-details'}>
                <img 
                    src={opportunitiesImage} 
                    alt={'professional development image'} 
                    className={'opportunities-image'}
                />
                <h4>{'Career Opportunities'}</h4> 
                <p>{'Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces, hiring organizations will have…'}</p> 
                <IconButton
                        label={'Learn more'}
                        color={'blue'}
                        className={'learn-button'}
                />
            </div>
            

        </StyledSection>
    )
}
