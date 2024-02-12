import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import {FaInfoCircle } from 'react-icons/fa';
import logofooter from "../../assets/images/component/common/digital-payment-logo.png"
const Footer = () => {
  return (
    <>
     <section className='footer_section'>
     <section className='footer_address_section'>
        <Container>
        <div className='footer_wrap'>
            <Row>
            <Col sm={12} md={6} lg={3} xl={3}>
                <div className='footer_about_wrap'>
                <Image src={logofooter} alt="logo-1" className="logo_footer_img" />
                    <p className='footer_about_p'>Debite is amet metus et nisl fringilla fringilla sit amet molestie eros. Praesent pretium, velit sit amet molestie elementum. Quisque semper ac odio non dignissim. </p>
                </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3}>
                <div className='footer_links_wrap'>
                    <h3 className='footer_heading'>Usefull Links</h3>
                    <ul className='footer_items'>
                        <li><a href='/' className='footer_items_link'><FaInfoCircle className="footer_icon_right"/>About</a></li>
                        <li><a href='/' className='footer_items_link'><FaInfoCircle className="footer_icon_right"/>Services</a></li>
                        <li><a href='/' className='footer_items_link'><FaInfoCircle className="footer_icon_right"/>Card List</a></li>
                        <li><a href='/' className='footer_items_link'><FaInfoCircle className="footer_icon_right"/>FAQ's</a></li>
                    </ul>
                </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3}>
                <div className='footer_address_wrap'>
                <h3 className='footer_heading'>Visit Us</h3>
                <p className='footer_add_p'>99 Roving St., Big City www.awesomesite.com hello@awesomesite.com<br/> +123-234-1234</p>
                </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3}>
                <div className='footer_social_media'>
                <h3 className='footer_heading'>Follow Us :</h3>
                <ul className='footer__social_items'>
                        <li><a href='/' className='footer__social_link'><FiFacebook /></a></li>
                        <li><a href='/' className='footer__social_link'><FiTwitter /></a></li>
                        <li><a href='/' className='footer__social_link'><FiInstagram /></a></li>
                        <li><a href='/' className='footer__social_link'><FiLinkedin /></a></li>
                    </ul>
                </div>
            </Col>
            </Row>
            </div>
        </Container>
        </section>
        <section className='footer_bottom'>
        <Container>
            <p className='footer_bottom_p'>Copyright 2022 © All Right Reserved Design by Rometheme</p>
            </Container>
        </section>
     </section> 
    </>
  )
}

export default Footer
