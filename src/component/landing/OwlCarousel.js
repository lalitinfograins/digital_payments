
import { Container , Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { ImQuotesRight } from 'react-icons/im';
import image1 from "../../assets/images/component/landing/slider-1.png";
import image2 from "../../assets/images/component/landing/slider-2.png";
import image3 from "../../assets/images/component/landing/slider-3.png";
import image4 from "../../assets/images/component/landing/slider-4.png";
import React from "react";
import Slider from "react-slick";

const OwlCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1202,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
    return (
        <>  
               <section className='slider_section'>
               <div className='slider_title'>
                <h2 className='slider_h2 '>What <span className='slider_span'>People Saying</span> Are About Us</h2>
                </div>
            <Container>
        <Slider {...settings}>
        <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image1} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Henri Morella</h4>
                            <p className='slider_text'>CEO</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image2} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Dekassyah</h4>
                            <p className='slider_text'>Maneger</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image3} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Dyas Cardinal</h4>
                            <p className='slider_text'>Web Developer</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image4} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Payad Assam</h4>
                            <p className='slider_text'>PHP Developer</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image1} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Henri Morella</h4>
                            <p className='slider_text'>CEO</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image2} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Dekassyah</h4>
                            <p className='slider_text'>Maneger</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image3} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Dyas Cardinal</h4>
                            <p className='slider_text'>Web Developer</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
                            <div className="card_body" >
                            <div className='slider_icons_star'><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/><FaStar className="slider-star"/></div>
                           <h5 className='slider_quote'>Quisque vehicula libero quis enim congue, non rutrum leo auctor. Morbi iaculis nunc a odio finibus, vel tristique est euismod. Phasellus..</h5>
                           <div className='slider_bio'>
                           <Image className="slider_img" alt="slider-image" src={image4} fluid/>
                           <div className='slider_content'>
                            <h4 className='slider_name'>Payad Assam</h4>
                            <p className='slider_text'>PHP Developer</p>
                           </div>
                           <div className='slider_icon'><ImQuotesRight className="slider_icon_quote"/></div>
                           </div>
                            </div>
        </Slider>
        </Container>
        </section>
        </>
    )
}

export default OwlCarousel;