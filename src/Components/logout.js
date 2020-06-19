import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  color: red;
`;



const Button = styled.button`
  margin: 10px;
  color: red;
`;

export default class Logout extends Component{
   constructor(props){
     super(props)
     localStorage.removeItem("token")

}

   render(){

      return(
        
        <Content>
        <Heading> You have been logged out!!! </Heading>
        <Button>
        <Link to="/">Login Again</Link>
        </Button>
        </Content>

      	)

   }



}