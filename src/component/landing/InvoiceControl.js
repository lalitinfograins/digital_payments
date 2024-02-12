import React, {useState} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import invoice_control1 from "../../assets/images/component/landing/invoice-control.png";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const InvoiceControl = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <>
       <section className='invoice_control_section'>
        <Container>
          <Row>
          <Col sm={12} md={12} lg={6}>
              <div className='invoice_control_image'>
               <Image className="invoice_control_img" src={invoice_control1} alt="invoice_control-image1" fluid/>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className='invoice_control_title'>
                <h1 className='invoice_control_heading'><span className='invoice_control_span'>Easier</span> & <span className='invoice_control_span'>Hassle-Free</span> Invoice Control</h1>
                <p className='invoice_control_text'>Easier & hassle-free invoice control fringilla fringilla sit amet molestie eros. Praesent pretium, velit sit amet molestie elementum.  Ut ac eros blandit, congue lacus ut, interdum odio. In nisi lorem, feugiat eget placerat vel, vehicula in mi.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='clients_section'>
        <Container>
          <Row>
          <Col sm={6} md={3} lg={3}>
                <div className='clients_content'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='client_num'>{counterOn && <CountUp start={0} end={79} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='client_h5'>Downloads</h5>
                  </div>
                </Col>
                <Col sm={6} md={3} lg={3}>
                <div className='clients_content'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='client_num'>${counterOn && <CountUp start={0} end={249} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='client_h5'>Total Transactions</h5>
                  </div>
                </Col>
                <Col sm={6} md={3} lg={3}>
                <div className='clients_content'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='client_num'>{counterOn && <CountUp start={0} end={29} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='client_h5'>FeedBack</h5>
                  </div>
                </Col>
                <Col sm={6} md={3} lg={3}>
                <div className='clients_content'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='client_num'>{counterOn && <CountUp start={0} end={299} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='client_h5'>Trusted Companies</h5>
                  </div>
                </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default InvoiceControl
