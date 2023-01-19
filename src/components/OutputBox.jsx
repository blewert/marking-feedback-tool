import React from "react";

export class OutputBox extends React.Component
{
    render()
    {
        return <pre>{this.props.output}</pre>;
    }
}