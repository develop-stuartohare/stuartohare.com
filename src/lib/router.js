import React from 'react';
import Component from './component';
import Route from './route';

// import { createHistory, useBasename } from 'history'
import createHistory from 'history/lib/createHashHistory'
const history = createHistory();

// const history = useBasename(createHistory)({
//   basename: '/new_stuartohare.com/dev/public/'
// })


class Router extends Component {

	static propTypes = {										
		routes: React.PropTypes.object.isRequired
	};

	static events = {
		"onRoute": "onRoute",
	};

	static childContextTypes = {
		location: React.PropTypes.string,
		routes: React.PropTypes.object
	};

	getChildContext() {
		return {
			location: this.state.currentLocation,
			routes: this.props.routes
		};
	}


	constructor(props){
		super(props);

		this.state = {
			currentLocation: null,
			previousLocation: null
		}		
	}

	componentDidMount(){
		super.componentDidMount();
		var index = this.props.routes.indexRoute.id;
		this.transition(null, index);		
	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.currentLocation !== this.state.currentLocation) this.updateUrl();
	}

	updateUrl(){
		var path = "/";
		for(var i=0,route;route=this.props.routes.childRoutes[i];i++){				
			if(route.id === this.state.currentLocation){
				path = route.path;
				break;
			}
		}
		history.push({pathname: path});		
	}

	onRoute(path){

		if(path === this.state.currentLocation) return;

		this.transition(this.state.currentLocation, path);			
	}

	transition(from, to){
		
		var enter = function(){			
			this.trigger('enterRoute', to);

			this.setState({
				previousLocation: from,
				currentLocation: to
			});				
		}.bind(this);

		if(typeof from === 'string' && typeof to ==='string' ) this.trigger('exitRoute', from, enter);		
		else enter();		
	}		

	renderChildRoute(route, idx){

		var Component = route.component;
				
		return <Component {...route} key={route.id} />					
	}

	render(){

		var App = this.props.routes.component;
		var appChildRoutes = this.props.routes.childRoutes;

		return (
			<div className="router">
				<App>
					{appChildRoutes.map(this.renderChildRoute)}
				</App>
			</div>			
		);

	}
}

export default Router;