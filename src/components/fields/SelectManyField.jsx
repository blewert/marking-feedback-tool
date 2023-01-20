import React from "react";
import { FeedbackField } from "./FeedbackField.jsx";

export class SelectManyField extends FeedbackField
{
    constructor() 
    {
        super();
    }

    onFieldPreUpdate(event) 
    {
        const selectedOptions = Array.from(event.target.selectedOptions);
        const data = selectedOptions.map(x => { return { index: x.index, value: x.value }});
        
        const onChangeResponse = this.buildOnChangeResponse(data);

        this.props.onUpdate(onChangeResponse);
    }

    render()
    {
        return <div className="ui field">
            <label>{this.props.title}</label>

            <select title="Hold CTRL to select many, or SHIFT to select a range." multiple onChange={this.onFieldPreUpdate.bind(this)}>
                {this.props?.choices?.map((x, i) => <option key={i} value={x}>{x}</option>)}
            </select>
        </div>
    }
}

export function SelectManyFieldMapper(data, key, props, identifier)
{
    const options = data.fieldData.options.map(x => x.title);

    return <SelectManyField key={key} title={data.title} {...props} identifier={identifier} choices={options} />;
}