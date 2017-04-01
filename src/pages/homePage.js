/* eslint-disable */

import React , { Component } from 'react';
import EventItem from '../container/eventItem';
import CardList from '../components/cardList';
import SlickCarousel from '../components/slickCarousel';
import CircleList from '../components/circleList';
import ChannelList from '../components/channelList';

import pages from '../hoc/pages';

class homePage extends Component {

    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
    }

    onClickMe() {
        // this.props.searched_item_handler(true);
    }

    render() {

        //Note: if EventDetail is shown, side-menu should not be pressed -> drastic layout change

        return (
            <section role="main-content" onClick={this.onClickMe}>
                <h1 className="display-none">Main body</h1>
                <section role="carousel">
                    <h2 className="display-none">Carousel</h2>
                    <SlickCarousel />
                </section>
                <div className="below-carousel">
                    <section content="upcomming">
                        <h2>Upcomming</h2>
                        <CardList />
                    </section>
                    <section content="bottom-half">
                        <section content="tag">
                            <h2>Tag</h2>
                            <CircleList parent="tag" />
                        </section>
                        <section content="new">
                            <h2>New</h2>
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                        </section>
                    </section>
                    <section content="bottom-half">
                        <section content="channel">
                            <h2>Channel</h2>
                            <ChannelList />
                        </section>
                        <section content="for-you">
                            <h2>For you</h2>
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                            <EventItem detail-shown="true" />
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}


export default pages(homePage, true);
