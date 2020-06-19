import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;


const Button = styled.button`
  margin: 20px;
  color: red;
  margin-left: 50px;
`;

const Heading = styled.p`
  color: red;

`;





export default class Login extends Component{
  
   constructor(props){
    super(props)
    
    let loggedIn=false 
    this.state={

      username: '',
      password: '',
      loggedIn


   }

     this.onChange = this.onChange.bind(this)
     this.submitForm = this.submitForm.bind(this)
   }

   onChange(e){
   	this.setState({
   		[e.target.name]: e.target.value
   	})
   }

    submitForm(e){
    	e.preventDefault()
    	const{ username, password } =this.state
    	
      //login condition

    	if(username === "Ashish" && password === "react" ){

            localStorage.setItem("token", "sdfebfeubfuabfsakjbfasbf")
    		this.setState({
    			loggedIn: true
    		})
    	}
      else if(username==="" && password===""){
        alert("Please enter your Credentials")
      }else if(username==="Ashish" && password===""){
        alert("Please enter password")
      }else{
        alert("Wrong Credentials")
      }
    }
    



   render()  {
             
             if(this.state.loggedIn){
             	return <Redirect to="/admin"/>
             }

         return(


        <Content>
        <Heading>Welcome to Login Page</Heading>
        <form onSubmit = {this.submitForm}>
             
             <input type="text" placeholder="username" name="username" value= {this.state.username} onChange= {this.onChange}/>
             <br/>
             <input type="password" placeholder="password" name="password" value= {this.state.password} onChange= {this.onChange}/>
             <br/>
             <Button>Submit</Button>
             
        </form>

        </Content>



       	)



   }



}