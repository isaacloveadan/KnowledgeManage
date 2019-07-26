import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import UseState from './API/UseState';
import UseEffect from './API/UseEffect';
import UseContext from './API/UseContext';
import UseReducer from './API/UseReducer';
import UseCallback from './API/UseCallBack';
import UseMemo from './API/UseMemo';
import UseRef from './API/UseRef';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <div>
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/useState">UseState</a></li>
            <li><a href="#/useEffect">UseEffect</a></li>
            <li><a href="#/useContext">UseContext</a></li>
            <li><a href="#/useReducer">UseReducer</a></li>
            <li><a href="#/useCallback">UseCallback</a></li>
            <li><a href="#/useMemo">UseMemo</a></li>
            <li><a href="#/useRef">UseRef</a></li>
        </ul>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/useState" component={UseState}></Route>
                <Route exact path="/useEffect" component={UseEffect}></Route>
                <Route exact path="/useContext" component={UseContext}></Route>
                <Route exact path="/useReducer" component={UseReducer}></Route>
                <Route exact path="/useCallback" component={UseCallback}></Route>
                <Route exact path="/useMemo" component={UseMemo}></Route>
                <Route exact path="/useRef" component={UseRef}></Route>
            </Switch>
        </HashRouter>
    </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();