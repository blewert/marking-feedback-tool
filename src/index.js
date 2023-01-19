import $ from 'jquery';
import React from "react";
import ReactDOM from "react-dom";

//Crg imports
import crgData from './config/test-crg.jsx'

//Sass
import './sass/main.sass';

//Components
import { CheckboxField } from './components/fields/CheckboxField.jsx'
import { SelectOneField, SelectOneFieldMapper } from './components/fields/SelectOneField.jsx';
import { TextField } from './components/fields/TextField.jsx';
import { OutputBox } from './components/OutputBox.jsx';

//Response mappers
import CheckboxResponseMapper from './responseMappers/CheckboxResponseMapper.jsx';
import SelectOneResponseMapper from './responseMappers/SelectOneResponseMapper.jsx';
import TextResponseMapper from './responseMappers/TextResponseMapper.jsx';
import _ from 'lodash';
import { SelectManyField, SelectManyFieldMapper } from './components/fields/SelectManyField.jsx';
import SelectManyResponseMapper from './responseMappers/SelectManyResponseMapper.jsx';

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.commonProps = {
			onUpdate: this.onFieldUpdated.bind(this)
		}

		const crgFields = crgData.fields;

		this.mappers = {
			"checkbox": CheckboxResponseMapper,
			"selectOne": SelectOneResponseMapper,
			"selectMany": SelectManyResponseMapper,
			"text": TextResponseMapper
		}

		this.state = {
			formData: {}
		}
	}

	generateInitialFormData(fields)
	{
		const ctx = this;

		let obj = {};

		for(let field of fields)
		{
			obj[field.key] = "";
		}

		return obj;
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
		let feedback = [];

		for(let key in formData)
		{
			//Find type from key
			const field = crgData.fields.find(x => x.key == key);

			//Not found? skip it in output
			if(!field)
			{
				continue;
			}

			const mappedOutput = this.mappers[field.type](field, formData[key]);

			feedback.push({ index: field?.index, content: mappedOutput});
		}

		let feedbackString = _.sortBy(feedback, ["index"]).map(x => x.content).join(" ");

		return this.filterFeedback(feedbackString);
	}
	

	generateFieldsFromCRG()
	{
		const crgFields = crgData.fields;
		const id = this.buildIdentifier;

		const mappedTypes = {
			"checkbox": (data, k) => <CheckboxField key={k} title={data.title} {...this.commonProps} identifier={id(data.key, 0, "checkbox")}/>,
			"selectOne": (data, k) => SelectOneFieldMapper(data, k, this.commonProps, id(data.key, 0, "selectOne")),
			"selectMany": (data, k) => SelectManyFieldMapper(data, k, this.commonProps, id(data.key, 0, "selectMany")),
			"text": (data, k) => <TextField key={k} title={data.title} {...this.commonProps} identifier={id(data.key, 0, "text")}/>
		};

		return crgFields.map((x, i) => mappedTypes[x.type](x, i));
	}

	render()
	{
		const id = this.buildIdentifier;

		return <div>
			{this.generateFieldsFromCRG()}
			{/* <SelectManyField title="title" {...this.commonProps} identifier={id("textTest", 0, "selectMany")} choices={["abc", "def", "ghi", "jkl"]} /> */}
			{/* <TextField title="title" {...this.commonProps} identifier={id("textTest", 0, "text")} /> */}
			<OutputBox output={this.generateFeedback(this.state.formData)}/>
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById("AppContainer"));