import React, { Component } from 'react';
import autoBind from '../hoc/autoBind';
import EventItem from '../container/eventItem';
import './css/editEvent2.css';

class EditEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'location': '',
            'date': null,
            'poster': null,
            'detail': '',
            'url': '',
            'file': null,
            'contact': '',
            'tag': [],

        }
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onKeyPressed() {
        const newState = {
            ...this.state,
            name: this.refs.name.value,
            location: this.refs.location.value,
            date: this.refs.date.value
        };
        this.setState(newState);
    }

    render () {
        return (
            <div>
                <article className="edit-event basic-card-no-glow modal-main">
                    <button className="card-exit invisible square-round" role="event-exit" onClick={this.props.toggle_pop_item}>
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
                        <h1>EVENT LOCATION</h1> <input ref="loc" type="text" placeholder="" value={this.state.loc} onChange={this.onKeyPressed}/>
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
                        <button className="bt">SAVE</button>
                        <button className="bt">CANCLE</button>
                    </div>
                </article>
                <div className="background-overlay"/>
            </div>
        )
    }
}

export default autoBind(EditEvent);
