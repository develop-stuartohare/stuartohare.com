import React from 'react';
import Component from './component';
import _ from 'underscore';

class Route extends Component {

	static events = {
		"enterRoute": '_onRouteEnter',
		"exitRoute": '_onRouteExit'
	};

	componentDidMount(){
		super.componentDidMount();

		// this.$el.css({display:'none', opacity: 0});
	}

	_onRouteEnter(path){

		if(path !== this.props.id) return;

		this.onRouteWillEnter(()=>{			
			// this.$el.velocity({opacity:1}, {duration: 400, display:'block', complete: this.onRouteDidEnter.bind(this)});		
			this.$el.velocity('scroll', {duration: 500,  offset:-100, complete: this.onRouteDidEnter.bind(this)})				
		});		
				
	}

	_onRouteExit(path, cb){	

		if(path !== this.props.id) return;

		var callback = function(){			
			this.onRouteDidLeave();	
			cb();		
			// this.$el.velocity({opacity:0}, {duration: 400, display:'none', complete: cb});			
						
		}.bind(this);

		this.onRouteWillLeave(callback);

		
	}	

	onRouteWillEnter(cb){	
		if(cb) cb();
	}

	onRouteDidEnter(){				
	}

	onRouteWillLeave(cb){	
		if(cb) cb();		
	}

	onRouteDidLeave(){
				
	}

	render(){				
		return <Component {...this.props}/>
	}
}

export default Route;