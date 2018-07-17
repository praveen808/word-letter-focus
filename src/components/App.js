import React, { Component } from 'react';

import Footer from "./footer";
import Header from "./header";


export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            title : "Welcome",
            name: "Praveen"
        };
    }

    changeTitle(title){
        this.setState({title});
    }

    render() {
       return (
       <div className="appContainer">
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            <Footer/>
        </div>
        );
    }
}