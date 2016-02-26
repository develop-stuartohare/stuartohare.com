import React from 'react';
import Component from '../../lib/component';
import Navigation from '../../components/navigation';
import AboutMe from '../about-me/about-me';

import './app.less';


class App extends Component {

	render(){		
			
		return (			
			<div className="application">	
				<Navigation className="nav-header"/>					
				<AboutMe/>		
				<Navigation className="nav-footer"/>						
			</div>						
		);
	}	

}

export default App;
				

 			          