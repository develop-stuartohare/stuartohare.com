import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../lib/component';

import './circles.less';

const Circle = function(props){
	return (		
		<div className="circle">
			<div className="line"/>
			{props.children}		
		</div>					
	)	
}

const Circles = function(props){

	return(
		<Component className="circles"  inView>				
			<Circle>
				<Circle>
					<Circle>
						<Circle>																							
						</Circle>																								
					</Circle>					
				</Circle>					
			</Circle>
		</Component>		
	);
		
}


export default Circles

