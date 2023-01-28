import React from "react";

export class EditorField extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    onPreUpdate()
    {
        this.props?.onUpdate();
    }
}