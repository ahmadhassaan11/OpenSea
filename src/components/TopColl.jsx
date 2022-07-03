import styled from "styled-components"
import React from 'react';
import { blue } from "@material-ui/core/colors";

const Container= styled.h1`

display:flex;
align-items: center;
justify-content: center;

font-weight: 500px;
font-weight: bold;

`;

const blu= styled.h1`

display:flex;
align-items: center;
justify-content: center;
font-weight: 500px;
font-weight: bold;


`;



const TopColl = () => {
    return (
        <Container style={{marginTop:"50px", marginBottom:"50px"}}>
            Top collections over  
            <blu style={{color: blue}}> last 7 days</blu>
        </Container>
    )
}

export default TopColl
