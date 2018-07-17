import React from "react";
export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){
        return(
            <div>
            <header title={this.props.title}><h1>{this.props.title}</h1></header>
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
} 