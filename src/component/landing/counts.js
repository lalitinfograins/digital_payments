import React,{useState} from 'react'
import { Container ,Col, Row , Image} from 'react-bootstrap'
import map from "../../assets/images/component/landing/map2.png";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counts = (props) => {
const [counterOn, setCounterOn] = useState(false)
  return (
    <>
     <section className='counts_section'>
      <Container>
      <Row>
            <Col sm={12} md={12} lg={6}>
              <div className='counts_title'>
                <h1 className='counts_heading'>We Have The <span className='counts_span'>Most Users</span> All Over The World</h1>
                <p className='counts_text'>Morbi sit amet metus et nisl fringilla fringilla sit amet molestie eros. Praesent pretium, velit sit amet molestie elementum.  Ut ac eros blandit, congue lacus ut, interdum odio. In nisi lorem, feugiat eget placerat vel, vehicula in mi.</p>
                <Row>
                <Col sm={6} md={6} lg={6}>
                <div className='counts_clients'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='counts_client_num'>{counterOn && <CountUp start={0} end={98} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='counts_client_h5'>Happy Customers</h5>
                  </div>
                </Col>
                <Col sm={6} md={6} lg={6}>
                <div className='counts_clients'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <h3 className='counts_client_num'>${counterOn && <CountUp start={0} end={249} duration={2} delay={0}/>}M+</h3>
                  </ScrollTrigger>
                  <h5 className='counts_client_h5'>Total Transactions</h5>
                  </div>
                  </Col>
                  </Row>
               </div>
              
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className='counts_image'>
               <Image className="counts_img" src={map} alt="counts-image1" fluid/>
              </div>
            </Col>
          </Row>
      </Container>
     </section> 
    </>
  )
}

export default Counts
