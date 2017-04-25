/* eslint-disable */

import React , { Component } from 'react';
import EventItem from '../container/eventItem';
import CardList from '../components/cardList';
import SlickCarousel from '../components/slickCarousel';
import CircleList from '../components/circleList';
import ChannelList from '../components/channelList';

import pages from '../hoc/pages';
import normalPage from '../hoc/normPage';

class homePage extends Component {

    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
        this.onItemPopUpClick = this.onItemPopUpClick.bind(this);
    }

    onClickMe() {
        // this.props.searched_item_handler(true);
    }

    onItemPopUpClick(item) {
        if(this.props.pages.pop_up_item === null) this.props.set_pop_up_item(item);
        this.props.toggle_pop_item();
    }

    render() {

        //Note: if EventDetail is shown, side-menu should not be pressed -> drastic layout change

        let posterTest = [];
        for(var i = 1; i < 32; i++) {
            posterTest.push(`../../resource/images/poster_dummy/${i}.jpg`);
        }

        return (
            <section role="tag-content" onClick={this.onClickMe}>


                <div className="below-carousel">
                        <article className="tag-head basic-card">
                            <p> <h2>TAG NAME</h2></p>
                        </article>
                            <section content="event-list">
                            <EventItem posterSrc={posterTest[4]} detail-shown="true" />
                            <EventItem posterSrc={posterTest[5]} detail-shown="true" />
                            <EventItem posterSrc={posterTest[6]} detail-shown="true" />
                            <EventItem posterSrc={posterTest[7]} detail-shown="true" />
                            <EventItem posterSrc={posterTest[6]} detail-shown="true" />
                            <EventItem posterSrc={posterTest[7]} detail-shown="true" />
                            </section>
                </div>
            </section>
        );
    }
}


export default normalPage(pages(homePage, true));
