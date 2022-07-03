import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import React from 'react';

//clicking on product to view its info
const Info=styled.div`
opacity: 0;
width: 300px;
height: 350px;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`;

const Container = styled.div` 
flex:1;
margin: 5px;
min-width: 280px;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
background-color: #EEF4FF;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;

//for adding circle to background of products
const Circle=styled.div`
width: 280px;
height: 250px;
border-radius: 10%;
background-color: white;
position: absolute;
`;

//for the images size adjustment
const Image= styled.img`
height:75%;
z-index: 2;
`;

//for buy,like,add to cart icon while apear on hover
const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover{
    background-color: #ffb57d;
    transform: scale(1.1);
}
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
