import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ( {title} ) => {
    const onClick= () => {
        console.log("clicked");
        };

  return (
    <header className="header">

        {/*The way of adding css class   <h1 style={headingstyle}></h1> */}
        <h1> {title}</h1>
        <Button 
        onClick={onClick}
        color="blue" 
        text="Add"/>

    </header>)
};


Header.defaultProps = {
    title: "Task Tracker",
};


Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// Css in js
// const headingstyle = { 
//     color: 'red', 
//     backgroundColor:'black'
//  }

export default Header;