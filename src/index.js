import $ from 'jquery';
import React from "react";
import ReactDOM from "react-dom";

import { Route, HashRouter, Router, Link } from 'react-router-dom';

//Crg imports
// import crgData from './config/test-crg.jsx'
import crgData from './config/rapid-p2.jsx'

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
import { CRGGradingTool } from './components/CRGGradingTool.jsx';
import { Utilities } from './Utilities.js';
import { CRGEditor } from './editor/CRGEditor.jsx';

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
			formData: {},
			marks: [],
			options: {
				omitMarkInOutput: true,
				seed: 0
			}
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

		let markString = "";

		if (this.state.marks.length == crgData.crg.criteria.length)
		{
			const markComponents = this.state.marks.map(x => `(${x.slug}: ${x.mark}%)`);
			const finalMark = this.state.marks.reduce((a, b) => (a.weightedMark + b.weightedMark));

			markString = `\n\n` + markComponents.join(" + ") + ` = ${finalMark}%`;
		}

		if (!this.state.options.omitMarkInOutput)
			markString = "";

		return this.filterFeedback(feedbackString + markString);
	}
	

	generateFieldsFromCRG()
	{
		let crgFields = crgData.fields;
		const id = this.buildIdentifier;

		crgFields = _.sortBy(crgFields, ['index']);

		const mappedTypes = {
			"checkbox": (data, k) => <CheckboxField key={k} title={data.title} {...this.commonProps} identifier={id(data.key, 0, "checkbox")}/>,
			"selectOne": (data, k) => SelectOneFieldMapper(data, k, this.commonProps, id(data.key, 0, "selectOne")),
			"selectMany": (data, k) => SelectManyFieldMapper(data, k, this.commonProps, id(data.key, 0, "selectMany")),
			"text": (data, k) => <TextField key={k} title={data.title} {...this.commonProps} identifier={id(data.key, 0, "text")}/>
		};

		return crgFields.map((x, i) => mappedTypes[x.type](x, i));
	}

	updateMarks(marks)
	{
		this.setState({ marks: marks });
	}

	handleRandomSeedClick()
	{
		Utilities.randomSeed();
		
		this.setState
		({ 
			options: {
				seed: Math.random(),
				...this.state.options
			}
		})
	}

	handleOmitCheckbox(event)
	{
		this.setState({ options: {
			...this.state.options,
			omitMarkInOutput: !event.target.checked
		}})
	}

	generateFormControls()
	{
		return <div className="form-controls">
			<div className="control">
				<button onClick={this.handleRandomSeedClick.bind(this)}>Refresh seed</button>
			</div>
			<div className="control">
				<label>Omit mark in output?</label>
				<input type="checkbox" onChange={this.handleOmitCheckbox.bind(this)} />
			</div>
		</div>
	}

	showCRGView()
	{
		return <div>
			{this.generateFormControls()}
			<CRGGradingTool crg={crgData.crg} onChange={this.updateMarks.bind(this)} />
			{this.generateFieldsFromCRG()}
			{/* <SelectManyField title="title" {...this.commonProps} identifier={id("textTest", 0, "selectMany")} choices={["abc", "def", "ghi", "jkl"]} /> */}
			{/* <TextField title="title" {...this.commonProps} identifier={id("textTest", 0, "text")} /> */}
			<OutputBox output={this.generateFeedback(this.state.formData)} />
		</div>;
	}

	showIndexView()
	{
		return <ul>
			<li><Link to="/crg">Test CRG view</Link></li>
			<li><Link to="/editor">Test editor</Link></li>
		</ul>
	}
	
	showEditorView()
	{
		return <CRGEditor/>;
	}

	render()
	{
		const id = this.buildIdentifier;

		return <HashRouter>
			<Route exact path="/">
				{this.showIndexView()}
			</Route>
			<Route exact path="/crg">
				{this.showCRGView()}
			</Route>
			<Route exact path="/editor">
				{this.showEditorView()}
			</Route>
		</HashRouter>
	}
}

ReactDOM.render(<App />, document.getElementById("AppContainer"));