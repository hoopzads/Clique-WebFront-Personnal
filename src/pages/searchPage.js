import React, { Component } from 'react';
import '../container/css/eventDetail2.css'
import './css/searchPage.css'
import EventItem from '../container/eventItem';

let isSet = false;
//https://codepen.io/bh/pen/JBlCc

class searchPage extends Component {

    onExit() {
        this.props.onToggle();
    }

    render() {
        return (

            <div  className="modal-container-search">
                <article className="event-search">
                    <div className="keyword">Keyword</div>
                    <div className="found">found 17 results</div>
                    <div className="event-found">
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="true" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="true" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="true" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="true" />
                        <br />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />
                        <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="false" />


                    </div>
                </article>
                <div className="background-overlay-fix"/>
            </div>

        );
    }
}

export default searchPage;
