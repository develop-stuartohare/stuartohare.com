import React from 'react';
import ClassName from 'classnames';
import Component from '../../lib/component';

import './row.less';

class Row extends Component {

	render(){
		var className = ClassName('row', 'clearfix', this.props.className);

		return (
			<div {...this.props} className={className}>
				{this.props.children}
			</div>
		);		
	}

}

export default Row