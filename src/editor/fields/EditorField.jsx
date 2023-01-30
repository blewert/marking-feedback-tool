import React from "react";

export class EditorField extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            collapsed: true
        }
    }

    onRequestDelete()
    {
        this.props?.onDeleteRequest(this.props.index);
    }

    onRequestMoveIndex()
    {
    
    }

    toggleCollapsed()
    {
        this.setState({ 
            collapsed: !this.state.collapsed
        });
    }

    getCollapseButton()
    {
        if(this.state.collapsed)
            return <div className="collapse-icon" onClick={this.toggleCollapsed.bind(this)}>&#11207;</div>

        return <div className="collapse-icon" onClick={this.toggleCollapsed.bind(this)}>&#11206;</div>
    }

    onRequestIndexShift(offset)
    {
        console.log(this.props.index + offset);
    }

    renderFieldControls()
    {
        return <>
            <div className="button">
                <button onClick={() => this.onRequestIndexShift(-1)}>&#8593;</button>
            </div>
            <div className="button">
                <button onClick={() => this.onRequestIndexShift(1)}>&#8595;</button>
            </div>
            <div className="button">
                <button onClick={this.onRequestDelete.bind(this)}>&#10007;</button>
            </div>
        </>
    }

    getCollapsedStyleProps()
    {
        if(!this.state.collapsed)
            return {};

        return { "display": "none" };
    }

    deserialize(obj)
    {
        //Basic deserialize: map object keys and values
        this.setState({ 
            ...this.state.data,
            data: obj
        });
    }

    serialize()
    {
        //Just return a stringified
        return JSON.stringify(this.state.data);
    }

    validate()
    {
        return true;
    }

    buildIdentifier(name, index, type) 
    {
        return { name, index, type };
    }

    onPreUpdate()
    {
        this.props?.onUpdate();
    }
}