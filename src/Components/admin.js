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
  

@media(max-width:400px){

  display: flex;
  flex-direction: column;
  align-items: center;
  }    
  
  @media(max-width:760px){

  display: flex;
  flex-direction: column;
  align-items: center;
  }    
  
  @media(max-width:1080px){

  display: flex;
  flex-direction: column;
  align-items: center;
  }    
  

`;

const Wrapper = styled.div`
  flex-direction: row;

@media(max-width:400px){
 flex-direction: row;
}
  @media(max-width:760px){
 flex-direction: row;
}
@media(max-width:1080px){
 flex-direction: row;
}
`;

const Heading = styled.p`
color: red;
margin-left: 50px;

@media(max-width:400px){
   color:red;
   margin-left:50px;
}
@media(max-width:760px){
 color:red;
   margin-left:50px;
}

@media(max-width:1080px){
 color:red;
   margin-left:50px;
}


  
`;

const Image = styled.img`
  
height: 20%;
width: 20%;
margin: 10px;

@media(max-width:400px){
  width: 90%;
  height: 10%;
  class: center;
}

@media(max-width:768px){
  width: 90%;
  height: 50%;
  class: center;
}


@media(max-width:1080px){
  width: 90%;
  height: 50%;
  class: center;
}
    

`;

const Button = styled.button`
  margin: 13px;
  text-align: center;
 
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
           <Heading>You are now logged in!!</Heading>
           <Button>
           <div>
           <Link to="/logout">Logout</Link>
           </div>
           </Button>
         </Wrapper>

           <Image src={iitg}  />
           <Image src={messi}   />
           <Image src={cr7}    />
           
           
          </Content>


     	)

   }
}