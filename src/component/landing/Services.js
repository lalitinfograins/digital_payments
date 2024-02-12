import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import card1 from "../../assets/images/component/landing/card-1.png";
import card2 from "../../assets/images/component/landing/card-2.png";
import card3 from "../../assets/images/component/landing/card-3.png";
import {FiArrowRight} from "react-icons/fi";
const Services = () => {
  return (
    <>
     <section className='services_section'>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className='services_heading'>
              <h2 className='services_h2'>Our <span className='services_span'>Services</span><br/>Anywhere & Anytime</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className='services_text'>
              <p className='services_p'>Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex, ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel sapien magna. Morbi eleifend ligula nunc, non elementum sem scelerisque a. </p>
            </div>
          </Col>
        </Row>
      </Container>
     </section> 

     <section className='services_cards_section'>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={4}>
            <div className='services_cards active'>
            <div className='services_card_image'>
              <Image src={card1} className="services_card_img" alt="services-img" fluid/>
            </div>
            <div className='services_card_body'>
              <h3 className='services_cards_h3'>Our Anywhere & Anytime</h3>
              <p className='services_cards_p'>Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex, ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel sapien magna. Morbi eleifend ligula nunc, non elementum sem scelerisque a. </p>
              <a href='/services' className='services_card_link'>More Services <FiArrowRight className="services_card_icon"/> </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4}>
            <div className='services_cards'>
            <div className='services_card_image'>
              <Image src={card2} className="services_card_img" alt="services-img" fluid/>
            </div>
            <div className='services_card_body'>
              <h3 className='services_cards_h3'>Our Anywhere & Anytime</h3>
              <p className='services_cards_p'>Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex, ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel sapien magna. Morbi eleifend ligula nunc, non elementum sem scelerisque a. </p>
              <a href='/services' className='services_card_link'>More Services <FiArrowRight className="services_card_icon"/> </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4}>
            <div className='services_cards'>
            <div className='services_card_image'>
              <Image src={card3} className="services_card_img" alt="services-img" fluid/>
            </div>
            <div className='services_card_body'>
              <h3 className='services_cards_h3'>Our Anywhere & Anytime</h3>
              <p className='services_cards_p'>Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex, ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel sapien magna. Morbi eleifend ligula nunc, non elementum sem scelerisque a. </p>
              <a href='/services' className='services_card_link'>More Services <FiArrowRight className="services_card_icon"/> </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     </section> 
     
    </>
  )
}

export default Services
