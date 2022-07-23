import React from 'react';
import './styles/Button.css';
import { Link } from 'react-router-dom';

export const LogoutBtn = ({
  type,
  onClick,
  children
}) => {
 
  return (
      <>
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn--outline btn--medium`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
    </>
  );
};

