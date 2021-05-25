import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    border: 2px dashed orange;
`

export default function NewFooter() {
    return (
        <StyledFooter>
            <p>{'Footer'}</p>
        </StyledFooter>
    )
}
