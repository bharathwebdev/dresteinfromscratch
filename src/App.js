
import './App.css';
import earth from './earth.png'
import styled  from 'styled-components';
import Departments from './components/Departments';
import { useState } from 'react';
import Nav from './components/NavBar';
import Main from './components/Main';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion ,useViewportScroll ,useTransform} from 'framer-motion';
import { Particalobj } from './Particalobj';
import SmoothScroll from './components/SmoothScroll';
import { useScroll } from 'framer-motion';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import Scroll from './components/Smoothscroll2';
import '../src/styles/style.css'
const DepartmentDiv = styled.div`


position: sticky; 


`;



function App() {

  const {scrollY} = useViewportScroll()
  const yValue = useTransform(scrollY,[0,1000] ,[0,-300])
  const { scrollYProgress } = useScroll()

  
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  var reset = function(e) {
    e.target.className = '';
    setTimeout(function() {
      e.target.className = 'meteor';
    }, 0);
  };
  var meteors = document.querySelectorAll('.meteor');
  for(var i = 0; i < meteors.length; i++) {
    meteors[i].addEventListener('animationend', reset);
  }
  return (
    


    <div className="App">

      <motion.div className='scrollprogress' style={{ scaleX:scrollYProgress}} />

  <div className="meteors">
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
  <div className="meteor"></div>
</div>
            <Particles
        className="particles"
        
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particalobj}
      />
     





    <Nav/>
   
    <Main/>

     <motion.div   className='img' style={{y:yValue,zIndex:-1}}>

     </motion.div> 




<DepartmentDiv>
<Departments/>
</DepartmentDiv>

{/* </SmoothScroll> */}

    </div>

 
  );
}

export default App;
