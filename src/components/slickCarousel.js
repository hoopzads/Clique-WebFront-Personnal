/* eslint-disable */

import React, { Component } from 'react';
import $ from 'jquery';
import '../../public/resource/slick-1.6.0/slick/slick.min.js';

class slickCarousel extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        $(".single-item").slick({
        	dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            draggable: true,
            autoplay: true,
            mobileFirst: true,
            autoplaySpeed: 2000,
            centerPadding: '60px',
            variableWidth: true,
            speed: 300,
            centerMode: true,
            variableWidth: true,
            arrows: false
        });
    }

    render() {
        return (
            <div>
                <div className='myContainer'>
                    <div className='single-item'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default slickCarousel;
