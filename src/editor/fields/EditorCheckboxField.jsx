import React from "react";
import { EditorField } from "./EditorField.jsx";

/*

    {
        "key": "buildSubmitted",
        "type": "checkbox",
        "index": 1,
        "title": "Has not submitted build?",
        "fieldData": {
            "generateFeedbackIfChecked": true,
            "generateFeedbackIfNotChecked": false,
            "feedback": {
                "ifChecked": [
                    "You have not submitted a built copy of your prototype, please make sure you submit a built copy for the summative upload.",
                    "A built copy of your prototype has not been supplied with this submission; make sure you submit one in future.",
                    "A build of your prototypical game is not present in the submission, please make sure to upload one in the final submission.",
                    "A built copy of your game is not present in this submission, please supply it in your final upload."
                ],
                "ifNotChecked": [
                    "You have not submitted a built copy of your prototype."
                ]
            }
        }
    },

*/

export class EditorCheckboxField extends EditorField 
{
    constructor() 
    {
        super();

        this.state = {
            ...this.state,
            data: {
                key: null,
                title: null,
                generateFeedbackIfChecked: false,
                generateFeedbackIfNotChecked: false,
                ifCheckedFeedback: [],
                ifNotCheckedFeedback: []
            }
        }
    }

    serialize() 
    {
        return { 
            key: this.state.data.key,
            type: "checkbox",
            index: this.props?.index,
            title: this.state.data.title,
            fieldData: {
                generateFeedbackIfChecked: this.state.data.generateFeedbackIfChecked,
                generateFeedbackIfNotChecked: this.state.data.generateFeedbackIfNotChecked,
                feedback: {
                    ifChecked: this.state.data.ifCheckedFeedback,
                    ifNotCheckedFeedback: this.state.data.ifNotCheckedFeedback
                }
            }
        };
    }
    

    onPreUpdate(event, key, type) 
    {
        let value = event.target.value;

        if (type == "checkbox")
            value = event.target.checked;

        if (type == "lineDelimTextarea")
            value = event.target.value.split("\n");

        this.setState({
            data: {
                ...this.state.data,
                [key]: value
            }
        }, (() => {
            this.props?.onUpdate(this.props.index, this.serialize(), this.validate());
        }).bind(this));
    }

    generateFeedbackArea(index, title, placeholder, dataKey)
    {
        const onUpdate = ((event, name, type) => this.onPreUpdate(event, name, type)).bind(this);

        return <div key={index} className="checkbox feedback">
            <label>{title}</label>
            <textarea onChange={(event) => onUpdate(event, dataKey, "lineDelimTextarea")} placeholder={placeholder}></textarea>
        </div>
    }

    renderOptionalFeedback()
    {
        let elements = [];

        const strings = {
            ifChecked: {
                title: "Feedback if checked (one response per line):",
                placeholder: "e.g. 'You have submitted the built game.'"
            },

            ifNotChecked: {
                title: "Feedback if not checked (one response per line):",
                placeholder: "e.g. 'You have not submitted the built game.'"
            }
        }

        if (this.state.data.generateFeedbackIfChecked)
            elements.push((index) => this.generateFeedbackArea(index, strings.ifChecked.title, strings.ifChecked.placeholder, "ifCheckedFeedback"));

        if(this.state.data.generateFeedbackIfNotChecked)
            elements.push((index) => this.generateFeedbackArea(index, strings.ifNotChecked.title, strings.ifNotChecked.placeholder, "ifNotCheckedFeedback"));

        let mappedElements = elements.filter(x => !!x).map((x, i) => x(i));

        return <div className="row indented">
            {(mappedElements.length > 0) ? (mappedElements) : (<span className="default">Neither of the options above are checked, no output will be produced.</span>)}
        </div>
    }

    render() 
    {
        const onUpdate = ((event, name, type) => this.onPreUpdate(event, name, type)).bind(this);

        return <div className="wrapper">
            <div className="ui editor-field checkbox-field">
                <header>
                    <h2>{this.state.data.key || "Checkbox field"}</h2>
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

                    <div className="row onefr-onefr">
                        <label>Generate feedback if checked?</label>
                        <input type="checkbox" onChange={(event) => onUpdate(event, "generateFeedbackIfChecked", "checkbox")} />
                    </div>

                    <div className="row onefr-onefr">
                        <label>Generate feedback if not checked?</label>
                        <input type="checkbox" onChange={(event) => onUpdate(event, "generateFeedbackIfNotChecked", "checkbox")} />
                    </div>

                    {this.renderOptionalFeedback()}
                </div>
            </div>
            <div className="controls">
                {this.renderFieldControls()}
            </div>
        </div>
    }
}