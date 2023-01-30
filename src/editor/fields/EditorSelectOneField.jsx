import React from "react";
import { EditorField } from "./EditorField.jsx";

/*

    {
        "key": "effort",
        "type": "selectOne",
        "index": 4.1,
        "title": "Effort throughout is...",
        "fieldData": {
            "options": [
                {
                    "title": "Omit output",
                    "feedback": [
                        ""
                    ]
                },

                {
                    "title": "Adequate",
                    "feedback": [
                        "The project could benefit from further effort and development throughout.",
                        "Generally, further effort would benefit the project throughout.",
                        "Effort taken in this submission is acceptable, but further effort could be applied to improve it."
                    ]
                },

*/

export class EditorSelectOneField extends EditorField 
{
    constructor() 
    {
        super();

        this.state = {
            ...this.state,
            data: {
                key: null,
                title: null,
                options: []
            }
        }
    }

    serialize() 
    {
        return {
            key: this.state.data.key,
            type: "selectOne",
            index: this.props.index,
            title: this.state.data.title,
            fieldData: {
                options: this.state.data.options.map(x => {
                    return  {
                        title: x.title,
                        feedback: x.selectOptions
                    }
                })
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

    changeOptionsArray(newArr, cb)
    {
        this.setState({ data: { ...this.state.data, options: newArr }}, cb);
    }

    handleAddNewOption()
    {
        let optionsCopy = this.state.data.options;
        optionsCopy.push({
            title: "",
            selectOptions: [],
            keyIndex: Math.random()
        });

        this.changeOptionsArray(optionsCopy);
    }

    handleOptionUpdate(event, index, name, type)
    {
        let value = event.target.value;

        if(type == "lineDelimTextArea")
            value = event.target.value.split("\n");

        //Modify index 
        let optionsCopy = this.state.data.options;
        optionsCopy[index][name] = value;

        //Update options
        this.changeOptionsArray(optionsCopy, (() => 
        {
            //Fire on update
            this.props?.onUpdate(this.props.index, this.serialize(), this.validate());

        }).bind(this));
    }

    requestOptionDelete(index)
    {
        let optionsCopy = this.state.data.options;
        optionsCopy.splice(index, 1);

        this.changeOptionsArray(optionsCopy);
    }

    renderOptions()
    {
        const onUpdate = ((event, index, name, type) => this.handleOptionUpdate(event, index, name, type));

        return <div className="options">
            <h3>Options</h3>
            {this.state.data.options.map((x, i) =>
            {
                if(!x)
                    return null;

                return <div key={x.keyIndex} className="option">
                    <h4>{x.title || `Option ${i+1}`}</h4>
                    <input onChange={(event) => onUpdate(event, i, "title", "text")} type="text" value={x.title} placeholder="Enter option title..." />
                    <textarea onChange={(event) => onUpdate(event, i, "selectOptions", "lineDelimTextArea")}  placeholder="Enter possible feedback items (one per line)"></textarea>
                    <footer>
                        <button onClick={(() => this.requestOptionDelete(i)).bind(this)}>Delete option</button>
                    </footer>
                </div>
            })}
            <button onClick={this.handleAddNewOption.bind(this)}>Add new option</button>
        </div>
    }


    render() 
    {
        const onUpdate = ((event, name, type) => this.onPreUpdate(event, name, type)).bind(this);

        return <div className="ui editor-field select-field">
            <header>
                <h2>{this.state.data.key || "Select one field"}</h2>
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

                {this.renderOptions()}
                
                <div className="bottom-controls">
                    {this.getDeleteButton()}
                </div>
            </div>
        </div>
    }
}