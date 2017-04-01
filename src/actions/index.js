import { myStore } from '../index';
import * as types from './types';
import axios from 'axios';

const hostname = "http://cueventhub.com:1111/";

export const requestActionList = [
    "getChannel", "getEvent", "searchEvent", "searchChannel",
    "searchEventTag", "searchByDate", "getNewEvent", "getAllEvent",
    "getAllChannel", "requestActionList"
];

export function blur_bg() {
    return ({
        type: types.BLUR_BG,
        payload: true
    })
}

export function unblur_bg() {
    return ({
        type: types.UNBLUR_BG,
        payload: false
    });
}

export function toggle_bg() {
    return ({
        type: types.TOGGLE_BLUR_BG,
        payload: null
    });
}

export function set_pop_up_item(props) {
    return ({
        type: types.SET_ITEM,
        payload: props
    });
}

export function reset_pop_up_item() {
    return ({
        type: types.RESET_ITEM,
        payload: null
    })
}

export function display_pop_item(props) {
    return ({
        type: types.DISPLAY_ITEM,
        payload: props
    });
}

export function hide_pop_item() {
    return ({
        type: types.HIDE_ITEM,
        payload: null
    });
}

export function toggle_pop_item() {
    return ({
        type: types.TOGGLE_ITEM,
        payload: null
    });
}

export function searched_item_handler(props) {
    return ({
        type: types.searched_item,
        payload: props
    });
}

export function selected_event_handler(props) {
    return ({
        type: types.selected_event,
        payload: props
    })
}

export function deselected_event_handler(props) {
    return ({
        type: types.deselected_event,
        payload: null
    })
}

export function forced_fix_bg() {
    return ({
        type: types.FORCED_FIX_BG,
        payload: true
    });
}

export function cancel_fix_bg() {
    return ({
        type: types.CANCEL_FIX_BG,
        payload: false
    });
}

//

function request(url, method, types) {
    let rObj = {
        isRESTFUL : false,
        action : null
    };

    switch (method) {
        case "get":
        case "Get":
        case "post":
        case "Post":
        case "Put":
        case "put":
        case "Delete":
        case "delete":
            rObj.isRESTFUL = true;
            rObj.action = { type: `${types}_PENDING` };
            axios[method](url).then((data) => {
                myStore.dispatch({
                    type: `${types}_FULFILLED`,
                    payload: data
                });
            }).catch((error) => {
                myStore.dispatch({
                    type: `${types}_REJECTED`,
                    payload: error
                })
            })

            break;
        default:
            rObj.isRESTFUL = false;
            rObj.action = {
                type: types
            };
    }
    return rObj;
}

//

export function getEvent(id) {
    const rObj = request(`${hostname}event?id=${id}`, "get", types.GET_EVENT);
    return rObj.action;
}

export function searchEvent(keyword) {
    const rObj = request(`${hostname}event/search?keyword=${keyword}`, "get", types.SEARCH_EVENT_KEYWORD);
    return rObj.action;
}

export function searchChannel(keyword) {
    const rObj = request(`${hostname}listAll`, "get", types.SEARCH_CHANNEL_KEYWORD);
    return rObj.action;
}

export function searchEventTag(tags) {
    //tags is array of string tag
    let searchWord = "";
    tags.map((tag, index) => {
        if(index !== tags.length-1) searchWord += tag + ",";
        else searchWord += tag;
        return null;
    });
    const rObj = request(`${hostname}tags/search?keywords=${searchWord}`, "get", types.SEARCH_EVENT_TAG);
    return rObj.action;
}

export function searchByDate(startDate, endDate) {
    const rObj = request(`${hostname}event/searchbydate?date_start=${startDate}&date_end=${endDate}`, "get", types.SEARCH_BY_DATE);
    return rObj.action;
}

export function getNewEvent(top) {
    let rObj = null;
    if(top !== null && top >= 1) {
        rObj = request(`${hostname}event/new?top=${top}`, "get", types.FETCH_NEW_EVENT);
    }
    else {
        rObj = request(`${hostname}event/new`, "get", types.FETCH_NEW_EVENT);
    }
    return rObj.action;
}

export function getAllEvent() {
    const rObj = request(`${hostname}listAll`, "get", types.FETCH_ALL_EVENTS);
    return rObj.action;
}

export function getAllChannel() {
    const rObj = request(`${hostname}channel/listAll`, "get", types.FETCH_ALL_CHANNELS);
    return rObj.action;
}

export function getChannel(id) {
    axios.get(`${hostname}channel?id=${id}`).then((channel) => {
        var eventsPromiseAsync = [];

        channel.data.events.map((event_id) => {
            var tmp = new Promise((resolve, reject) => {
                axios.get(`${hostname}event?id=${event_id}`).then((data) => {

                    myStore.dispatch({
                        type: `${types.SET_EVENTS_IN_CHANNEL}_FULFILLED`,
                        payload: data
                    });

                    resolve(data);
                }, (error) => {
                    myStore.dispatch({
                        type: `${types.SET_EVENTS_IN_CHANNEL}_REJECTED`,
                        payload: error
                    });
                    reject(error);
                });
            });

            eventsPromiseAsync.push(tmp);
            return null;

        });

        myStore.dispatch({
            type: `${types.GET_CHANNEL}_FULFILLED`,
            payload: channel
        });

        return channel;
    }).catch((error) => {
        myStore.dispatch({
            type: `${types.GET_CHANNEL}_REJECTED`,
            payload: error
        })
    });

    return {
        type: `${types.GET_CHANNEL}_PENDING`
    };
}
