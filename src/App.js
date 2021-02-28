import { Route, Redirect } from "wouter";
// import withRouter from "react-router-dom";
import React, {Component} from 'react'
import { createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';
import './App.css';
import DashboardScreen from "./screens/dashboard";
import ReturnScreen from "./screens/return";
import FirstScreen from "./screens/first";
import ChooseBreathScreen from "./screens/chooseBreath";
import BreathScreen from "./screens/breath";
import EndScreen from "./screens/end";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command:{
                action:{
                    payload:{

                    }
                }
            }
        };
        this.redirect = false;

        const state = [];
        const recoveryState = [];
        const initialize = (getState, getRecoveryState) => {
            if (process.env.NODE_ENV === 'development') {
                return createSmartappDebugger({
                    token: process.env.REACT_APP_TOKEN ?? "",
                    initPhrase: process.env.REACT_APP_SMARTAPP ?? "",
                    getState,
                    getRecoveryState,
                });
            }else if(process.env.NODE_ENV === 'production'){
                window.cypress = 1;
                if (window.cypress) {
                    window.appInitialData = [];
                }
                return createAssistant({ getState, getRecoveryState });
            }
        };
        const assistant = initialize(() => state, () => recoveryState);
        assistant.on('start', () => {
            assistant.on('data', (command) => {
                if (command.action && command.action.type === 'CHANGE_PAGE'){
                    if(command.action.payload.action === 'exit') {
                        assistant.close()
                    }
                    this.setState({command: command});
                    this.redirect = true;
                    console.log(command);
                }
            });
        });
        this.handleOnClick = (action) => {
            assistant.sendData({ action: { action_id: action} });
        };
    };
    tryExit = () => {
        window.addEventListener('popstate', () => {
            window.history.pushState(null, null, document.URL);
            this.handleOnClick('tryExit');
        });
    };
    componentDidMount() {
        this.tryExit();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.command.action.payload.action !== 'first'){
            window.history.pushState(null, null, this.state.command.action.payload.action);
        }
    }



    render() {
        return[
            <div className="App">
                <Route path="/">
                    <FirstScreen handleOnClick={this.handleOnClick}/>
                </Route>
                <Route path="/onboard">
                    <DashboardScreen handleOnClick={this.handleOnClick} onboard={true}/>
                </Route>
                <Route path="/return">
                    <ReturnScreen handleOnClick={this.handleOnClick}/>
                </Route>
                <Route path="/chooseBreath">
                    <ChooseBreathScreen handleOnClick={this.handleOnClick}/>
                </Route>
                <Route path="/breath">
                    <BreathScreen handleOnClick={this.handleOnClick}/>
                </Route>
                <Route path="/end">
                    <EndScreen handleOnClick={this.handleOnClick}/>
                </Route>
                <Route path="/dashboard">
                    <DashboardScreen handleOnClick={this.handleOnClick}/>
                </Route>
                {/*{*/}
                {/*    this.state.command.action.payload.action && (*/}
                {/*        <Redirect to={this.state.command.action.payload.action}/>*/}
                {/*    )*/}
                {/*    // <Redirect to={this.state.command.action.payload.action}/>*/}
                {/*}*/}
            </div>
        ];
    };
}

export default App;
