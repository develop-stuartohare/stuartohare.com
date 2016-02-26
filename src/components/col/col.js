import React from 'react';
import ClassName from 'classnames';
import Component from '../../lib/component';

import './col.less';

class Col extends Component {

	render(){
		var className = ClassName('col', this.props.className);

		return (
			<div {...this.props} className={className}>
				{this.props.children}
			</div>
		);		
	}

}

export default Col