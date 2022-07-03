import Announcement from "../components/Announcement";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories'
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import React from 'react';

const Container = styled.div`
`;
const Title = styled.h1`
margin: 20px;
text-align: center;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px",display: "flex", flexDirection:"column" })}
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
`;


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Recommended Just You!</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText> 
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Orange</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText> 
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    <Option>Highest Reviewed</Option>
                    
                </Select>
                </Filter>

            </FilterContainer>
            <Products/>
            <Title>Browse Through Categories</Title>
            <Categories/>
            <Newsletter/>
            <Footer/>
            
        </Container>
    )  
}

export default ProductList;
