import React from "react";

export class SerializableEditorField extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    serialize()
    {
        return JSON.stringify(this);
    }

    onPreChanged()
    {
        throw Exception("Feature not implemented.");
    }

    validate()
    {
        throw Exception("Feature not implemented.");
    }
}