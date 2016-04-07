import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../lib/component';
import ClassNames from 'classnames';

import './circles.less';


const Circle = function(props){
	return (		
		<div className="circle">			
			{props.children}		
		</div>					
	)	
}

const Circles2 = function(props){

	
	var circles = <Circle/>;
	var count = 7;

	while(count){
		circles = <Circle>{circles}</Circle>
		count--;
	}
	var className = ClassNames("circles2", props.className);

	return (				
		<Component className={className} inView>				
			{circles}																				
		</Component>			
	);
	
}


export default Circles2;