import React, { Component } from "react";
import Slider from "react-slick";
import rew1 from '../../image/rew1.png'
import rew2 from '../../image/rew2.png'
import rew3 from '../../image/rew3.png'
import '../../css/style.css'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
           <img src={rew1} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew2} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew3} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew1} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew2} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew3} alt="" className='sliderImg'/>
          </div>
          <div>
          <img src={rew1} alt="" className='sliderImg'/>
          </div>
         
        </Slider>
      </div>
    );
  }
}