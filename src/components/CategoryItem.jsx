import  styled  from "styled-components"
import { mobile } from "../responsive";
import React from 'react';

const Container= styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image= styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh" })}
`;
const Info= styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title= styled.h1`
color: white;
margin-bottom: 20px;
transition: all 0.5s ease;

&:hover{
    transform: scale(1.1); 
    color: black;  
}
`;

const Button= styled.button`
border: none;
padding: 10px;
background-color:black;
color: #EA5C2B;
cursor: pointer;
font-weight:600;

&:hover{
    transform: scale(1.1); 
    background-color:#EA5C2B;
    color: black;  
}
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title> {item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
