import React, { Component } from 'react';
import autoBind from '../hoc/autoBind';
import EventItem from '../container/eventItem';
import './css/editEvent2.css';
import axios from 'axios';
import { getCookie } from '../actions/common';

class EditEvent extends Component {
    constructor(props) {
        super(props);

        // title,about,video,channel,location,date_start,expire,date_end,picture,picture_large, year_require,faculty_require,tags,forms

        // about, video, location, date_start, date_end, picture, picture_large, year_require, faculty_require, tags, agreement, contact_information,
        // joinable_start_time, joinable_end_time, joinable_amount, time_start, time_end, optional_field, require_field, show, outsider_accessible

        let _this = this;

        axios.get('http://128.199.208.0:1111/event?id=5946245c4b908f001403aba6').then((data) => {
            console.log("get!!!");
            console.log(JSON.stringify(data.data.title))
            _this.state = {
                'name': data.data.title,
                'loc': data.data.location,
                'date': data.data.date_start,
                'detail': data.data.about,
                'new_name': data.data.title,
                'new_loc': data.data.location,
                'new_date': data.data.date_start,
                'new_detail': data.data.about,
            }
        }, (error) => {
            console.log("get event error");
        });

        this.state = {

        }

        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onKeyPressed() {
        const newState = {
            ...this.state,
            new_name: this.refs.name.value,
            new_loc: this.refs.loc.value,
            new_date: this.refs.date.value,
            new_detail: this.refs.detail.vaule,
        };
        this.setState(newState);
    }

    save() {
        const newState = {
            ...this.state,
            name: this.refs.id.value,
            loc: this.refs.birth.value,
            data: this.refs.nickname.value,
            detail: this.refs.line.value,
        };
        this.setState(newState);

        let config = {
            'headers': {
                'Authorization': ('JWT ' + getCookie('fb_sever_token'))
            }
        }

        let responseBody = {
            title: this.state.name,
            about: this.state.detail,
            location: this.state.loc,
            date_start: this.state.date,
        }

        // axios.get('http://128.199.208.0:1111/event?id=5946245c4b908f001403aba6').then((data) => {
        //     console.log("get!!!");
        //     responseBody = data;
        // }, (error) => {
        //     console.log("get event error");
        // });

        axios.put('http://128.199.208.0:1111/event?id=5946245c4b908f001403aba6', responseBody, config).then((response) => {
            console.log("saved!!!");
            return true;
        }, (error) => {
            console.log("save error");
            return false;
        })

        this.props.toggle_pop_item();
    }

    cancel() {
        const newState = {
            ...this.state,
            new_id: this.state.id,
            new_birth: this.state.birth,
            new_nickname: this.state.nickname,
            new_line: this.state.line,
            new_email: this.state.email,
            new_mobile: this.state.mobile,
            new_size: this.state.size,
            new_med: this.state.med,
            new_food: this.state.food,
        };
        this.setState(newState);
        this.props.toggle_pop_item();
    }

    render () {
        return (
            <div>
                <article className="edit-event basic-card-no-glow modal-main">
                    <button className="card-exit invisible square-round" role="event-exit" onClick={this.cancel.bind(this)}>
                        <img src="../../resource/images/X.svg" />
                    </button>
                    <h2>CREATE EVENT / EDIT EVENT</h2>
                    <p className="l1"></p>
                    <div>
                        <EventItem onToggle={() => {}} onSetItem={() => {}} noGlow="true" />
                    </div>
                    <p className="l1"></p>
                    <div className="flex">
                    <div className="w55">
                        <h1>EVENT NAME</h1> <input ref="name" type="text" placeholder="" value={this.state.new_name} onChange={this.onKeyPressed}/>
                        <h1>EVENT LOCATION</h1> <input ref="loc" type="text" placeholder="" value={this.state.new_loc} onChange={this.onKeyPressed}/>
                        <h1>DATE & TIME</h1> <input ref="date" type="text" placeholder="" value={this.state.new_date} onChange={this.onKeyPressed}/>
                    </div>
                    <div>
                        <h1>ADD A POSTER</h1> <button className="fill">UPLOAD</button>
                    </div>
                    </div>
                    <p className="l1"></p>
                    <div>
                        <h1>EVENT DETAIL</h1> <textarea className="detail" ref="detail" type="text" placeholder="" value={this.state.new_detail} onChange={this.onKeyPressed}/>
                        <div className="flex">
                            <div><h1>ADD URL</h1> <button className="fill">URL</button></div>
                            <div><h1>ADD FILE</h1> <button className="fill">FILE</button></div>
                            <div><h1>ADD CONTACT</h1> <button className="fill">CONTACT</button></div>
                        </div>
                    </div>
                    <p className="l1"></p>
                    <div>
                        <h1>TAG</h1>
                        <button className="tag">CAMP</button>
                        <button className="tag">THEATRE</button>
                        <button className="tag">TALK</button>
                        <button className="tag">FIRSTMEET</button>
                        <button className="tag long">RECRUITMENT</button>
                        <button className="tag">MARKET</button>
                        <button className="tag long">VOLUNTEER</button>
                        <button className="tag">CONCERT</button>
                        <button className="tag">FESTIVAL</button>
                        <button className="tag">OPENING</button>
                        <button className="tag">CONTEST</button>
                        <button className="tag">EXHIBITION</button>
                        <button className="tag long">WORKSHOP</button>
                        <button className="tag">RELIGION</button>
                        <p className="l2 ltag"></p>
                        <button className="tag">CHARILY</button>
                        <button className="tag long">ACADEMIC</button>
                        <button className="tag">BUSSINESS</button>
                        <button className="tag">CAREER</button>
                        <button className="tag">SPORT</button>
                        <button className="tag">ARTS</button>
                        <button className="tag long">FOOD&DRINK</button>
                        <button className="tag long">EDUCATION</button>
                        <button className="tag">MUSIC</button>
                        <button className="tag long">TECHNOLOGY</button>
                        <button className="tag">NATURAL</button>
                        <button className="tag">HEALTH</button>
                    </div>
                    <p className="l1"></p>
                    <div>
                        <button className="bl">JOIN UP?</button> Click to start your recuitment.
                    </div>
                    <p className="l1"></p>
                    <div className="add">
                        <h1>ADD FIRSTMEET</h1>
                        <div className="flex">
                            <input ref="loc" type="text" placeholder="LOCATION" value={this.state.loc} onChange={this.onKeyPressed}/>
                            <input ref="loc" type="text" placeholder="DATE" value={this.state.loc} onChange={this.onKeyPressed}/>
                        </div>
                        <textarea ref="loc" type="text" placeholder="ADD DESCRIPTION" value={this.state.loc} onChange={this.onKeyPressed}/>
                        <h1>RECRUITMENT DURATION</h1>
                        <div className="flex">
                            <input ref="loc" type="text" placeholder="STRAT" value={this.state.loc} onChange={this.onKeyPressed}/>
                            <input ref="loc" type="text" placeholder="END" value={this.state.loc} onChange={this.onKeyPressed}/>
                        </div>
                        <h1>ADD FIRSTMEET</h1>
                        <div className="flex">
                            <input ref="loc" type="text" placeholder="" value={this.state.loc} onChange={this.onKeyPressed}/>
                            <button className="fill">CLOSE WHEN FULL</button>
                        </div>

                        <h1>PARTICIPANTS FILTER</h1>
                        <button className="fill tg">ONLY CHULA</button>
                        <input className="list" list="fac" placeholder="FACULTY"/>
                        <datalist id="fac">
                            <option value="ALL"/>
                            <option value="ENGINEERING"/>
                            <option value="ART"/>
                            <option value="SCIENCE"/>
                        </datalist>
                        <input className="list" list="year" placeholder="YEAR"/>
                        <datalist id="year">
                            <option value="ALL"/>
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                            <option value="6"/>
                            <option value="OTHER"/>
                        </datalist>
                    </div>
                    <p className="l2"></p>
                    <div className="check">
                        <h1>REQUIRED INFORMATION</h1>
                        <div className="flex">
                        <div className="w30">
                            <div><input ref="" type="checkbox"/>NAME and SURNAME</div>
                            <div><input ref="" type="checkbox"/>NICKNAME</div>
                            <div><input ref="" type="checkbox"/>STUDENT ID</div>
                            <div><input ref="" type="checkbox"/>FACULTY</div>
                            <div><input ref="" type="checkbox"/>YEAR</div>
                        </div>
                        <div className="w30">
                            <div><input ref="" type="checkbox"/>BIRTHDAY</div>
                            <div><input ref="" type="checkbox"/>FACEBOOK</div>
                            <div><input ref="" type="checkbox"/>LINE ID</div>
                            <div><input ref="" type="checkbox"/>EMAIL</div>
                            <div><input ref="" type="checkbox"/>MOBILE NUMBER</div>
                        </div>
                        <div className="w30">
                            <div><input ref="" type="checkbox"/>T-SHIRT SIZE</div>
                            <div><input ref="" type="checkbox"/>MEDICAL PROBLEM</div>
                            <div><input ref="" type="checkbox"/>FOOD ALLERGIES</div>
                        </div>
                        </div>
                    </div>
                    <p className="l2"></p>
                    <div>
                        <button className="bl">ADD QUESTION</button> Click to create your form.
                    </div>
                    <p className="l1"></p>
                    <div>
                        <div className="flex"> <h1>TELL MORE</h1> <p>This text will show when they finish registeration</p> </div>
                        <textarea className="detail" ref="" type="text" value=""/>
                    </div>
                    <p className="l1"></p>
                    <div className="admin">
                        <h1>ADD EVENT ADMIN</h1>
                        <input ref="" type="text" value=""/>
                        <input ref="" type="text" value=""/>
                        <div className="flex"> <input ref="" type="text" placeholder="FACEBOOK / STUDENT ID" value=""/><button className="fill">+</button> </div>
                    </div>
                    <div>
                        <button className="bt blue">PUBLIC</button>
                        <button className="bt" onClick={this.save.bind(this)}>SAVE</button>
                        <button className="bt" onClick={this.cancel.bind(this)}>CANCLE</button>
                    </div>
                </article>
                <div className="background-overlay"/>
            </div>
        )
    }
}

export default autoBind(EditEvent);
