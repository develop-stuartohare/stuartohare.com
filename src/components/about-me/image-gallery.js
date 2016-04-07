import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../lib/component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

import './image-gallery.less';

const ImageCarousel = function(){
	return (	
	  <Carousel className="image-carousel">
	    <CarouselItem>
	      <img alt="900x500" src="www/images/reallyhappykids.png"/>
	      <div className="carousel-caption">
	        <h3>Reallyhappykids.com</h3>	        
	      </div>
	    </CarouselItem>
	    <CarouselItem>
	      <img  alt="900x500" src="www/images/kineo_100.png"/>
	      <div className="carousel-caption">
	        <h3>Kineo 100</h3>	        
	      </div>
	    </CarouselItem>
	    <CarouselItem>
	      <img  alt="900x500" src="www/images/rolls_royce.png"/>
	      <div className="carousel-caption">
	        <h3>Rolls Royce</h3>
	      </div>
	    </CarouselItem>
	  </Carousel>	
	);
};

export default ImageCarousel;

