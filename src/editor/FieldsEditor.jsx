import React from 'react'
import { EditorTextField } from './fields/EditorTextField.jsx';
import { SerializableEditorField } from './serializables/SerializableEditorField.jsx';


export class FieldsEditor extends SerializableEditorField 
{
    constructor(props) {
        super();

        this.state = {
            data: {
                elements: []
            }
        }
    }

    addNewField(type)
    {
        let elementsCopy = this.state.data.elements;
        elementsCopy.push({ type: type, data: {} });

        this.setState({
            data: {
                ...this.state.data,
                elementsCopy
            }
        })
    }

    renderAddComponentsControl()
    {
        return <div className="add-components">
            <button onClick={(() => this.addNewField("text")).bind(this)}>New text field</button>
        </div>
    }

    mapToElementType(data, index)
    {
        if(data.type == "text")
            return <EditorTextField key={index} onUpdate={null}/>;
        
        return <div key={index}>null</div>;
    }

    renderElements()
    {
        return this.state.data.elements.map((x, i) => this.mapToElementType(x, i));
    }

    render()
    {
        console.log(this.state.data.elements);

        return <div>
            {this.renderAddComponentsControl()}
            {this.renderElements()}
        </div>
    }
}