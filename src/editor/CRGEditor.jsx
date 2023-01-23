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
                criterions: [ {
                    keyIndex: Math.random()
                } ]
            }
        }
    }

    onCriterionChange(index, data)
    {
        let criteriaCopy = this.state.data.criterions;
        criteriaCopy[index] = {
            ...criteriaCopy[index],
            ...data
        };

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


        const weightingSum = this.state.data.criterions.reduce((a, b) => a.weighting + b.weighting);

        //All CRG items should sum up to 100%
        if(weightingSum != 1.0)
        {
            //Is it not really close?
            if(Math.abs(1.0 - weightingSum) > 0.001)
                return false;
        }

        return true;
    }

    serialize()
    {
        return this.state.data;
    }

    onCriterionDeleteRequest(index)
    {
        let criteriaCopy = this.state.data.criterions;
        criteriaCopy.splice(index, 1);

        this.setState({
            data: {
                ...this.state.data,
                criterions: criteriaCopy
            }
        });
    }

    renderCriteria()
    {
        const ctx = this;

        const commonProps = {
            onChanged: ctx.onCriterionChange.bind(ctx),
            onDeleteRequest: ctx.onCriterionDeleteRequest.bind(ctx)
        }

        return this.state.data.criterions.map((x, i) => 
        {        
            return <CriterionEditorField key={x.keyIndex} index={i} title={x.name} {...commonProps}/>
        });
    }

    handleAddNewCriterion()
    {
        let criteriaCopy = this.state.data.criterions;
        criteriaCopy.push({ keyIndex: Math.random() });

        this.setState({
            data: {
                ...this.state.data,
                criterions: criteriaCopy
            }
        });
    }

    render()
    {
        console.log(this.validate());

        return <div>
            {this.renderCriteria()}
            <button onClick={this.handleAddNewCriterion.bind(this)}>+</button>
        </div>
    }
}