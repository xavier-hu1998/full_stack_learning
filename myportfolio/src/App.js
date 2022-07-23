import React  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeRouter from './HomeRouter'


export default class App extends React.Component {

    state={
        isLog:false
      }
    
      handleLogin = (isLog) => this.setState({isLog})
      render(){
        const {isLog} = this.state;
        return (
            <>
            <Router>
                <Switch>
                {
                !isLog ?
                <Route exact path='/' render={() => <Login isLogin={this.handleLogin}/>}/>
                :
                <Route path='/' render={() =><HomeRouter handleLogged={this.handleLogin}/> }/>
                
                }
                <Route path='/' render={() => <Register isLogin={this.handleLogin}/>}/>
                </Switch>
            </Router>
            </>
        );
    }
}