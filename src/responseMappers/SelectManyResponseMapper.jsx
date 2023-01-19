/*

"key": "mechanicsRecommendations",
            "type": "selectMany",
            "index": 3.5,
            "title": "You could improve your marks by.. ",
            "fieldData": {
                "templateStrings": [
                    "Your project could benefit from $1.",
                    "You could improve your marks by $1."
                ],
                "options": [
                    {
                        "title": "Add more complex mechanics",
                        "feedback

*/

import { Utilities } from "../Utilities.js";

const doFeedbackTemplating = function(field, value, feedback)
{
    if (feedback.length <= 0)
        return "";

    if (feedback.length >= 2) {
        const joinWord = ` ${field.fieldData.joinWord || "and"} `;
        feedback = feedback.slice(0, feedback.length - 1).join(", ") + joinWord + feedback[feedback.length - 1];
    }
    else
        feedback = feedback[0];

    const randomTemplate = Utilities.randomSelect(field.fieldData.templateStrings);

    return randomTemplate.replace("$1", feedback);
}

export default function (field, value) 
{
    if (value == null)
        return "";

    const indices = value.map(x => x.index);
    const feedbackOptions = indices.map(x => field.fieldData.options[x].feedback);

    let feedback = feedbackOptions.map(x => Utilities.randomSelect(x));

    if(field.isTemplated)
        return doFeedbackTemplating(field, value, feedback);

    else
        return feedback.join(" ");
    
}