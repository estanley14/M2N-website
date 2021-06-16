import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
    height: 97px;
    display: flex;
    gap: 8px;
    // justify-content: space-between;
    border: 1px dashed green;
`

const Image1 = styled.div`
    width: 90px;
    // min-height: 97px;
    border-radius: 4px;
    border: 1px solid orange;
`

const Image2 = styled.div`
    width: 90px;
    // min-height: 97px;
    border-radius: 4px;
    border: 1px solid orange;
`

const Image3 = styled.div`
    width: 90px;
    // min-height: 97px;
    border-radius: 4px;
    border: 1px solid orange;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Image4 = styled.div`
    width: 90px;
    // min-height: 97px;
    display: none;
    border-radius: 4px;
    border: 1px solid orange;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Image5 = styled.div`
    width: 90px;
    // min-height: 97px;
    display: none;
    border-radius: 4px;
    border: 1px solid orange;

    @media (min-width: 1024px) {
        display: block;
    }
`

export default function ImageGrid() {
    return (
        <GridContainer>
            <Image1 />
            <Image2 />
            <Image3 />
            <Image4 />
            <Image5 />
        </GridContainer>
    )
}
