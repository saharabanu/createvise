import React from "react";
import Image from "next/image";
import variables from "../../app/variables.module.scss";
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import { useSpring, animated } from 'react-spring';


const Freedom = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <div>
<div className={variables.freedomDiv} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })}>
      <animated.div style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`) }}>
        <Image src={img1} alt="img1" className={variables.freedomImg1} />
      </animated.div>
      <animated.div style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`) }}>
        <Image src={img2} alt="img1" className={variables.freedomImg2} />
      </animated.div>
      <animated.div style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`) }}>
        <Image src={img3} alt="img1" className={variables.freedomImg3} />
      </animated.div>
      <animated.div style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`) }}>
        <Image src={img4} alt="img1" className={variables.freedomImg4} />
      </animated.div>
      {/* Repeat the same pattern for other images */}
      <div className={variables.freedomContent}>
          <div>
            <h3>
              Get the freedom <br />
              to be more creative!
            </h3>
            <p>
              Let your imagination soar in the magical world where creativity knows no bounds,{" "}
              <br /> where knowledge and expertise intertwine to create something truly <br />
              extraordinary, fostering brilliance and enabling new ideas to flourish.
            </p>
            <div className={variables.btnDiv}>
              <button className={variables.btn}>Get Started</button>
            </div>
          </div>
        </div>
    </div>

    </div>
  )
};

export default Freedom;
