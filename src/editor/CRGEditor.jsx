import React from 'react'
import { CriterionEditorField } from './serializables/CriterionEditorField.jsx';
import { SerializableEditorField } from './serializables/SerializableEditorField.jsx';


export class CRGEditor extends SerializableEditorField
{
    constructor(props)
    {
        super();

        this.state = {
            data: {
                criterions: [ {}, {} ]
            }
        }
    }

    onCriterionChange(index, data)
    {
        const criteriaCopy = this.state.data.criterions;
        criteriaCopy[index] = data;

        this.setState({ 
            data: {
                ...this.state.data,
                criterions: criteriaCopy 
        }});
    }

    validate()
    {
        //Null? Get out of here
        if(!this.state.data || !this.state.data.criterions)
            return false;

        //Some criterions not filled out? get out of here
        if(this.state.data.criterions.some(x => Object.keys(x).length == 0))
            return false;

        return true;
    }

    serialize()
    {
        return this.state.data;
    }

    renderCriteria()
    {
        const ctx = this;

        return this.state.data.criterions.map((x, i) => 
        {
            return <CriterionEditorField key={i} index={i} title={`Criterion ${i+1}`} onChanged={ctx.onCriterionChange.bind(ctx)} />
        });
    }

    render()
    {
        return <div>
            {this.renderCriteria()}
        </div>
    }
}