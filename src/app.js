import 'jquery-inview';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app';
import './styles/global.less';


window.scrollTo(0,0);
ReactDOM.render(<App/>, document.getElementById("react-mountpoint"))