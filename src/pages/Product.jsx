
import { Add, AddCircle, RemoveCircle } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import React from 'react';

const Container= styled.div`

`;
const Wrapper= styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer= styled.div`
flex: 1;
`;
const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "35%" })}
`;
const InfoContainer= styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;
const Title= styled.h1`
font-weight: 200;
`;
const Desc= styled.p`
margin: 20px 0px;
`;
const Price= styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer= styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}
`;

const Filter= styled.div`
display: flex;
align-items: center;
`;

const FilterTitle= styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=> props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize= styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption= styled.option`

`;
const AddContainer= styled.div`
width: 50px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;
const AmountContainer= styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount= styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button= styled.button`
margin-left: 145px;
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;


&:hover{
    color: black; 
    background-color: #EA5C2B;
}

`;
const Remove= styled.div`

`;


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://ba-sh.com/fstrz/r/s/ba-sh.com/dw/image/v2/BBTP_PRD/on/demandware.static/-/Sites-master-bash/default/dwea74a542/allImages/E21/1E21FRID_LIGHTUSEDBLUE_2.jpg?sw=870&sh=1389&sm=fit&frz-v=31"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                    The e-shopmate denim jumpsuit is the ultimate combination of casual fashion. 
                    Inspired by the coverall, this denim jumpsuit features lovely details for an elegant and contemporary effect. 
                    Popular features include slightly gathered elbow-length sleeves, front buttons concealed by a placket, a stunning V-neck and belt that highlights the waist. 
                    Two large patch pockets finish the effect. A decidedly fashionable denim jumpsuit.<br/>

                    The cotton of this garment is from organic farming.<br/>

                    - Denim jumpsuit <br/>
                    - Shirt collar<br/>
                    - Short sleeves<br/>
                    - Pockets<br/>
                    - Belt<br/>
                    - 100% cotton<br/>
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveCircle/>
                            <Amount>1</Amount>
                            <AddCircle />

                        </AmountContainer>
                        <Button>ADDTOCART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;
