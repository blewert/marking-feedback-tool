import React from "react";
import { EditorField } from "./EditorField.jsx";

export class EditorTextField extends EditorField
{
    constructor()
    {
        super();

        this.state = {
            data: {
                text: null
            }
        }
    }

    onPreUpdate(event)
    {
        const eventText = event.target.value;

        this.setState({
            data: {
                ...this.state.data,
                text: eventText
            }
        }, this.props?.onUpdate());
    }

    render()
    {
        return <div className="ui editor-field text">
            <input type="text" onChange={this.onPreUpdate.bind(this)} />
        </div>
    }
}