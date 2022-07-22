import React, { useState } from "react";
import ReactDOM from "react-dom";

import FooterComponent from "./Footer/Footer";

import { GlobalStyle } from "./_App";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <FooterComponent></FooterComponent>
            </>
        );
    }
}
