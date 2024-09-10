
import React from 'react';
import './services.css'
import Insta from '../../assets/InstaIcon.png'
import Gmail from '../../assets/GmailIcon.png'
import Phone from '../../assets/PhoneIcon.png'

const Services = () => {
  return (
    <div className='contact-root'>
      <div className='contact-card'>
      <h2 className='heading-1' style={{fontSize:'5vw', textDecoration:'underline'}}>Contact us at</h2>

      <div className='contacts' style={{boxShadow:'0.2rem 0.2rem rgb(214, 64, 179)'}}>
        <img className='contact-icon' src={Insta}></img>
        <a className='text' href='https://www.instagram.com/youth_cares_/'>@youth_cares_</a>
        </div>

        <div className='contacts' style={{backgroundColor:'rgb(189, 172, 109)', boxShadow:'0.2rem 0.2rem rgb(138, 136, 44)'}} >
        <img className='contact-icon' src={Gmail}></img>
        <a className='text' href=' https://mail.google.com/mail/u/1/#inbox '>youthcares@gmail.com</a>
        </div>

        <div className='contacts' style={{backgroundColor:'rgb(109, 189, 131)',boxShadow:'0.2rem 0.2rem rgb(56, 161, 47)'}} >
        <img className='contact-icon' src={Phone}></img>
        <p className='text'>+91 78178 41450</p>
        </div>


        </div>
    </div>
  );
};

export default Services;
