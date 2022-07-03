import styled from "styled-components"
import React from 'react';

const Container= styled.h1`

display:flex;
align-items: center;
justify-content: center;

font-weight: 500px;
font-weight: bold;

`;



const ND = () => {
    return (
        <Container style={{marginTop:"50px"}}>
            Notable Drops
        </Container>
    )
}

export default ND
