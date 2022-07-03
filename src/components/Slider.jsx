import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import React, { useEffect, useState } from "react";
import { mobile } from "../responsive";


const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
    ${mobile({ display:"none"})}
`;
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff8f9;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper= styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide= styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImgContainer= styled.div`
    height: 100%;
    flex:1;
`;

const Image= styled.img`
height: 500px;
width: 500px;

border-radius: 14px;
`;

const InfoContainer= styled.div`
    flex: 1;
    padding:50px;
`;

const Title= styled.h1`
font-size: 70px
`;
const Desc= styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;
const Button= styled.button`
padding: 10px;
font-size:20px;
width: 180px;
color: black; 
background-color: transparent;
cursor:pointer;
transition: all 0.5s ease;
border-radius: 7px;


&:hover{
    color: white; 
    background-color: black;
}
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);

    const handleClick = (direction) => {

        if (direction==="left"){
            setslideIndex(slideIndex > 0? slideIndex-1 : 2);
        }
        else {
            setslideIndex(slideIndex < 2? slideIndex+1 : 0);
        }

    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                    
                    <InfoContainer>
                       
                       <Title>{item.title}</Title>
                       <Desc>{item.desc}</Desc>
                       <Button>Explore </Button>
                       <Button style={{marginLeft:"15px"}}>Create</Button>
                       </InfoContainer>

                    <ImgContainer>                      
                        
                        <Image style={{marginTop:"50px"}} src={item.img} />
                        
                    </ImgContainer>

                      
                    </Slide>
                    ))}
                </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
