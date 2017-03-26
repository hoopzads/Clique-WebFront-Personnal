import React, { Component } from 'react';
import SearchBox from '../components/searchBox';

class topNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'searchTerm': '',
            'isFadeIn': false
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    onWindowResize() {
        let _this = this;
        if($(window).width() > 768) {
            if($(".content-move-active").length) {
                $(".content-move-active").removeClass("content-move-active").addClass("content-move-inactive");
            }
            if(_this.state.isFadeIn) {
                _this.setState({
                    ...(_this.state),
                    'isFadeIn': !_this.state.isFadeIn
                });
                $('.search-box-container').fadeToggle(200);
            }
        } else {
            if($('.profile-menu-active').length) $('.profile-menu-active').removeClass('profile-menu-active').addClass('profile-menu-inactive');
            if($('.tags-menu-active').length) $('.tags-menu-active').removeClass('tags-menu-active').addClass('tags-menu-inactive');
        }
    }

    componentDidMount() {

        window.addEventListener("resize", this.onWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize);
    }

    onSearchClick() {
        //Should called action creator
        this.setState({
            ...(this.state),
            'isFadeIn': !this.state.isFadeIn
        });
        $('.search-box-container').fadeToggle(200);
    }

    onUpdateSearch(select, optional) {
        let term = "";
        if(select === "first") {
            term = this.refs.first.value;
        } else if(typeof(optional) !== "undefined" && optional !== null) {
            term = optional.value;
        }

        this.setState({
            ...(this.state),
            'searchTerm': term
        });
    }

    onButtonToggle() {
        if($(".content-move-inactive").length) {
            $(".content-move-inactive").removeClass("content-move-inactive").addClass("content-move-active");
        }
        else {
            $(".content-move-active").removeClass("content-move-active").addClass("content-move-inactive");
        }
    }

    onToggleProfile() {
        if($('.profile-menu-active').length == 0) {
            $('.profile-menu-inactive').removeClass('profile-menu-inactive').addClass('profile-menu-active');
            if($('.tags-menu-active').length) {
                $('.tags-menu-active').removeClass('tags-menu-active').addClass('tags-menu-inactive');
            }
        } else {
            $('.profile-menu-active').removeClass('profile-menu-active').addClass('profile-menu-inactive');
        }
    }

    onToggleTags() {
        if($('.tags-menu-active').length == 0) {
            $('.tags-menu-inactive').removeClass('tags-menu-inactive').addClass('tags-menu-active');
            if($('.profile-menu-active').length) {
                $('.profile-menu-active').removeClass('profile-menu-active').addClass('profile-menu-inactive');
            }
        } else {
            $('.tags-menu-active').removeClass('tags-menu-active').addClass('tags-menu-inactive');
        }
    }

    render() {

        return (
            <nav role="top-nav">
                <button className="outline square-round toggle" onClick={this.onButtonToggle}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <section className="flex-left toggle-not" content="left-group" aria-hidden="true">
                    <button className="invisible" onClick={this.onToggleTags}>
                        <img src="../resource/images/bubble.svg" role="tags-icon" />
                    </button>
                    <div aria-hidden="true" className="vr"></div>
                    <form>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="invisible" type="text" placeholder="Search" ref="first" onChange={() => { this.onUpdateSearch("first"); }} value={this.state.searchTerm}></input>
                    </form>
                </section>
                <img className="flex-center" src="../../resource/images/icon.png" alt="icon" />
                <button className="flex-right toggle-not invisible" role="profile-button" onClick={this.onToggleProfile}>
                    Mitsuha
                    <img src="../../resource/images/dummyProfile.png" />
                </button>
                <button className="flex-right toggle outline square-round" onClick={this.onSearchClick}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                <SearchBox onUpdateSearch={this.onUpdateSearch} searchTerm={this.state.searchTerm} />
                <div className="profile-menu-inactive"></div>
                <div className="tags-menu-inactive"></div>
            </nav>
        );
    }
}

export default topNavBar;
