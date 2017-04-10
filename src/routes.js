import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="signup" component={LoginPage} />
        <Route path="channel/:id" component={FallbackPage} />
        <Route path="*" component={FallbackPage} />
    </Route>
);

class FallbackPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            'secondsLeft': 5
        };
    }

    componentDidMount() {
        let interval = setInterval(() => {
            if(this.state.secondsLeft === 0) {
                clearInterval(interval);
                this.context.router.push('/');
            }
            else {
                this.setState({
                    ...(this.state),
                    secondsLeft: (this.state.secondsLeft - 1)
                });
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                This page does not exist. Redirect in {this.state.secondsLeft} seconds
            </div>
        );
    }
}
