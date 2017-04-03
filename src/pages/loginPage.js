import React, { Component } from 'react';
import autoBind from '../hoc/autoBind';

import './css/login.css';

class loginPage extends Component {

    onFetch() {
        this.props.fbGetBasicInfo();
        this.props.fbGetFriendsList();
    }

    onLogin() {
        this.props.fbLogin(this.props.fbGetSeverToken);
        this.props.fbGetBasicInfo();
    }

    onLogout() {
        this.props.fbLogout();
    }

    render() {
        const Button = (this.props.fb.isLogin) ? <button onClick={this.onLogout.bind(this)}>Logout</button> : <button onClick={this.onLogin.bind(this)}>Login with facebook</button>;
        const Fetch = (this.props.fb.isLogin) ? <button onClick={this.onFetch.bind(this)}>Fetch</button> : null
        return (
            <section>
                <atricle className="basic-card-no-glow login-card">
                    {Button}
                    {Fetch}
                    <h2>Basic Info</h2>
                    <div>
                        {this.props.fb.basic_info.name}<br />
                        {this.props.fb.basic_info.id}<br />
                        {this.props.fb.basic_info.email}
                    </div>
                </atricle>
            </section>
        )
    }
}

export default autoBind(loginPage, true);
