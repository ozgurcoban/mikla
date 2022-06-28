import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

import pic1 from '../../assets/img/Hero/1.jpg';
import pic2 from '../../assets/img/Hero/2.jpg';
import pic3 from '../../assets/img/Hero/3.jpg';

import pic5 from '../../assets/img/Hero/5.jpg';

import carousel from './carousel.css';

export default function CarouselComponent() {
  return (
    <Div>
      <Carousel
        className='carousel'
        animationHandler='fade'
        autoPlay
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        swipeable={false}
        showIndicators={false}
        interval={4500}
        transitionTime={2300}
        stopOnHover={false}
      >
        <div className='container'>
          <img className='img' src={pic1} />
        </div>
        <div className='container'>
          <img className='img' src={pic2} />
        </div>
        <div className='container'>
          <img className='img' src={pic3} />
        </div>

        <div className='container'>
          <img className='img' src={pic5} />
        </div>
      </Carousel>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 100%;

  top: 0;
  z-index: -5;
`;
