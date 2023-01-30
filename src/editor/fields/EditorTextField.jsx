import React from "react";
import { EditorField } from "./EditorField.jsx";

/*
    {
        "key": "mechanicsListed",
        "type": "text",
        "index": 4,
        "title": "Mechanics added",
        "fieldData": {
            "insertIntoTemplate": true,
            "templates": [
                "You have added $1 to the prototype.",
                "Namely, $1.",
                "Additions to the framework include $1; amongst other things."
            ]
        }
    },

*/

export class EditorTextField extends EditorField
{
    constructor()
    {
        super();

        this.state = {
            ...this.state,
            data: {
                key: null,
                title: null,
                insertIntoTemplate: false,
                templates: [ ]
            }
        }
    }

    serialize()
    {

        return {
            key: this.state.data.key,
            type: "text",
            index: this.props.index,
            title: this.state.data.title,
            fieldData: {
                insertIntoTemplate: this.state.data.insertIntoTemplate,
                templates: this.state.data.templates
            }
        }
    }

    onPreUpdate(event, key, type)
    {
        let value = event.target.value;

        if(type == "checkbox")
            value = event.target.checked;

        if (type == "lineDelimTextarea")
            value = event.target.value.split("\n");

        this.setState({
            data: {
                ...this.state.data,
                [key]: value
            }
        }, (() => 
        {
            this.props?.onUpdate(this.props.index, this.serialize(), this.validate());
        }).bind(this));
    }

    renderTemplateBox()
    {
        const onUpdate = ((event, name, type) => this.onPreUpdate(event, name, type)).bind(this);

        if(this.state.data.insertIntoTemplate)
            return <div className="row indented">
                <label>Insert the templates below (one per line). Use $1 as a guide to where user-entered text should go.</label>
                <textarea onChange={(event) => onUpdate(event, "templates", "lineDelimTextarea")} placeholder="e.g: You have added $1 to your project."></textarea>
            </div>

        return null;
    }

    render()
    {
        const onUpdate = ((event, name, type) => this.onPreUpdate(event, name, type)).bind(this);

        return <div className="ui editor-field text">
            <header>
                <h2>{this.state.data.key || "Text field"}</h2>
                {this.getCollapseButton()}
            </header>
            <div className="content" style={this.getCollapsedStyleProps()}>
                <div className="row">
                    <label>Key</label>
                    <input type="text" onChange={(event) => onUpdate(event, "key", "text")} />
                </div>

                <div className="row">
                    <label>Title</label>
                    <input type="text" onChange={(event) => onUpdate(event, "title", "text")} />
                </div>

                <div className="row">
                    <label>Insert into template?</label>
                    <input type="checkbox" onChange={(event) => onUpdate(event, "insertIntoTemplate", "checkbox")} />
                </div>

                {this.renderTemplateBox()}

                <div className="bottom-row">
                    {this.getDeleteButton()}
                </div>
            </div>
        </div>
    }
}