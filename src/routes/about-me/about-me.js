import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Component from '../../lib/component';
import Route from '../../lib/route';
import Circles from '../../components/circles';
import Circles2 from '../../components/circles2';
import Image from '../../components/image';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import './about-me.less';


// const Text = function(props){

// 	return (					
// 		<Component className="slide-up-in" inView>
// 			<p>
// 				I am an experienced software developer with over 8 years industry experience and a Masters in Internet and Networking Systems. I specialise in developing bespoke web applications, working with web technologies to deliver sophisticated, interactive and feature-rich websites.
// 			</p>                            
// 			<p>
// 				I have worked on a wide array of projects, from traditional websites to games to interactive e-learning courses, targeting a range of platforms, including smartphones and tablets.
// 				I have developed computer games for AAA games consoles and Xbox Kinect, iPad/iPhone Apps for corporate conferences, bespoke Webex-style conferencing tools and web-based instant messengers, chatrooms and forums.
// 			</p>
// 			<p>
// 				I have worked with a diverserse selection of clients, including: Lloyds Banking Group, Burberry, Deutcshe Bank, the Civil Service, the British Medical Association, Disney and Barclays Bank.
// 			</p>
// 		</Component>			
// 	);	
// }

class MoreDropDown extends Component{

	constructor(){
		super();

		this.state = {
			isOpen: false
		}
	}

	onClickMore(event){
		event.preventDefault();

		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	renderContent(){
		if(!this.state.isOpen) return "";

		return (
			<Component className="more-drop-down-content expand-in" inView>{this.props.children}</Component>
		);
	}

	render(){

		var glyph = this.state.isOpen ? "chevron-up" : "chevron-down";

		return (
			<Component className="more-container">
				<a href="#" className="more-label" onClick={this.onClickMore.bind(this)}>
					{this.props.label || "more "}
					<Glyphicon glyph={glyph}/>
				</a>
				{this.renderContent()}
			</Component>			
		);
	}
}
const Mast = function(props){

	return(
		<Component className="mast text-center scale-up scale-up-delay" inView>
			<Glyphicon glyph={props.glyph}/>
		</Component>
	);
}

const AboutMeIntro = function(props){

	return (					
		<Component className="slide-up-in" inView>	
			<Mast glyph="signal"/>	
			<h3 className="header">About Me</h3>                          
			<p>
				I am an experienced software developer with over 9 years industry experience and a Masters in Internet and Networking Systems. I specialise in developing bespoke web applications, working with web technologies to deliver sophisticated, interactive and feature-rich websites.
			</p> 
		</Component>			
	);	
}

const AboutMeExperience = function(props){

	return (					
		<Component className="slide-up-in" inView>			
			<Mast glyph="cog"/>	
			<h3 className="header">Experience</h3>                          
			<p>
				I have worked on a wide array of projects, from websites to games to interactive e-learning courses.
				I have developed iOS Apps for corporate conferences, web-based conferencing and instant messenger tools and computer games for PS2, PS3, Nintendo Wii and Xbox 360.
			</p>	
		</Component>			
	);	
}


const AboutMeClients = function(props){

	return (					
		<Component className="slide-up-in" inView>
			<Mast glyph="paperclip"/>
			<h3 className="header">Clients</h3>	                          
			<p>
				I work with a diverserse selection of clients, from well-known companies to smaller businesses - some more well known companies I have worked with include:
			</p>
			<p className="clients-list">
				 Google, Rolls Royce, <br/> PWC, HSBC Bank, <br/>Burberry, Deutcshe Bank, <br/>The British Medical Association <br/> NCSoft and Disney.
			</p>		
		</Component>			
	);	
}


const AboutMeFrontend = function(props){

	return (					
		<Component className="slide-up-in" inView>
			<Mast glyph="picture"/>
			<h3 className="header">Front End</h3>	                          
			<p>
				I specialise in responsive web applications that acheive the most of modern web browsers and gracefully degrade in legacy browsers. 
				I believe in clean, quick code, responsive and intuitive user interfaces and am passionate about delivering the right user experience.
			</p>	
			<MoreDropDown label="technologies i work with">				
				Javascript, JSON, HTML & HTML5, CSS, Less, jQuery, React, Ember, Backbone, Velocity.js, Google Analytics API, GoogleMaps API, Dropbox API, Adapt,  Webpack, Grunt, Gulp, Broccoli.js, Doxygen, NaturalDocs, Testem, Jasmine, Mocha.				
			</MoreDropDown>
		</Component>			
	);	
}


const AboutMeBackend = function(props){

	return (					
		<Component className="slide-up-in" inView>
			<Mast glyph="wrench"/>
			<h3 className="header">Server-side</h3>	                          
			<p>
				Working with an array of technologies, I build sturdy, stay-up, well tested server applications - ensuring data is always retrieved and delivered efficiently to the end user.
			</p>	
			<MoreDropDown label="technologies i work with">				
				Node, PHP, Express.js, Sails js, SQL, MongoDB, Wordpress , Code Igniter, Zend, Dropbox API, Moodle LMS, Totara LMS.				
			</MoreDropDown>			
		</Component>			
	);	
}


class AboutMeRoute extends Route {


	render(){		
		
		return (						
			<div className="about-me" id={this.props.id}>
				<div className="section">	
					<Circles/>	
				</div>																												
				<Grid className="section">								
					<Row>
						<Col lg={6} md={6} className="about-me-item">
							<AboutMeIntro/>
						</Col>
						<Col lg={6} md={6} className="about-me-item">
							<AboutMeExperience/>
						</Col>											
					</Row>												
				</Grid>	
				<Grid className="section">								
					<Row>
						<Col lg={3}/>
						<Col lg={6}className="about-me-item">
							<AboutMeClients/>
						</Col>		
						<Col lg={3}/>										
					</Row>												
				</Grid>								
				<Grid className="section">	
					<Row>
						<Col lg={6} md={6} className="about-me-item">
							<AboutMeFrontend/>
						</Col>
						<Col lg={6} md={6} className="about-me-item">
							<AboutMeBackend/>
						</Col>															
					</Row>						
				</Grid>	
				<div className="section">	
					<Circles2/>	
				</div>																					
			</div>				
		);
	}
}
	

export default AboutMeRoute;







// var images = [
// 	"www/images/portfolio/disney/disney-logo.png",
// 	"www/images/portfolio/civilservice/civilservice-logo.png",
// 	"www/images/portfolio/deutschebank/deutsche-bank-logo.png",
// 	"www/images/portfolio/bma/bma.png",
// 	"www/images/portfolio/burberry/burberry-logo.png",
// 	"www/images/portfolio/lloyds/lloyds_banking_group1.png",
// 	"www/images/portfolio/barclays/barclays-logo.png",
// 	"www/images/portfolio/pwc/pwc-logo.png"
// ];

// const Images = function(prop){


// 	return (					
// 		<Row className="slide-up-in" inView>
// 			{images.map((image, idx)=>{
// 				return (
// 					<Col className="clients-image" key={idx}>
// 						<Image src={image} alt=""/>
// 					</Col>
// 				);
// 			})}
// 		</Row>				
// 	);	
// }

