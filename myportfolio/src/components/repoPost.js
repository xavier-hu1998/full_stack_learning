import React from 'react';
import './styles/Cards.css';
import './styles/Button.css'
import CardItem from './CardItem';


function RepoPost() {
  return (
    <div className="mainpage">
      <h1 className='Repo'>Post Repository</h1>
        

      <div className='post--repo'>
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
         
        </div>
      </div>
    </div>
  );
}

export default RepoPost;
