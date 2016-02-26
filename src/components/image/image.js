import React from 'react';
import ClassName from 'classnames';
import Component from '../../lib/component';
import _ from 'underscore';
import './image.less';

class Image extends Component {

	static propTypes = {										
		src: React.PropTypes.string.isRequired,
		alt : React.PropTypes.string
	};	

	render(){

		var props = _.omit(this.props, 'src','alt');
		props.className =ClassName('image', props.className);

		return (
			<div {...props}>
				<img src={this.props.src} alt={this.props.alt}/>
				{this.props.children}
			</div>
		);
	}


}

export default Image