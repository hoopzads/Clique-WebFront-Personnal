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
        let posterTest = [];
        for(var i = 1; i < 32; i++) {
            posterTest.push(`../../resource/images/poster_dummy/${i}.jpg`);
        }
        return (
            <div>
                <div className='myContainer'>
                    <div className='single-item'>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[10]})`}}>1</div>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[12]})`}}>2</div>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[23]})`}}>3</div>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[16]})`}}>4</div>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[25]})`}}>5</div>
                        <div className="slick-slide-item" style={{backgroundImage: `url(${posterTest[20]})`}}>6</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default slickCarousel;
