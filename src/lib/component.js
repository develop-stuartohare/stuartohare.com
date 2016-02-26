import React from 'react';
import ReactDOM from 'react-dom';
import EventManager from '../lib/event-manager';
import RSVP from 'rsvp';

const Promise = RSVP.Promise;



class Component extends React.Component {


	constructor(props){

		super(props);									
		this.initialiseEvents();		

		this.state = {};
	}

	componentDidMount(){
		this.$el = $(this.findDOMNode(this));

		if(this.props.inView){

			this.$el.attr('inview', false);
			this.$el.on('inview', (event, inView)=>{	
				
				if(!this._hasBeenInView) this.$el.attr('inview', inView);
				this._hasBeenInView = true;								
			});				
		}
		if(this.props.onInView) {
			
			this.$el.on('inview', (event, inView)=>{					
				if(!this._hasBeenInView) this.props.onInView(event, inView, this._hasBeenInView || false);
				this._hasBeenInView = true;
			});		
		}
	}

	findDOMNode(ref){
		return ReactDOM.findDOMNode(ref);
	}	

	$(query){
		return this.$el.find(query);
	}

	trigger(){
		
		this.em.emit.apply(this.em, arguments);
	}

	initialiseEvents(){

		this.em = EventManager;	

		var events = this.constructor.events;					

		for(var event in events){
			if(typeof this[events[event]] === "function"){					
				this.em.on(event, this[events[event]].bind(this))
			}			
		}
	}

	render(){

		return <div {...this.props}>{this.props.children}</div>
	}

}

export default Component;