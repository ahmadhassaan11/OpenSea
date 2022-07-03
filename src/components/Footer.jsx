import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, ShoppingCartOutlined, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";
import React from 'react';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    opacity: 1;
    transform: scale(1.3);   
}
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}

`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

&:hover{
    color: orangered;
    cursor: pointer;   
}
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

&:hover{
    opacity: 2;
    transform: scale(1.03);   
}
`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
    <Container>
        <Left>
        <Logo> 
            <ShoppingCartOutlined style={{color:"orange", fontSize:25}}/> OpeanSea
         </Logo>
            <Desc>
            Music NFTs are changing the way fans connect with their favorite artists. From 3LAU to Imogen Heap, all kinds of creators are innovating on the blockchain, and the appetite for change in an industry that so often underserves independent makers is clear.

Browse collections from The Weeknd, Richie Hawtin, RAC, and more.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999"> 
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="55ACEE"> 
                    <Twitter/>
                </SocialIcon >
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}} /> Kohinoor, Faisalabad 38000 </ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}} /> +1 234 56 78</ContactItem>
            <ContactItem> <MailOutline style={{marginRight:"10px"}} /> contact@eshopmate.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
    );
};

export default Footer
