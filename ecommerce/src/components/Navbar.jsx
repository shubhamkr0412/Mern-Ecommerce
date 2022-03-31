import React from 'react'
import styled from "styled-components"
import {Search} from "@material-ui/icons"
const Container=styled.div`
height:60px;
`;
const Wrapper=styled.div`padding:10px 20px;display:flex;
justify-content:space-between`
const Left=styled.div`
flex:1`;
const Right=styled.div` flex:1`;
const Center=styled.div` flex:1`;
const Language=styled.span`font-size:14;

cursor:pointer`;
const SearchContainer=styled.div`border:1px solid lightgray`;

const Navbar = () => {
  return (
    <Container><Wrapper>
    <Left><Language>English</Language>
    <SearchContainer>input <Search/></SearchContainer>
    </Left>
    <Right>right</Right>
    <Center>center</Center>
    </Wrapper></Container>
  )
}

export default Navbar