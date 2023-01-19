/*

 "fieldData": {
                "options": [
                    {
                        "title": "None implemented",
                        "feedback": [
                            "No mechanics have been successfully implemented",
                            "No additional mechanics are present in the prototype.",
                            "There are no mechanics implemented in this submission."
                        ]
                    },

*/

import { Utilities } from "../Utilities.js";

export default function (field, value) 
{
    const index = value.index;
    const feedback = field.fieldData.options[index].feedback;

    return Utilities.randomSelect(feedback);
}