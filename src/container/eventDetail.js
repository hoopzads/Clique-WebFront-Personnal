/* eslint-disable */

import React, { Component } from 'react';
import $ from 'jquery';
import autoBind from '../hoc/autoBind';

class eventDetail extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        $(document).ready(setTimeout(function() {
            if($(window).width() > 768) {
                $('.top-moving').css('height', $('.event-poster').children().height() + 20);
                if($('.event-detail').css('padding-top').replace('px','') > 40) $('.event-detail').css('padding-top', '40px');
                if($('.event-detail').css('padding-left').replace('px','') > 29) $('.event-detail').css('padding-left', '29px');
            }
            else {
                $('.top-moving').css('height', 'initial');
                $('.event-detail').css('padding', '');
            }
        }, 10));

        $(window).resize(function() {
            if($(window).width() > 768) {
                $('.top-moving').css('height', $('.event-poster').children().height() + 20);
                if($('.event-detail').css('padding-top').replace('px','') > 40) $('.event-detail').css('padding-top', '40px');
                if($('.event-detail').css('padding-left').replace('px','') > 29) $('.event-detail').css('padding-left', '29px');
            }
            else {
                $('.top-moving').css('height', 'initial');
                $('.event-detail').css('padding', '');
            }
        })
    }

    onExit() {
        this.props.toggle_pop_item();
    }

    componentWillUnmount() {
        $(window).unbind('resize');
    }

    render() {
        return (
            <div>
                <div className="background-overlay" aria-hidden="true" />
                <article className="event-detail basic-card-no-glow">
                    <button className="invisible square-round" role="event-exit" onClick={this.onExit.bind(this)}>
                        <img src="../../resource/images/X.svg" />
                    </button>
                    <div className="top-moving">
                        <div className="event-name">
                            <h2>Event Name</h2>
                            <div><img alt="channel-icon" /> Channel Name</div>
                        </div>
                        <div className="event-poster" aria-hidden="true">
                            <div>
                                <img src="../../resource/images/poster_dummy/10.jpg" alt="main-poster" />
                                <div className="tags-container"><img alt="tag-icon" /><img alt="tag-icon" /><img alt="tag-icon" /></div>
                            </div>
                        </div>
                        <div className="event-info">
                            <div className="share-interest-join" aria-hidden="true">
                                <div className="float-left"><i className="fa fa-share-square-o" aria-hidden="true"></i> SHARE</div>
                                <div className="to-right" >
                                    <button alt="btn-interest">INTEREST</button>
                                    <button alt="btn-join">JOIN</button>
                                </div>
                            </div>
                            <div className="number-join">
                            <p className="hr"></p>
                            and 250 people join this
                            <p className="hr"></p>
                            </div>
                            <div className="sub-detail">
                                <p className="only-fac"><strong>*</strong> For <strong>Engineering student</strong> only</p>
                                <p><strong>*</strong> 16:00 - 20:00 | 30 - 31 January 2017</p>
                                <p><strong>*</strong> Sala Prakeaw</p>
                                <p className="firstmeet-detail">
                                <strong>FIRST MEET</strong><br />
                                16:00 | 15 JAN 2017<br />
                                Chulachakrabong Bld.<br />
                                <i><b>"Please bring your stident card to firstmeet"</b></i>
                                </p>
                                <p className="regis-detail">
                                <strong>REGISTERATION DURATION</strong><br />
                                1 JAN 2017 - 10 JAN 2017<br />
                                </p>
                            </div>

                        </div>
                    </div>
                    <p className="hr"></p>
                    <div className="event-bio">
                        <h3 className="display-none">Bio</h3>
                        <p>     Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        Event Detail  Event Detail Event Detail Event Detail Event Detail
                        </p>
                    </div>
                </article>
            </div>
        );
    }
}

export default autoBind(eventDetail);
