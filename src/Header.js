import React, {Component} from 'react';
import Background from './img/office.jpeg';
import './Header.css';

 const myStyles = {
        backgroundImage: `url(${Background})`,
        height: '50vh',
        backgroundSize: 'cover'
 };
class Header extends Component { 
    render(){
        return(
        
            <header style= {myStyles}>
                <h1>{this.props.title}</h1>
                <p>Welcome to my Personal Diary</p>
                <a href="#button">{this.props.button}</a>
            </header>

        );
    }
}
export default Header;
