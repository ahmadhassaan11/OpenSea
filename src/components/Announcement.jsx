import styled from "styled-components"
import React from 'react';

const Container= styled.div`
height: 60px;
background-color: #55ACEE;
padding: 5px 20px;
color :white;
display:flex;
align-items: center;
justify-content: left;
font-size: 16px;
font-weight: 500px;
`;



const Announcement = () => {
    return (
        <Container>
            Due to a planned upgrade, active Ethereum listings created before Feb 18 will expire on Feb 25 at 2pm EST. To keep you origunal date please migrate them.
        </Container>
    )
}

export default Announcement
