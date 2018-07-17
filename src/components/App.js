import React, { Component } from 'react';

import Footer from "./footer";
import Header from "./header";


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Praveen"
        };
    }

    render() {
        setTimeout(() =>{
            this.setState({
                name: "Praveen Singh"
            });
        },1000);
       return (
       <div className="appContainer">
            <Header/>
            <h1>{this.state.name} Word Letter Focus</h1>
            <Footer/>
        </div>
        );
    }
}