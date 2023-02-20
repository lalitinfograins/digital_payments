import React, {useEffect} from 'react'
import Counts from './counts'
import GetReady from './GetReady'
import Hero from './Hero'
import InvoiceControl from './InvoiceControl'
import Services from './Services'
import OwlCarousel from './OwlCarousel'


const Home = (props) => {
  useEffect(() => {
    props.demo("root")
  }, []);
  
  return (
    <>
      <Hero/>
      <Counts/>
      <Services/>
      <InvoiceControl/>
      <OwlCarousel/>
      <GetReady/>
    </>
  )
}

export default Home
