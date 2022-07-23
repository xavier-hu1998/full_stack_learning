import "../components/styles/Login.css"

import React from 'react';
import { Link } from 'react-router-dom';


class Register extends React.Component{
    state={
        Username:'',
        Firstname:'',
        Lastname:'',
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        fetch('http://localhost:5000/users/signup', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection':'keep-alive'
            },
            body: JSON.stringify({ 
                username: this.state.Username,
                firstName: this.state.Firstname,
                lastName: this.state.Lastname,
                email : this.state.email,
                password : this.state.pwd
            })
        })
        .then(resp => {
            if(resp.ok){
                window.location.href = "http://localhost:3000/";
                window.alert("Register Successful! Please sign in");

            }else{
                window.alert("Register Failed");
                return Promise.reject(resp);
            }
          });
    }
    render(){
        return(
            <div className="login">
            <div className="form-box">
                    <h2> Register <h5>to ePortfolio</h5> </h2>
                    <form onSubmit = {this.handleSubmit}>
                    
                    <label>
                        <p>Username</p>
                        <input type='text' className="form-control" name ='Username' value={this.state.Username} placeholder='' required onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p>First Name</p>
                        <input type='text' className="form-control" name ='Firstname' value={this.state.Firstname} placeholder='' required onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input type='text' className="form-control" name ='Lastname' value={this.state.Lastname} placeholder='' required onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p>Email Address</p>
                        <input type='email' className="form-control" name='email' value={this.state.email} placeholder='email...' required onChange={this.handleChange}/>
                    </label>
                    
                    <label>
                        <p>Password</p>
                        <input type='password' className="form-control" name ='pwd' value={this.state.pwd} placeholder='password...' required onChange={this.handleChange}/>
                   
                    </label>
                    
                    <button className="btn btn-login" onSubmit={this.handleSubmit}>Sign up</button>
                    <Link to="/"><button className="btn btn-outline-secondary">Login</button></Link>
                    </form>
            </div>
            </div>
        )
    }
}


export default Register;