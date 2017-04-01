# Clique-WebFront-Personnal

This is fontend of CuEventHub project (Working Title)

Before launch please enter the following command

```
npm install
npm start
```

## Things to do

* Add facebook login
    * Either from server or directly from facebook (Using Javascript SDK)
* Add event detail pages
* Add channel detail pages
* Add search result
* Add user login
* Add user profile
* Add axios request with header for credential info
    * Looking into [this video](https://www.youtube.com/watch?v=vALIhhrMct8)

## How to use higher order component
1. Import the modules
    * For pages use pages modules, located in `/src/hoc/pages`
    * For binding to component use modules, located in `/src/hoc/autoBind`
2. There are 4 arguments for using hoc
     1. **Composed component** a component to be composed e.g.
        ```javascript
        import autoBind from '../hoc/autoBind';
        ...
        export default autoBind(Component);
    2. **isBindWithRequests** is a boolean value if the component need to bind with request or not (Default is false)
    3. **actionsAdded** is an array of String contain name of actions to be added, only works if *isBindWithRequests* is set to false
    4. **stateAdded** is an array of String contain name of store property to be added, only works if *isBindWithRequests* is set to false
        ### For Example
        ```javascript
        import autoBind from '../hoc/autoBind';
        ...
        export default autoBind(Component, false, ["getEvent"], ["a_getEventObj"]);
        ```
        **Note** the full name list of actions is the name of exported function in `/src/actions/index`. Full name list of states can be found in `/src/reducers/index`. It is the property of *rootReducer* object.

        #### For example

        ```javascript
        {
            pages: pagesReducer,
            a_getChannelObj: reducer_get_channel,
            ...
        }
        ```
        *a_getChannelObj* will be the string put in arrays in the fourth agrument.

        
