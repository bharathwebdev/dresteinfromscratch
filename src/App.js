
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

const DepartmentDiv = styled.div`
z-index: -10;
`;



function App() {

  const {scrollY} = useViewportScroll()
  const yValue = useTransform(scrollY,[0,2000] ,[0,-500])

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

  return (
    <div className="App">
            <Particles
        className="particles"
        style={{
          position: "absolute",
          zIndex: -1000,
        }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particalobj}
      />
    <Nav/>
    <Main/>
     <motion.div  className='img' style={{y:yValue}}>

     </motion.div> 

<DepartmentDiv>
<Departments/>
</DepartmentDiv>



    </div>
  );
}

export default App;
