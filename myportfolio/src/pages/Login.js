import "../components/styles/Login.css"

import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component{
    state={
        // email:'',
        pwd:'',
        firstname: ''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
      
        // headers.append('Access-Control-Origin', '*'); https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work

        let resp = await fetch('http://localhost:5000/login', {
            method: 'POST',
            mode: 'cors',
            headers:{
                // 'Accept': '*/*',
                'Content-Type': 'application/json',
                // 'Access-Control-Expose-Headers' : 'Authorization'
                // 'Accept-Encoding':'gzip, deflate, br',
                // 'Connection':'keep-alive'
            },
            body: JSON.stringify({
                username:this.state.Username,
                password:this.state.pwd
            })
        })
        
        if(resp.ok){
                document.title = `${this.state.Username}'s portfolio`;

                const userToken = resp.headers.get('Authorization');
                const header = resp.headers.get('Cache-Control');

                console.log(userToken);
                console.log(header);

                //print response headers and values
                for(const header of resp.headers){
                    console.log(`Name: ${header[0]}, Value:${header[1]}`);
                  }

                localStorage.setItem('token', userToken);


                
                fetch('http://localhost:5000/users', {
                    method: 'GET',
                    headers:{
                        'Authorization' : 'Bearer '+ localStorage.getItem('token'),
                        'Accept-Encoding':'gzip, deflate, br',
                        'Connection':'keep-alive'
                    }
                })
                .then(resp => resp.json() )
                .then(resp => {
                    const data = resp.find((d) => d.username === this.state.username);
                    if(data){
                        localStorage.setItem('userID', data.id)
                    }
                });
                this.props.isLogin(true)

            }else{
                window.alert("Login Failed");
                return Promise.reject(resp);
            }

      
    //    console.log(window.localStorage.getItem('token'));

    }

    render(){
        return(
            <div className="login">
            <div className="form-box">
                    <h2> Login<h5>to ePortfolio</h5> </h2> 
                    <form onSubmit = {this.handleSubmit}>
                    
                    {/* <label>
                        <p>Email</p>
                        <input type='email' className="form-control" name='email' value={this.state.email} placeholder='email...' required onChange={this.handleChange}/>
                    </label> */}
                    
                    <label>
                        <p>Username</p>
                        <input type='text' className="form-control" name='Username' value={this.state.Username} placeholder='username...' required onChange={this.handleChange}/>
                    </label>

                    <label>
                        <p>Password</p>
                        <input type='password' className="form-control" name='pwd' value = {this.state.pwd} placeholder='password...' required onChange={this.handleChange}/>
                   
                    </label>
                    
                    <button className="btn btn-login" onSubmit={this.handleSubmit}>Log in</button>
                    <Link to="/Register"><button className="btn btn-outline-secondary">Register</button></Link>
                    
                </form>
            </div>
            </div>
        )
    }
}


export default Login;