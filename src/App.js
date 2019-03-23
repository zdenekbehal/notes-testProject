import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import store from "./store";
import Main from "./containers/Main";
//import "./App.css";
import "./Less/global.less";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
    render() {
        return (
            <div className="body">
                <Main />
            </div>
        );
    }
}

const ConnectedRoot = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default () => (
    <Provider store={store}>
        <ConnectedRoot />
    </Provider>
);
