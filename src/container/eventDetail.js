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
                        <div className="event-name" aria-hidden="true">
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
                                <div className="float-left"><i className="fa fa-share-square-o" aria-hidden="true"></i> share</div>
                                <div className="to-right" aria-hidden="true">
                                    <button>Interested</button>
                                    <button>Join</button>
                                </div>
                            </div>
                            <p className="hr"></p>
                            and 250 people join this
                            <p className="hr"></p>
                            <ul>
                                <li>* For...</li>
                                <li>30 JAN</li>
                                <li>Sala</li>
                            </ul>
                        </div>
                    </div>
                    <p className="hr"></p>
                    <section role="event-bio">
                        <h3 className="display-none">Bio</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis velit, ullamcorper eu ornare sed, vulputate quis diam. Duis ultrices rutrum sapien, in condimentum nibh sagittis sit amet. Morbi sit amet rhoncus dui, at pharetra nisi. Nunc et
          lacus porttitor, pretium nisl at, sollicitudin velit. Donec felis nisl, consequat vitae egestas vestibulum, egestas non tortor. Cras mattis non sem nec aliquam. Sed dignissim sit amet sapien vitae feugiat. Pellentesque vel luctus ante, quis ornare
          purus. Nulla in arcu sapien. Aenean tempor arcu ac lacinia pellentesque. Quisque vulputate maximus augue, non aliquet ligula gravida in. Donec a leo justo. Integer velit eros, blandit sit amet elit eget, efficitur mollis nulla. Suspendisse tempor
          ligula facilisis scelerisque ullamcorper. Ut vehicula ligula ipsum, cursus condimentum sapien pretium ac.
                    </section>
                </article>
            </div>
        );
    }
}

export default autoBind(eventDetail);
