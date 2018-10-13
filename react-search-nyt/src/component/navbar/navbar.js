import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
    render () {
        return (
            <div className='navbar'>
                <div className='title'>New York Times Article Scrubber</div>
                <div className='subtitle'>Search for and annotate articles of interest!</div>
            </div>
        )
    }
}