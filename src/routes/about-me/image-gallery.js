import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../lib/component';
import Image from '../../components/image';
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
	        <h3>Reallyhapykids.com</h3>
	        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	      </div>
	    </CarouselItem>
	    <CarouselItem>
	      <img  alt="900x500" src="www/images/kineo_100.png"/>
	      <div className="carousel-caption">
	        <h3>Kineo 100</h3>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	      </div>
	    </CarouselItem>
	    <CarouselItem>
	      <img  alt="900x500" src="www/images/rolls_royce.png"/>
	      <div className="carousel-caption">
	        <h3>Rolls Royce</h3>
	        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
	      </div>
	    </CarouselItem>
	  </Carousel>	
	);
};

export default ImageCarousel;

// import './image-gallery.less';

// const Thumbnail = function(props){

// 	return (
// 		<Col md={6} className="image-gallery-item">
// 			<Image src={props.src} alt={props.alt}/>
// 		</Col>
// 	);
// }

// class ImageGallery extends Component {

// 	render(){
// 		return(
// 			<div className="image-gallery">
// 				<Row className="image-gallery">
// 					<Thumbnail src="www/images/reallyhappykids_thumb.png"/>
// 					<Thumbnail src="www/images/kineo_100_thumb.png"/>					
// 				</Row>
// 				<Row>
// 					<Thumbnail src="www/images/rolls_royce_thumb.png"/>				
// 					<Thumbnail src="www/images/jimstokes_thumb.png"/>															
// 				</Row>
// 				<Row>
// 					<Thumbnail src="www/images/burberry_thumb.png"/>
// 				</Row>
// 			</div>
// 		);
// 	}
// }

// export default ImageGallery
