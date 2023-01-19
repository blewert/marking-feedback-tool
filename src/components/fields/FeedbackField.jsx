import React from "react";

export class FeedbackField extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    buildOnChangeResponse(value)
    {
        return {
            fieldIdentifier: this.props.identifier,
            value: value
        }
    }

    onFieldPreUpdate()
    {
        this.onFieldUpdate();
    }

    onFieldUpdate(data)
    {
        this.props.onUpdate(data);
    }
}