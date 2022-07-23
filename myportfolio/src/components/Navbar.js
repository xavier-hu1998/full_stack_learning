import React, { useState, useEffect } from 'react';
import { LogoutBtn } from './LogoutBtn';
import { PublishBtn } from './PublishBtn';
import { Link, withRouter } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = ({history, isLogged}) => {
    
    const handleClick=() =>{
        history.push('/')
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.clear();
        isLogged(false)
    } 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    let buttons;

    window.addEventListener('resize', showButton);
  
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <h1 className='navbar-logo'>
            ePortfolio
        </h1>
    
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            </li>

            <li className='nav-item'>
            <Link
                to='/Repo'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Repository
            </Link>
            </li>

            <li className='nav-item'>
            <Link
                to='/WorkEx'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Work Experience
            </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/EditPost'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Create post
            </Link>
            </li>

            </ul>
       
            
        {/* <div><Link to='/publish'> <button className="nav_button" buttonStyle='btn--outline btn==medium'>Publish</button></Link></div>  */}
        {button && <PublishBtn className="nav_button" buttonStyle='btn--outline'>Publish</PublishBtn>}
        {button && <LogoutBtn className="nav_button" buttonStyle='btn--outline' onClick={handleClick}>Logout</LogoutBtn>}
        {buttons}
        
        </div>
    </nav>
    </> 
  );
}

export default withRouter(Navbar);