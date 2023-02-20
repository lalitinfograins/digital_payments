import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from '../component/aboutpage/AboutUs';
import Blog from '../component/blog/Blog';
import Footer from '../component/common/Footer';
import Header from '../component/common/Header';
import ContactUs from '../component/contactpage/ContactUs';
import Home from '../component/landing/Home';
const Index = () => {
    useEffect(() => {
        scrollSmoothTo("root");
        }, []);
        function scrollSmoothTo(elementId) {
          var element = document.getElementById(elementId);
          element.scrollIntoView({block: "start", behavior: "smooth"});
        };
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home demo={scrollSmoothTo}/>}/>
        <Route exact path="/about" element={<AboutUs demo={scrollSmoothTo}/>}/>
        <Route exact path="/blog" element={<Blog demo={scrollSmoothTo}/>}/>
        <Route exact path="/contact" element={<ContactUs demo={scrollSmoothTo}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Index
