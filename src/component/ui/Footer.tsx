import React from 'react';
import variables from '../../app/variables.module.scss';
import fLogo from '../../assets/images/footer-logo.png';
import fb from '../../assets/images/fb.png';
import twt from '../../assets/images/twiter.png';
import inst from '../../assets/images/insta.png';
import linkedin from '../../assets/images/linkedin.png';
import pint from '../../assets/images/pinint.png';
import Image from 'next/image';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div className={variables.footer}>
        <div>
            <div className={variables.footerFirstPart}>
         <Image src={fLogo} alt="Logo"/>
         <p>Empowering Curators, Enriching Perspectives</p>
            </div>

            <Row className={variables.footerLastPart}  >
                <Col span={8}>
                <div>
                <input type="text" placeholder='Email' className={variables.input}/>
                <input type="button" value="Notify Me"  className={variables.submitBtn}/>
                </div>
                </Col>
                <Col span={8}>
                <div className={variables.footerIcon}>
                <Image src={inst} alt="Logo"/>
                <Image src={fb} alt="Logo"/>
                <Image src={linkedin} alt="Logo"/>
                <Image src={pint} alt="Logo"/>
                <Image src={twt} alt="Logo"/>
                </div>
                </Col>

                <Col span={8}>
                <div className={variables.copyright}>
                <p>@2023 Creativise, All rights reserved.</p>
                </div>
                </Col>
            </Row>
        </div>

    </div>
  )
}

export default Footer