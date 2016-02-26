import React from 'react';
import Component from '../../lib/component';
import ClassNames from 'classnames';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Link from '../../lib/link';


import './navigation.less';


class NavigationItem extends Component {

    static propTypes = {        
        path: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,                   
    };  

    render() {
                                        
        return (                      
            <Link to={this.props.id} className="navigation-item">       
                <span className="navigation-label">{this.props.label}</span>
                <div className="underline-container">
                    <div className="underline"/>
                </div>
            </Link>              
        )
    }
}


const NavigationItems = function(){
                                        
    return (                      
        <ul className="navigation-items"></ul>             
    )    
}




class Navigation extends Component {

    static contextTypes = {
        routes: React.PropTypes.object
    };      

    render() {

        var className = ClassNames("navigation", this.props.className);
        
        return (          
        <Component className="fade-in" inView>
            <Navbar className={className}>
                <Navbar.Header>
                    <Navbar.Brand>                                
                        <span className="header">stuartohare.com</span>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight eventKey={0}>               
                        <NavItem eventKey={1} href="mailto:develop@stuartohare.com"><Glyphicon glyph="envelope"/></NavItem>  
                        <NavItem eventKey={2} href="https://github.com/develop-stuartohare" taregt="_blank"><Glyphicon glyph="ico-github4"/></NavItem>                                                                            
                    </Nav>           
                </Navbar.Collapse>                  
            </Navbar> 
        </Component>            
        )
    }

}

export default Navigation;

                        // {this.context.routes.childRoutes.map((route, idx)=>{
                            
                        //     return <NavigationItem key={idx} {...route}/>
                        // })}