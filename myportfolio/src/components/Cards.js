import React from 'react';
import './styles/Cards.css';
import './styles/Button.css'
import CardItem from './CardItem';
import {Link } from 'react-router-dom';
import myimage from "../resources/images/img-1.jpg";


function Cards() {
  return (
    <div className="mainpage">
      <div className="about"> 
        <div className="about_container">
          <div className="profile_pic_container"> 
            <img className="picture" src={myimage} alt="user pic"></img>
          </div>
          <div className="intro_text"> 
            <h6>Hi! My name is Elizabeth...</h6>
            <p>and I am currently a PhD student in electrical engineering at Auburn University. After obtaining my B.S. in Electrical Engineering from Auburn in 2013, I felt that it was important to learn more about my chosen field, power systems, so I decided to continue my studies at Auburn.</p></div>
        </div>
      </div>
        

      <div className='posts'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <div className='cards__items'>
              <CardItem
                title='Synchronous Machine Project'
                text='In my advanced electric machines course we spent a semester learning, in great detail, how a synchronous machine operates and how to model it. In order to apply what we learned in class, our final project required us to work individually to develop a program that would verify steady-state operation of a synchronous generator, model the results of a disturbance, and show a return to steady-state operation after the disturbance is removed. In the lectures I learned that steady-state of a synchronous machine occurs when the rotor speed and the stator magnetic field are equivalent. When the rotor speed and stator field are not equal, the result is seen, beginning at t=1s, in the figure to the right. This project gave me the chance to directly apply what I learned in order to simulate a disturbance scenario that must be considered in power generation.'
               >
              </CardItem>
            </div>
            <div className='cards__items'>
              <CardItem
                title='Synchronous Machine Project'
                text='In my advanced electric machines course we spent a semester learning, in great detail, how a synchronous machine operates and how to model it. In order to apply what we learned in class, our final project required us to work individually to develop a program that would verify steady-state operation of a synchronous generator, model the results of a disturbance, and show a return to steady-state operation after the disturbance is removed. In the lectures I learned that steady-state of a synchronous machine occurs when the rotor speed and the stator magnetic field are equivalent. When the rotor speed and stator field are not equal, the result is seen, beginning at t=1s, in the figure to the right. This project gave me the chance to directly apply what I learned in order to simulate a disturbance scenario that must be considered in power generation.'
               >
              </CardItem>
            </div>
            
            <div className='cards__items'>
              <CardItem
                title='FEEDER Summer Institute'
                text='The Foundations for Engineering Education for Distributed Energy Resources (FEEDER) Consortium includes eight universities serving to further interest in power and energy research and education.

                As a member of the Grid Engineering for Accelerated Renewable Energy Deployment (GEARED) Student Innovation Board, I have the opportunity to attend and promote programs such as the summer institutes hosted by universities in our consortium.'
              ></CardItem>
             </div>
             <div className='cards__items'>
              <CardItem
                title='PSS/E Stability Project'
                text='The Foundations for Engineering Education for Distributed Energy Resources (FEEDER) Consortium includes eight universities serving to further interest in power and energy research and education.

              As a member of the Grid Engineering for Accelerated Renewable Energy Deployment (GEARED) Student Innovation Board, I have the opportunity to attend and promote programs such as the summer institutes hosted by universities in our consortium.'
               >
              </CardItem>
            </div>
            
          </div>
          <div className="addButton">
            <Link to="/EditPost"><button className="btn btn-primary">Add Post</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
