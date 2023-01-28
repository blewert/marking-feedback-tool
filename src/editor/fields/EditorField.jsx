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
        this.props?.onRequestDelete();
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
            return <p onClick={this.toggleCollapsed.bind(this)}>Open</p>

        return <p onClick={this.toggleCollapsed.bind(this)}>Closed</p>
    }

    getCollapsedStyleProps()
    {
        if(!this.state.collapsed)
            return {};

        return { "display": "none" };
    }

    serialize()
    {
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