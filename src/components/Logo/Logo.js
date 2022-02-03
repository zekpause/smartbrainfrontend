import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.scss';

const Logo = () => (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.8}
      scale={1.1}
    >
      <div className="inner-element">
        <div ><img alt='' src={brain} width='150px' height='auto'/></div>
      </div>
    </Tilt>
);
  
export default Logo;