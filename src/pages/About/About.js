// Home.js
import React from 'react';
import Earth from '../../assets/YCaboutimage.jpg'
import Founder from '../../assets/NimritYC.jpeg'
import './About.css';
import '../../index.css'

const About = () => {
  return (
    <div className='home-root'>
      
      <div>
        <img src={Earth} className='image-1' alt='Youth Cares Logo' />

        <div className='content'>
          <h1 className='heading-1'>"WE ARE A COMMUNITY"</h1>
          <p className='paragraph'>
          <span>Youth Cares</span>, founded in 2022 and led by a contemporary high school student, <span style={{color:'rgb(227, 66, 214)'}}>Nimrit Kaur</span>, is a dynamic non-profit organization focused on empowering and uplifting youth through education, technology, and community engagement. The organization hosts weekly tech programs designed to equip underprivileged young people with essential skills in areas such as digital literacy. In addition to its tech initiatives, Youth Cares runs various community drives, fostering a spirit of giving and collaboration among students and young adults. By providing resources and support, Youth Cares aims to inspire the next generation of leaders and innovators.

          </p>
          <p className='paragraph'>
          The organisation is dedicated to empowering youth by bridging the gap between <span style={{color:'rgb(227, 66, 214)'}}>technology, education, and community service.</span> 
          Youth Cares creates a platform where young people can not only learn but also give back, making a tangible difference in their communities.
          </p>
          
        </div>
        <h1 className='heading-3' style={{marginLeft:'15rem',marginTop:'5rem', fontSize:'5rem'}}>#YouthCares</h1>
      </div>
      <div className='background-3' style={{justifyContent:'normal'}}>
        <div className='card'>
        <img className='mask-image' src={Founder}></img>
        <h1 style={{textAlign:'center', opacity:'80%', fontFamily:'cursive'}} className='heading-2'>Nimrit Kaur</h1>
        <h2  className='heading-5' >Founder, Youth Cares</h2>
           <p className='paragraph-2' style={{textAlign:'center'}}>Nimrit Kaur, the 17-year-old founder of Youth Cares, is a passionate advocate for youth empowerment and community service. Driven by her vision to create positive change, Nimrit established Youth Cares to provide young people with opportunities to develop essential technological skills and engage in meaningful community work. A high school student with a deep interest in STEM and social impact, Nimrit has led numerous initiatives, from tech workshops to community drives, all aimed at fostering leadership, collaboration, and innovation among her peers. Her dedication to creating opportunities for others, combined with her strong leadership and forward-thinking mindset, has made her a respected figure in both educational and community circles. Through Youth Cares, Nimrit hopes to inspire and uplift the next generation, ensuring that even the unprivileged young people have the tools and confidence to pursue their goals and contribute to society</p>
      </div>
      </div>
      </div>
  );
};

export default About;
