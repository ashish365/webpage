import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from "styled-components";
import iitg from '../iitg1.jpg';
import messi from '../lionel-messi.jpg';
import cr7 from '../ronaldo.jpeg';



const Content = styled.div`
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
  

`;

const Wrapper = styled.div`
  flex-direction: row;

@media(max-width:400px){
 flex-direction: row;
}

@media(max-width:768px){
  
flex-direction: row;

}

  
`;

const Heading = styled.p`
color: red;
margin-left: 550px;

@media(max-width:400px){
   color:red;
   margin-left:200px;
}

@media(max-width:768px){
  color: red;
margin-left: 800px;


}

  
`;

const Image = styled.img`
  
height: 20%;
width: 20%;
margin: 8px;

@media(max-width:400px){
  width: 90%;
  class: center;
}
    

@media(max-width:768px){
  width: 90%;
  class: center;
}

`;

const Button = styled.button`
  margin: 20px;
  margin-left: 1400px;
`;



export default class Admin extends Component{
   constructor(props){
     super(props)
     const token = localStorage.getItem("token")

     let loggedIn = true
     if(token==null){
     	loggedIn = false
     }
      this.state=
      {
      	loggedIn
      }

   }


   render(){
       
       if(this.state.loggedIn===false)
       {
       	return <Redirect to="/" />
       }
     return(

         <Content>
         <Wrapper>
           <Heading>Welcome to the Admin page.You are now logged in!!</Heading>
           <Button>
           <Link to="/logout">Logout</Link>
           </Button>
         </Wrapper>

           <Image src={iitg}  />
           <Image src={messi}   />
           <Image src={cr7}    />
           
           
          </Content>


     	)

   }
}