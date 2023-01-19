import React from "react";
import { FeedbackField } from "./FeedbackField.jsx";

export class CheckboxField extends FeedbackField 
{
    constructor() 
    {
        super();

        this.state = {
            checked: false
        }
    }

    onFieldPreUpdate(event)
    {
        this.setState({ checked: event.target.checked });
        this.props.onUpdate(this.buildOnChangeResponse(event.target.checked));
    }

    render()
    {
        return <div className="ui checkbox">
            <label>{this.props.title}</label>
            <input type="checkbox" checked={this.state.checked} onChange={this.onFieldPreUpdate.bind(this)} />
        </div>
    }
}