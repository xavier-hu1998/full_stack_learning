import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './styles/App.css';

import Home from './pages/Home';
import WorkExperience from './pages/WorkEx';
import Repo from './pages/Repo';
import Publish from './pages/Publish';
import EditPost from './pages/EditPost';


const HomeRouter = ({handleLogged}) => {
        return (
            
            <Router>
                <Navbar isLogged={handleLogged}/>
                <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Repo' component={Repo} />
                <Route path='/WorkEx' component={WorkExperience} />
                <Route path='/EditPost' component={EditPost} />
                <Route path='/Publish' component={Publish} />
                

                </Switch>
            </Router>
            
        );
    }

    export default HomeRouter;