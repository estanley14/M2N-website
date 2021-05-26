import React from 'react'
import styled from 'styled-components'
import { IconButton } from '../reusable-components/'

const StyledSection = styled.section`
    border: 2px dashed black;
`
export default function WhatIsSection() {
    return (
        <StyledSection>
            <IconButton 
                label={'View benefits'} 
                color={'blue'}
            />
        </StyledSection>
    )
}
