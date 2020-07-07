import * as React from 'react';
import './index.scss';
import Carousel from 'react-bootstrap/Carousel';

const BodyCarousel: React.FC = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/src/assets/promo/carouselPic1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Just random kitty</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/src/assets/promo/carouselPic2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Random Hasselhoff</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="/src/assets/promo/carouselPic3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Random screenshot</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default BodyCarousel;
