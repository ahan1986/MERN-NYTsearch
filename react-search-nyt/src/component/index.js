import React from 'react';
import Navbar from './navbar';
import Search from './search';
import Saved from './saved';
import Result from './result';

export default class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <Result />
                <Saved />
            </div>
        )
    }
}