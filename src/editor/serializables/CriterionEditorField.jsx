import React from "react";
import { Utilities } from "../../Utilities.js";
import { SerializableEditorField } from "./SerializableEditorField.jsx";


export class CriterionEditorField extends SerializableEditorField
{
    constructor()
    {
        super();

        this.state = {
            collapsed: false,
            data: {
                name: "",
                slug: "",
                description: "",
                weighting: 0.5
            }
        }
    }

    getIcon(status)
    {
        return (!!status) ? ("Open") : ("Close");
    }


    renderCollapsable(status)
    {
        let styleProps = {
            display: "none"
        };

        if(!status)
            delete styleProps.display;

        const preChange = ((event, key, getValue) =>
        {
            return this.onPreChanged(event, key, getValue);
        }).bind(this);        

        return <div className="collapsable" style={styleProps}>
            <div className="row">
                <input type="text"   onChange={(event) => preChange(event, "name", Utilities.mapEventTargetValue)} placeholder="Criterion name" />
                <input type="text"   onChange={(event) => preChange(event, "slug", Utilities.mapEventTargetValue)} placeholder="Slug (e.g. C1, C2)" />
            </div>
            <div className="row">
                <input type="text"   onChange={(event) => preChange(event, "description", Utilities.mapEventTargetValue)} placeholder="Criterion description (optional)" />
                <input type="number" onChange={(event) => preChange(event, "weighting", Utilities.mapEventTargetValueNormalised)} max={100} min={0} step="0.5"  placeholder="Weight (%)" />
            </div>
            <div className="bottom-row">
                <button onClick={this.sendDeletionRequest.bind(this)}>Delete</button>
            </div>
        </div>
    }

    handleCollapseRequest()
    {
        this.setState({ collapsed: !this.state.collapsed });
    }

    getTitle()
    {
        if(!this.props?.title)
            return "Criterion";

        if(!this.state?.data?.slug)
            return this.props.title;

        if (!this.state.data.weighting)
            return `${this.state.data.slug}: ${this.props.title}`;

        return `${this.state.data.slug}: ${this.props.title} (${Math.floor(this.state.data.weighting * 100)}%)`;
    }

    render()
    {
        return <div className="ui editor-field criterion">
            <header>
                <h2>{this.getTitle()}</h2>
                <div className="collapse-icon" onClick={this.handleCollapseRequest.bind(this)}>{this.getIcon(this.state.collapsed)}</div>
            </header>
            {this.renderCollapsable(this.state.collapsed)}
        </div>
    }

    validate()
    {
        if(this.state.data.name.trim() == "" || this.state.data.slug.trim() == "")
            return false;

        if(!this.state.data.weighting || (this.state.data.weighting < 0.0 || this.state.data.weighting > 1.0))
            return false;

        return true;
    }

    serialize()
    {
        return { 
            "index": this.props?.index || 0,
            "slug": this.state.data.slug,
            "name": this.state.data.name,
            "description": this.state.data.description,
            "weighting": +this.state.data.weighting
        }
    }
}