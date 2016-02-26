import AppComponent from './app';
import AppIndex from '../app-index';
import AboutMe from '../about-me';
import Clients from '../clients';
import FrontEnd from '../frontend';
import Serverside from '../server-side';
import Technical from '../technical';

export default {
	path:'/',
	indexRoute: AboutMe,
	component: AppComponent,
	childRoutes: [
		AboutMe,
		Clients, 
		FrontEnd,
		Serverside, 
		Technical, 
	],

}