import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import React from 'react';

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding : "10px" })}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
bordor: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};


`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex: 3;
`;

const Productx = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`

width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=> props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
font: 1px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;

&:hover{
    color: black; 
    background-color: #EA5C2B;
}
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whishlist(3)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        <Productx>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1571859856639-d54ab2c18ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                                <Details>
                                    <ProductName><b>Product:</b>Green Wingtip Shoes</ProductName>
                                    <ProductId><b>ID:</b>34795983578</ProductId>
                                    <ProductColor color ="lightseagreen"/>
                                    <ProductSize><b>Size:</b>44.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail> 
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>

                            </PriceDetail>
                        </Productx>
                        <Hr/>

                        <Productx>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                                <Details>
                                    <ProductName><b>Product:</b>Crew Neck Sweat Shirt</ProductName>
                                    <ProductId><b>ID:</b>3279558302</ProductId>
                                    <ProductColor color ="orange"/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail> 
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 16</ProductPrice>

                            </PriceDetail>
                        </Productx>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal </SummaryItemText>
                            <SummaryItemPrice>$ 76</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping </SummaryItemText>
                            <SummaryItemPrice>$ 2.50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount </SummaryItemText>
                            <SummaryItemPrice>$ -2.50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total </SummaryItemText>
                            <SummaryItemPrice>$ 76</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
