import variables from "../../app/variables.module.scss";
import { Button, Flex, Segmented } from 'antd';
import Creativity from "./Creativity";

const Banner = () => {

  // const gradientStyle = {
  //   background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)',
  //   width: "100%",
  //   height: '200px',
  //   borderRadius: '10px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: '#fff',
  //   fontSize: '24px',
  // };
  // style={gradientStyle}
  return (
    <div className={variables.banner} >
      <Flex gap="middle" align="center" justify="center" vertical>
        <div>
        <h2>Empowering Curators, 
          <br />  Enriching Perspectives</h2>
        <p>
          Welcome to Creativise! Unleashing the power of curation. We empower curators worldwide,
          providing them with a robust <br /> platform to showcase their expertise and amplify their
          impact. We believe in the power of curation and helps in turning a <br /> perspective into
          reality.
          
        </p>
       
       <div className={variables.btnDiv}>
       <button className={variables.btn}>Get Started</button>
       </div>
        </div>
      </Flex>
      {/* <Creativity/> */}
    </div>
  );
};

export default Banner;
