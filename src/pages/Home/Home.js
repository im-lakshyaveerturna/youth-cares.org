// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../../index.css'
import './Home.css';

import YCvideo from '../../assets/YCvideo.mp4';
import youthCaresImage from '../../assets/youth_cares_logo.png';
import YCimage1 from '../../assets/YCimage-1.png'
import YCimage2 from '../../assets/YCimage-2.avif'
import YCimage3 from '../../assets/YCimage-3.avif'
import YCimage4 from '../../assets/YCimage-4.webp'
import YCimage5 from '../../assets/YCimage-5.webp'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHandsHelping, faHospital, faSeedling, faBroom, faDog } from '@fortawesome/free-solid-svg-icons';



const Home = () => {

  const services_1 = [
    {
      icon: faBook,
      title: "Fun and Learn Programmes",
      description: "Our engaging and interactive programs transform learning into an enjoyable experience. By using creative teaching methods, we aim to ignite curiosity and enthusiasm in children, making education a fun and memorable journey."
    },
    {
      icon: faHandsHelping,
      title: "Distribution of Essentials",
      description: "We provide vital resources such as food, clothing, and hygiene products to those in need. Our goal is to support families and individuals facing economic challenges by addressing their immediate needs and improving their quality of life."
    },
    {
      icon: faHospital,
      title: "Medical Camps",
      description: "Our medical camps offer free health check-ups, treatments, and health education to underserved communities. We strive to make healthcare accessible and affordable, helping individuals manage their health and well-being more effectively."
    }
  ];

  const services_2 = [
    {
      icon: faSeedling,
      title: "Plantation Drives",
      description: "We organize tree planting events to enhance environmental sustainability. By involving community members in planting and caring for trees, we contribute to cleaner air, improved biodiversity, and a greener future."
    },
    {
      icon: faBroom,
      title: "Cleanliness drives",
      description: "Our cleanliness drives focus on improving public spaces by reducing litter and promoting proper waste management. Volunteers work together to clean parks, streets, and neighborhoods, fostering a cleaner and healthier environment for everyone."
    },
    {
      icon: faDog,
      title: "Animal Takecare",
      description: "We provide care, shelter, and medical attention to stray and neglected animals. Our initiatives include rescue operations, vaccination drives, and adoption programs to ensure that animals receive the care they need and find loving homes"
    }
  ];

  return (
    <div className='home-root'>
      
      <div>
        <img src={youthCaresImage} className='image-1' alt='Youth Cares Logo' />

        <div className='content'>
          <h1 className='heading-1'>Hello</h1>
          <p className='paragraph'>
          <span>Youth Cares</span> is a dynamic non-profit organization founded and led by <span style={{color:'rgb(173, 36, 145)'}}>Nimrit Kaur</span>, a dedicated student with a passion for social change and community service. The organization is committed to empowering young people to make a positive impact in their communities through a variety of initiatives focused on education, health, and environmental sustainability.

          </p>
          <p className='paragraph'>
          Under Nimrit Kaur's leadership, Youth Cares has launched several projects aimed at addressing critical issues such as access to education for underprivileged children, promoting mental health awareness, and organizing environmental clean-up drives. 
          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join Youth Cares!</Link>
        </button>
        </div>

      </div>

      <div className='background-1' style={{padding:'none'}}>
        <h1 className='line'>Services We Provide!</h1>
        <div className='icons'>
          {services_1.map((service, index) => (
            <div class='icon-card-1'>
              <FontAwesomeIcon className='icon' icon={service.icon} />
              <h3 className='icon-title'>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='background-1'>
        <div className='icons'>
          {services_2.map((service, index) => (
            <div className='icon-card-2'>
              <FontAwesomeIcon className='icon' icon={service.icon} />
              <h3 className='icon-title'>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      

      <div>
      <video className='video-1' style={{animation: 'slide-in-left forwards', animationTimeline: 'view()', animationRange: 'entry 0% cover 40%',marginTop:'2rem',borderRadius:'1rem', boxShadow:'0.2rem 0.1rem 0rem violet'}} controls autoPlay loop muted> <source src={YCvideo} type='video/mp4'/></video>


        <div className='content' style={{maxWidth:'50%'}}>
          <h1 className='heading-2'>#WeeklyTechProgram</h1>
          <p className='paragraph'>
          The Weekly Technology Program is a unique initiative focused on empowering underprivileged children from government schools by teaching them essential computer and other <span style={{color:'rgb(173, 36, 145)'}}>technical skills</span>. Each week, volunteers from our organization visit these schools to engage with the students and introduce them to the world of technology in a fun and interactive way. The goal is to spark curiosity and provide these children with practical knowledge that could open up future opportunities.

          </p>
          <p className='paragraph'>
          Our volunteers dedicate their time and expertise to making learning enjoyable, ensuring that the children are not only gaining valuable skills but also developing a positive attitude toward technology. The sessions are designed to be playful and engaging, encouraging active participation from the students while fostering creativity and critical thinking. By simplifying complex concepts and using hands-on activities, we aim to create a learning environment that is both educational and enjoyable.
          </p>
          <p className='paragraph'>
          This program is part of our larger mission to give back to the community by making a real difference in the lives of these children. Through the Weekly Teach Program, we hope to inspire a generation of young learners who are equipped with the basic tech skills they need to navigate an increasingly digital world.
          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join WTP!</Link>
        </button>
        </div>
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to right, rgb(247, 72, 130), rgb(242, 225, 231)', width: '100%', textAlign:'center',}}></hr>
   
      </div>
      <div>
  

    <img className='image-2' style={{float:'left'}} src={YCimage1}/>
        <div className='content' style={{maxWidth:'50%'}}>

  
          <h1 className='heading-2' style={{color:'rgb(120, 4, 143)', textDecoration:'underline'}}>Distribution of Essentials </h1>  
          <p className='paragraph'>
          Our organization is committed to supporting those in need through the Distribution of Essentials to the Poor. This initiative focuses on providing basic necessities such as <span style={{color:'rgb(227, 66, 214)'}}>food, clothing, hygiene products</span>, and other essential items to underprivileged individuals and families. By addressing their immediate needs, we aim to alleviate some of the hardships they face and improve their quality of life.

          </p>
          <p className='paragraph'>
          Volunteers from our organization actively participate in identifying areas where help is most needed and distributing these essentials directly to the beneficiaries. The items are carefully selected to meet the needs of the community, ensuring that they receive support that is both meaningful and practical. In addition to distribution, we also focus on raising awareness about the importance of community support and solidarity in helping those less fortunate.

          </p>
          <p className='paragraph'>
          Through our Distribution of Essentials initiative, we strive to bring a sense of dignity and relief to individuals struggling to meet their basic needs. We believe that by extending a helping hand, we can make a positive and lasting impact on the lives of those in our community.
          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join this drive!</Link>
        </button>
        </div>
        
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to left, rgb(247, 72, 130), rgb(247, 228, 239)', width: '100%', textAlign:'center',}}></hr>
        </div>

        <div>
      <img className='image-2' src={YCimage2}/>


        <div className='content' style={{maxWidth:'50%'}}>
          <h1 className='heading-2' style={{color:'rgb(120, 4, 143)', textDecoration:'underline'}}>Medical Camps </h1>
          <p className='paragraph'>
          Our organization regularly hosts Medical Camps aimed at providing essential healthcare services to underserved communities. These camps focus on offering free <span style={{color:'rgb(227, 66, 214)'}}>medical check-ups, treatments, and health education</span> to individuals who may not have easy access to healthcare facilities. By bringing healthcare directly to those in need, we aim to improve their overall well-being and create awareness about maintaining a healthy lifestyle.

          </p>
          <p className='paragraph'>
          At each camp, a team of dedicated medical professionals, along with volunteers from our organization, provide consultations, diagnostic services, and basic treatments. The camps are equipped to address a wide range of health concerns, from general ailments to more specialized needs. In addition to providing immediate care, the medical camps also emphasize preventive healthcare, offering advice on nutrition, hygiene, and disease prevention.


          </p>
          <p className='paragraph'>
          The medical camps not only offer relief to individuals with limited access to healthcare but also create an opportunity for community engagement and support. Our organization believes in making healthcare more accessible and in raising awareness about the importance of regular medical check-ups. Through these Medical Camps, we strive to make a meaningful impact on the health and lives of the communities we serve.


          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join this drive!</Link>
        </button>
        </div>
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to right, rgb(247, 72, 130), rgb(242, 225, 231)', width: '100%', textAlign:'center',}}></hr>
        </div>

        <div>
      <img className='image-2' style={{float:'left'}} src={YCimage3}/>


        <div className='content' style={{maxWidth:'50%'}}>
          <h1 className='heading-2' style={{color:'rgb(120, 4, 143)', textDecoration:'underline'}}>Plantation Drives</h1>
          <p className='paragraph'>
          Our organization actively participates in Plantation Drives as part of our commitment to environmental sustainability and community well-being. These drives are organized to encourage tree planting in urban and rural areas, <span style={{color:'rgb(227, 66, 214)'}}>contributing to greener and healthier surroundings</span>. By mobilizing volunteers and local communities, we aim to raise awareness about the importance of trees in combating climate change, improving air quality, and preserving biodiversity.
          </p>
          <p className='paragraph'>
          Each plantation drive brings together individuals from diverse backgrounds, united by a shared goal of making the environment more sustainable. Volunteers from our organization, along with community members, plant a variety of trees, carefully selected to thrive in the local environment. These events not only focus on planting but also on educating participants about the long-term care and maintenance of the trees, ensuring their survival and growth.
          </p>
          <p className='paragraph'>
          Through our Plantation Drives, we are helping to create greener spaces while fostering a sense of environmental stewardship within the community. By encouraging collective action, we hope to inspire others to take small yet impactful steps toward a more sustainable future.
          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join this drive!</Link>
        </button>
        </div>
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to left, rgb(247, 72, 130), rgb(242, 225, 231)', width: '100%', textAlign:'center',}}></hr>
        </div>

        <div>
      <img className='image-2' src={YCimage4}/>


        <div className='content' style={{maxWidth:'50%'}}>
          <h1 className='heading-2' style={{color:'rgb(120, 4, 143)', textDecoration:'underline'}}>Animal Takecare</h1>
          <p className='paragraph'>
          Our organization is dedicated to supporting animal welfare through regular Animal Care Initiatives. These initiatives focus on providing  <span style={{color:'rgb(227, 66, 214)'}}>care, shelter, and medical attention</span> to stray and neglected animals in the community. By organizing rescue efforts, vaccination drives, and adoption programs, we aim to ensure that animals receive the love and care they deserve.

          </p>
          <p className='paragraph'>
          Our volunteers, along with veterinarians and animal welfare experts, work tirelessly to treat injured animals, offer vaccinations, and promote responsible pet ownership. We also collaborate with local shelters to facilitate the adoption of stray animals, giving them a chance to find loving homes. In addition to hands-on care, our initiatives emphasize educating the public on the importance of animal welfare and humane treatment.
          </p>

          <p className='paragraph'>
          Through these Animal Care Initiatives, we strive to create a compassionate community where animals are treated with respect and dignity. Our goal is to improve the lives of these animals while raising awareness about their well-being and the critical role they play in our ecosystem.

          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join this drive!</Link>
        </button>
        </div>
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to right, rgb(247, 72, 130), rgb(242, 225, 231)', width: '100%', textAlign:'center',}}></hr>
        </div>
        <div>
          
      <img className='image-3'style={{float:'left'}} src={YCimage5}/>

        <div className='content' style={{maxWidth:'50%'}}>
          <h1 className='heading-2' style={{color:'rgb(120, 4, 143)', textDecoration:'underline'}}>Cleanliness Drives</h1>
          <p className='paragraph'>
          Our organization regularly organizes Cleanliness Drives aimed at promoting a cleaner and healthier environment within local communities. These drives focus on cleaning public spaces such as parks, streets, and neighborhoods, <span style={{color:'rgb(227, 66, 214)'}}>helping to reduce litter and pollution.</span>  By encouraging community participation, we aim to instill a sense of responsibility toward maintaining cleanliness in our surroundings.
          </p>
          <p className='paragraph'>
          Volunteers from our organization, along with local residents, come together to collect waste, segregate recyclables, and dispose of trash in an eco-friendly manner. These drives not only improve the aesthetic and hygiene of public spaces but also educate participants on the importance of proper waste disposal and recycling practices. We believe that a clean environment contributes to better health and enhances the quality of life for everyone.

          </p>
          <p className='paragraph'>
          Through our Cleanliness Drives, we strive to create awareness about environmental hygiene and inspire communities to take an active role in keeping their spaces clean. By working together, we can build a cleaner, safer, and more sustainable environment for future generations.
          </p>
          <button className='button'>
          <Link to="/services" className='link' style={{color:'white'}}>Join this drive!</Link>
        </button>
        </div>
        <hr style= {{display:'flex', border: 'none', height: '0.5rem', background: 'linear-gradient(to left, rgb(247, 72, 130), rgb(242, 225, 231)', width: '100%', textAlign:'center',}}></hr>
        </div>







      </div>
  );
};

export default Home;
