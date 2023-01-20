import React from "react";
import { FeedbackField } from "./FeedbackField.jsx";

export class SelectOneField extends FeedbackField
{
    constructor() 
    {
        super();
    }

    onFieldPreUpdate(event) 
    {
        const index = event.target.selectedIndex;
        const item = event.target.value;

        const onChangeResponse = this.buildOnChangeResponse({ index, item });

        this.props.onUpdate(onChangeResponse);
    }

    render()
    {
        return <div className="ui field">
            <label>{this.props.title}</label>

            <select onChange={this.onFieldPreUpdate.bind(this)}>
                {this.props?.choices?.map((x, i) => <option key={i} value={x}>{x}</option>)}
            </select>
        </div>
    }
}

export function SelectOneFieldMapper(data, key, props, identifier)
{
    const options = data.fieldData.options.map(x => x.title);

    return <SelectOneField key={key} title={data.title} {...props} identifier={identifier} choices={options} />;
}