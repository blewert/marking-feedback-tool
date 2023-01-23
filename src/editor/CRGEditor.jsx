import React from 'react'
import { CriterionEditorField } from './serializables/CriterionEditorField.jsx';


export class CRGEditor extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div>
            <CriterionEditorField index={0} title="Criterion 0" />
            <CriterionEditorField index={1} title="Criterion 1" />
        </div>
    }
}