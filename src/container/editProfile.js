/* eslint-disable */

import React, { Component } from 'react';
import autoBind from '../hoc/autoBind';
import Circle from '../components/circle';

class editProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'id': '5830001111',
            'birth': '',
            'nickname': '',
            'line': '',
            'email': '',
            'mobile': '',
            'size': '',
            'med': '',
            'food': '',
            'new_id': '5830001111'
            'new_birth': '',
            'new_nickname': '',
            'new_line': '',
            'new_email': '',
            'new_mobile': '',
            'new_size': '',
            'new_med': '',
            'new_food': '',
        }

        this.nextState = {

        }

        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onKeyPressed() {
        const newState = {
            ...this.state,
            new_id: this.refs.id.value,
            new_birth: this.refs.birth.value,
            new_nickname: this.refs.nickname.value,
            new_line: this.refs.line.value,
            new_email: this.refs.email.value,
            new_mobile: this.refs.mobile.value,
            new_size: this.refs.size.value,
            new_med: this.refs.med.value,
            new_food: this.refs.food.value,
        };
        this.setState(newState);
    }

    saveProfile() {
        const newState = {
            ...this.state,
            id: this.refs.id.value,
            birth: this.refs.birth.value,
            nickname: this.refs.nickname.value,
            line: this.refs.line.value,
            email: this.refs.email.value,
            mobile: this.refs.mobile.value,
            size: this.refs.size.value,
            med: this.refs.med.value,
            food: this.refs.food.value,
        };
        this.setState(newState);
    }

    onExit() {
        this.props.toggle_pop_item();
    }

    render() {
        return (
            <div className="modal-container">
                <div className="edit-profile basic-card-no-glow modal-main mar-h-auto mar-v-40">
                    <section className="edit-pro-head">
                        <button role="exit" onClick={this.onExit.bind(this)}>
                            <img src="../../resource/images/X.svg" />
                        </button>
                        <img src="../resource/images/dummyProfile.png" alt="profile-pic" />
                        <div className="profile-head">
                            <h1 alt="profile-name">Mitsuha Atchula</h1>
                            <div alt="faculty-icon" /> <p>Faculty of Engineering</p>
                        </div>
                    </section>
                    <p className="hr"></p>
                    <div className="flex">
                        <section className="edit-pro-left">
                            <img alt="id"/> <input ref="id" type="text" placeholder="Student ID" value={this.state.new_id} onChange={this.onKeyPressed}/>
                            <img alt="birth"/> <input ref="birth" type="text" placeholder="Birthdate" value={this.state.new_birth} onChange={this.onKeyPressed}/>
                            <img alt="nickname"/> <input ref="nickname" type="text" placeholder="Nickname" value={this.state.new_nickname} onChange={this.onKeyPressed}/>
                            <img alt="line"/> <input ref="line" type="text" placeholder="Line ID" value={this.state.new_line} onChange={this.onKeyPressed}/>
                            <img alt="email"/> <input ref="email" type="text" placeholder="Email" value={this.state.new_email} onChange={this.onKeyPressed}/>
                            <img alt="mobile"/> <input ref="mobile" type="text" placeholder="Mobile Number" value={this.state.new_mobile} onChange={this.onKeyPressed}/>
                            <img alt="size"/> <input ref="size" type="text" placeholder="T-Shirt Size" value={this.state.new_size} onChange={this.onKeyPressed}/>
                            <img alt="med"/> <input ref="med" type="text" placeholder="Medical Problem" value={this.state.new_med} onChange={this.onKeyPressed}/>
                            <img alt="food"/> <input ref="food" type="text" placeholder="Food Allergy" value={this.state.new_food} onChange={this.onKeyPressed}/>
                        </section>
                        <p className="sec-line"></p>
                        <section className="edit-pro-right">
                            <div className="fb-link">
                                <img alt="fb-link"/> <p>Mitsu Za-inw</p>
                                <button className="unlink">Unlink</button>
                            </div>
                            <div className="cu-link">
                                <img alt="cu-link"/> <p>5831000020</p>
                                <button className="unlink">Unlink</button>
                            </div>
                            <div className="my-tag">
                                <p>YOUR INTERESTED TAG</p>
                                <section>
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                    <Circle parent="tag" />
                                </section>
                                <div><button>EDIT</button></div>
                            </div>
                            <div className="btn-plane">
                                <button className="cancel" onClick={this.onExit.bind(this)}>CANCEL</button>
                                <button className="save" onClick={this.saveProfile}>SAVE</button>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background-overlay" />
            </div>
        );
    }
}

export default autoBind(editProfile);
