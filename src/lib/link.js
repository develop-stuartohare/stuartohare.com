import React from 'react';
import Component from './component';
import ClassNames from 'classnames'


class Link extends Component {

	static contextTypes = {
		location: React.PropTypes.string
	};	

	static propTypes = {				
		to: React.PropTypes.string.isRequired						
	};	

	onClick(event){
		event.preventDefault();		
		this.trigger('onRoute', this.props.to);
	}

	render(){

		var isActive = this.props.to === this.context.location;
		var className = ClassNames({active: isActive}, this.props.className);

		return(
			<a href={"#"+this.props.to} className={className} style={this.props.style} onClick={this.onClick.bind(this)}>
				{this.props.children}
			</a>
		);
	}
}

export default Link;