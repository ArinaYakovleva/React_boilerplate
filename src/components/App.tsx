import React, { Component } from "react";
import '../styles/App.css';

export interface AppComponentProps {
}
export interface AppComponentState {
    
}

export default class App extends Component<AppComponentProps, AppComponentState> {
    render() {
        return (
            <div>
                <h1>This is React App</h1>
            </div>
        );
    }
}