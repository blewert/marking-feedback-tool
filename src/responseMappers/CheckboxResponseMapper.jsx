
/*
{
            "key": "buildSubmitted",
            "type": "checkbox",
            "title": "Has submitted build?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": true,
                "feedback": {
                    "ifChecked": [
                        "You have submitted a built copy of your prototype."
                    ],
                    "ifNotChecked": [
                        "You have not submitted a built copy of your prototype."
                    ]
                }
            }
        }




*/

import { Utilities } from "../Utilities.js";



export default function (field, value) 
{
    const data = field.fieldData;

    if (data.generateFeedbackIfChecked && value)
        return Utilities.randomSelect(data.feedback?.ifChecked);

    else if (data.generateFeedbackIfNotChecked && !value)
        return Utilities.randomSelect(data.feedback?.ifNotChecked);

    return "";
}