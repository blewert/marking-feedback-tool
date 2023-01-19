import $ from 'jquery';
import React from "react";
import ReactDOM from "react-dom";

//Crg imports
import crgData from './config/test-crg.jsx'

//Sass
import './sass/main.sass';

//Components
import { CheckboxField } from './components/fields/CheckboxField.jsx'
import { OutputBox } from './components/OutputBox.jsx';

//Response mappers
import CheckboxResponseMapper from './responseMappers/CheckboxResponseMapper.jsx';

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.commonProps = {
			onUpdate: this.onFieldUpdated.bind(this)
		}

		const crgFields = crgData.fields;

		this.state = {
			formData: { }
		}

		this.mappers = {
			"checkbox": CheckboxResponseMapper
		}
	}

	buildIdentifier(name, index, type)
	{
		return { name, index, type };
	}
	
	onFieldUpdated(data)
	{
		const fieldName = data.fieldIdentifier.name;
		const index = data.fieldIdentifier.index;
		const type = data.fieldIdentifier.type;

		this.setState({ formData: {
			...this.state.formData,
			[fieldName]: data.value 
	 	}});
	}

	filterFeedback(feedback)
	{
		return feedback.trim();
	}

	generateFeedback(formData)
	{
		let feedback = "";

		for(let key in formData)
		{
			//Find type from key
			const field = crgData.fields.find(x => x.key == key);

			const mappedOutput = this.mappers[field.type](field, formData[key]);

			feedback += mappedOutput + " ";
		}

		// return JSON.stringify(formData);
		return this.filterFeedback(feedback);
	}

	generateFieldsFromCRG()
	{
		const crgFields = crgData.fields;
		const id = this.buildIdentifier;

		const mappedTypes = {
			"checkbox": (data, k) => <CheckboxField key={k} title={data.title} {...this.commonProps} identifier={id(data.key, 0, "checkbox")}/>
		};

		return crgFields.map((x, i) => mappedTypes[x.type](x, i));
	}

	render()
	{
		
		return <div>
			{this.generateFieldsFromCRG()}
			<OutputBox output={this.generateFeedback(this.state.formData)}/>
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById("AppContainer"));