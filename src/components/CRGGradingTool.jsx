import React from "react";

export class CRGGradingTool extends React.Component
{
    constructor(props)
    {
        super(props);

        this.marks = props.crg.criteria.map((x, i) =>
        {
            return { slug: x.slug, name: x.name, mark: 0, weightedMark: 0, weighting: x.weighting }
        });
    }

    onPreChange(data, event)
    {
        const newValue = event.target.value;
        const dataToSend = { index: data.index, slug: data.slug, value: newValue };

        this.marks[data.index].mark = +newValue;
        this.marks[data.index].weightedMark = +(newValue * data.weighting)

        this.props.onChange(this.marks);
    }

    calculateFinalGrade()
    {
        return this.marks.reduce((a, b) => a.weightedMark + b.weightedMark);
    }

    render()
    {
        return <div className="crg-grader">
            {this.props.crg.criteria.map((x, i) =>
            {
                return <div key={i} className="criterion">
                    <h1>{x.slug}: {x.name}</h1>
                    <input type="number" min={0} max={100} defaultValue={0} onChange={((event) => this.onPreChange(x, event)).bind(this)} />
                </div>
            })}
            <div className="final-grade">
                <div>
                    <h1>Final grade</h1>
                    <h2>{this.calculateFinalGrade()}%</h2>
                </div>
            </div>
        </div>
    }
}