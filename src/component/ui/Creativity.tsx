/* eslint-disable react/no-unescaped-entities */
import { Col, Flex, Row } from "antd";
import Image from "next/image";
import React from "react";
import feature from '../../assets/images/feature.png'
import variables from '../../app/variables.module.scss';
import {ArrowRightOutlined } from '@ant-design/icons';
import line from '../../assets/images/Line.png'

const Creativity = () => {
  return (
    <div >
      <Row  >
        <Col span={12}>
          <div className={variables.creativity}>
            <h3>Unleash your creativity in your curative zone !</h3>
            <p>Whether you're a creative enthusiast or a professional designer, <br /> Creativise zone is the first browser based design tool that allows to  <br />create stunning graphics with more user friendly experience. It has the <br /> power of stitching your .psd (Photoshop) and .ai (Illustrator) files with <br />intuitive features to meet all your design needs. This tool prioritizes user- <br />friendliness and aims to provide a seamless and enjoyable design <br /> experience like never before.</p>
            <button className={variables.featureBtn}>Explore Now <Image src={line} width={30} height={10} alt="" className={variables.btnImg}/></button>
          </div>
        </Col>
        <Col span={12}>
        <div>
        <Image src={feature}  height={300} alt="feature"  style={{width:"100%"}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Creativity;
