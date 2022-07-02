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
        <Container>
          <Img src={pic1} />
        </Container>
        <Container>
          <Img src={pic2} />
        </Container>
        <Container>
          <Img src={pic3} />
        </Container>

        <Container>
          <Img src={pic5} />
        </Container>
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

const Container = styled.div`
  height: 70vh;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  background-size: cover;
  object-fit: cover;
  filter: ${({ theme }) => theme.filter};
  transition: all 0.3s linear;
`;
