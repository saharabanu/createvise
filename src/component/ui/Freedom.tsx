import React from "react";
import Image from "next/image";
import variables from "../../app/variables.module.scss";


const Freedom = () => {
  return (
    <div className={variables.freedomDiv}>
      
       
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
  );
};

export default Freedom;
