import React from 'react'
import { EditorTextField } from './fields/EditorTextField.jsx';
import { EditorSelectOneField } from './fields/EditorSelectOneField.jsx';
import { SerializableEditorField } from './serializables/SerializableEditorField.jsx';
import { EditorCheckboxField } from './fields/EditorCheckboxField.jsx';


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
        elementsCopy.push({ type: type, keyIndex: Math.random(), validated: false, data: {} });

        this.setState({
            data: {
                ...this.state.data,
                elements: elementsCopy
            }
        })
    }

    renderAddComponentsControl()
    {
        return <div className="add-components">
            <button onClick={(() => this.addNewField("text")).bind(this)}>New text field</button>
            <button onClick={(() => this.addNewField("selectOne")).bind(this)}>New select-one field</button>
            <button onClick={(() => this.addNewField("checkbox")).bind(this)}>New checkbox field</button>
        </div>
    }

    onUpdate(index, data, validated)
    {
        let elementsCopy = this.state.data.elements;
        
        elementsCopy[index].data = data;
        elementsCopy[index].validated = validated;

        this.setState({
            data: {
                ...this.state.data,
                elements: elementsCopy
            }
        });
    }

    onFieldRequestDelete(index)
    {
        let elementsCopy = this.state.data.elements;
        elementsCopy.splice(index, 1);

        this.setState({
            data: {
                ...this.state.data,
                elements: elementsCopy
            }
        });
    }

    mapToElementType(data, index)
    {
        const commonProps = {
            onUpdate: this.onUpdate.bind(this),
            onDeleteRequest: this.onFieldRequestDelete.bind(this),
            index: index
        };

        if(data.type == "text")
            return <EditorTextField key={data.keyIndex} {...commonProps} />;

        if(data.type == "selectOne")
            return <EditorSelectOneField key={data.keyIndex} {...commonProps} />;

        if(data.type == "checkbox")
            return <EditorCheckboxField key={data.keyIndex} {...commonProps} />;

        return <div key={index}>null</div>;
    }

    renderElements()
    {
        return this.state.data.elements.map((x, i) => this.mapToElementType(x, i));
    }

    render()
    {
        // console.log(this.state.data.elements);

        return <div className="fields">
            {this.renderElements()}
            {this.renderAddComponentsControl()}
        </div>
    }
}