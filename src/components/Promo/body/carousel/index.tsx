import * as React from 'react';
import './index.scss';
import Carousel from 'react-bootstrap/Carousel';

const BodyCarousel: React.FC = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg"
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
          src="https://miro.medium.com/max/975/1*OHf_jiSmv0r363mUeIFAaA.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rikroll</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://sun9-72.userapi.com/c855320/v855320927/244843/PFJQrFAkjN0.jpg"
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
