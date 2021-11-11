/*

Redux

01) Redux is a standalone tiny library for managing state in your application.

02) It's a predictable state container for JavaScript apps.

03) React is for View/JSX layer, Redux is for Manage Data/State

04) There are 5 main concept in Redux:
    01) Store
        01) Hold all data or state
        02) It will be only one
        03) It will be created by Redux.createStore()
        04) It will be passed to Provider
        05) Store is plain JavaScript object

    02) Reducer 
        01 Function to change state
        02 It will be passed to Store.subscribe()
        03) Helper function to store data
        04) It can be one or more
        05) We can bind many reducers to one reducer
        06) It is compolsury to make a Reducer function to create a store
        07) A function which takes state and action and returns new state
        08) Reducer is a function which return a object
        09) Reducer have to be a pure function
        10) First we have to create reducer function than store

    03) Action 
        01) Object to change state
        02) Action have to created before reducer

    04) Subscriber - Function to listen state change
        01) It will be passed to Store.subscribe()
        02) It will be called every time when state is changed

    05) Dispatch 
    
05) Installing Redux
    01) npm i -D redux 
    
06) Creating a Store
    01) import { createStore } from 'redux'
    02) const store = createStore(reducer)

07) Recap
    01) Create a reducer | Can't create store without reducer
    02) Create a store with help of reducer
    03) Subscribe to different Component
    04) Dispatch action to change state

08) Reducer function will take 2 arguments by default (state, action)

09) Store can be initial value or empty object | state = {} || state = 0 || state = {count: 0}

10) Subscribe is the component who want to access store

11) Action must be an object & type have to be included. Than we can use payload to pass data & more than that we can use other properties

12) Reducer return either new state or old state

13) Subscriber can be multiple


React Redux

01) React Redux is a combination of React and Redux

02) Install React Redux
    npm i -D react-redux

03) React Redux is a bridge between React and Redux
04) React & Redux state are not same
05) React state means react component state
06) Redux state means application/store state
07) React > React-Redux < Redux
08) Redux files must be the on the top of the application or top parent of React application
10) Provider is a Higher Order Component

05) Provider - Component to pass store to React



React React-Redux Redux

01) React
    01) Parent Component for Provider
    02) Child Component for JSX & Data & Action

02) React-Redux 
    01) Provider
    02) Connect

03) Redux 
    01) Store
    02) Reducer
    03) Action



*/