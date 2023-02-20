import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import get_ready1 from "../../assets/images/component/landing/get-ready-1.png";
import get_ready_card from "../../assets/images/component/landing/get-ready-card.png";
import get_ready_shep from "../../assets/images/component/landing/get-ready-bg-overlay.png";
import {FaCaretRight} from "react-icons/fa";
const GetReady = () => {
  return (
    <>
    
        <section className='get_ready_section'>
        <div className='get_ready_image'>
               <Image className="get_ready_img" src={get_ready1} alt="get_ready-image1" fluid/>
              </div> 
              <div className='get_ready_bg_overlay'>
              <Image className="get_ready_shep" src={get_ready_shep} alt="get_ready-image1" fluid/>
              </div>
        <Container>
       
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className='get_ready_title'>
                <h1 className='get_ready_heading'>Get Ready To Have<br/><span className='get_ready_span'>Best Smart Payments<br/></span> in The World</h1>
                <p className='get_ready_text'>Are You Ready for fringilla fringilla sit amet molestie eros. Praesent pretium, velit sit amet molestie elementum.  Ut ac eros blandit, congue lacus ut.</p>
                <a href='/' className='get_started_btn'>Get Started<FaCaretRight className="get_started_icon"/></a>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='get_ready_cards'>
               <Image className="get_ready_card" src={get_ready_card} alt="get_ready-card" fluid/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default GetReady
