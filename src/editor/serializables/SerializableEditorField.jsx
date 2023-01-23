import React from "react";

export class SerializableEditorField extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            data: {}
        }
    }

    serialize()
    {
        return this.state.data;
    }

    onPreChanged(event, key, getValue)
    {
        const updatedValue = getValue(event);

        this.setState({
            data: {
                ...this.state.data,
                [key]: updatedValue
            }
        }, (function()
        {
            this.props?.onChanged(this.props?.index, this.state.data);
        }).bind(this));
    }

    sendDeletionRequest()
    {
        if(!this.props?.index)
            return;

        if(!this.props?.onDeleteRequest)
            return;

        this.props.onDeleteRequest(this.props.index);
    }

    validate()
    {
        throw Exception("Feature not implemented.");
    }
}