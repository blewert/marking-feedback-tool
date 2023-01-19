import React from "react";
import { FeedbackField } from "./FeedbackField.jsx";

export class TextField extends FeedbackField 
{
    constructor() 
    {
        super();

        this.state = {
            text: ""
        }
    }

    onFieldPreUpdate(event)
    {
        this.setState({ text: event.target.value});
        this.props.onUpdate(this.buildOnChangeResponse(event.target.value));
    }

    render() 
    {
        return <div className="ui text">
            <label>{this.props.title}</label>
            <input type="text" value={this.state.text} onChange={this.onFieldPreUpdate.bind(this)} />
        </div>
    }
}