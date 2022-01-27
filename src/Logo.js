import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.scss';

const Logo = () => (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
        <div>React</div>
        <div>Parallax Tilt</div>
        <div>:eyes:</div>
      </div>
    </Tilt>
  );
  
export default Logo;