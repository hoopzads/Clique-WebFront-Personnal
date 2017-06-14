import React , { Component } from 'react';
import Calendar from '../components/calendar';

import pages from '../hoc/pages';
import normalPage from '../hoc/normPage';

class calendarPage extends Component {
    render() {
        return (
            <section role="main-content" onClick={this.onClickMe}>
                <Calendar />
            </section>
        );
    }
}

export default normalPage(pages(calendarPage, true));
