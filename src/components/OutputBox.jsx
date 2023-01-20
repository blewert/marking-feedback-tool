import React from "react";

export class OutputBox extends React.Component
{
    render()
    {
        return <div className="output">
            <label>Output</label>
            <pre>{this.props.output}</pre>
        </div>
    }
}