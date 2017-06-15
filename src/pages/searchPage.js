import React, { Component } from 'react';
import '../container/css/eventDetail2.css'
import EventItem from '../container/eventItem';

let isSet = false;
//https://codepen.io/bh/pen/JBlCc

class eventDetailFix extends Component {

    onExit() {
        this.props.onToggle();
    }

    render() {

        let eventName = (
            <div className="event-name">
                <h2>Event Name</h2>
                <div><img alt="channel-icon" /> Channel Name</div>
            </div>
        );

        return (
            <div className="modal-container">
             <EventItem posterSrc={`../../resource/images/poster_dummy/1.jpg`} detail-shown="true" />
            </div>
        );
    }
}

export default eventDetailFix;
