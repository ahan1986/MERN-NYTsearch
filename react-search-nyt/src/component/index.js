import React from 'react';
import Navbar from './navbar';
import Search from './search';

export default class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
            </div>
        )
    }
}