import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import hero1 from "../../assets/images/component/landing/hero1.png";
import hero2 from "../../assets/images/component/landing/box-1.png";
import hero3 from "../../assets/images/component/landing/box-2.png";
const Hero = () => {
  return (
    <>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <div className='hero_title'>
                <h1 className='hero_heading'>Smart <span className='hero_span'>Payments</span> Anyway, Anytime.</h1>
                <p className='hero_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className='hero_image'>
               <Image className="hero_img" src={hero1} alt="hero-image1" fluid/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='hero_section_bottom'>
        <Container>
          <Row>
          <Col sm={2}></Col>
            <Col sm={12} md={12} lg={5}>
            <div className='hero_background_img'>
            <div className='hero_background_box'>
            <div className='hero_bottom_image'>
               <Image className="hero_bottom_img" src={hero2} alt="hero-image1"/>
              </div>
              <div className='hero_content'>
                <h4 className='hero_heading'>Intelligence Optimization</h4>
                <p className='hero_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non.</p>
              </div>
              </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={5}>
            <div className='hero_background_img'>
            <div className='hero_background_box'>
            <div className='hero_bottom_image'>
               <Image className="hero_bottom_img" src={hero3} alt="hero-image1"/>
              </div>
              <div className='hero_content'>
                <h4 className='hero_heading'>Fastest-Improving Platform</h4>
                <p className='hero_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non.</p>
              </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Hero
