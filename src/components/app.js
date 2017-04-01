import React, { Component } from 'react';
import TopNavBar from '../container/topNavBar';
import HomePage from '../pages/homePage';
import SideMenu from './sideMenu';

export default class App extends Component {
    render() {
        return (
            <div>
                <SideMenu />
                <div className="content-move-inactive">
                    <HomePage />
                    <TopNavBar />
                </div>
            </div>
        );
    }
}
