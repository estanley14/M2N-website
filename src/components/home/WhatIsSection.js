import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../reusable-components/'

const StyledSection = styled.section`
    padding: 0px 16px 0px 16px;
    background: #191C23;
    border: 2px dashed white;

    & > .demo {
        background: #416FF4;
        width: 100%;
        height: 272px;
        border: 2px dashed orange;
    }
`
export default function WhatIsSection() {
    return (
        <StyledSection>
            <div className={'demo'}>
                <p>demo div</p>
            </div>
            <IconButton 
                label={'View benefits'} 
                color={'blue'}
            />
        </StyledSection>
    )
}
