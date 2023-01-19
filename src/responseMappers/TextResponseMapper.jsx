/*

{
    "key": "mechanicsListed",
    "type": "text",
    "title": "mechanics added",
    "fieldData": {
        "insertIntoTemplate": true,
        "templates": [
            "You have added $1.",
            "The mechanics added include $1."
        ]
    }
}

*/


import { Utilities } from "../Utilities.js";

const doInsertIntoTemplate = (field, value) =>
{
    if(value.trim() == "")
        return "";

    const template = Utilities.randomSelect(field.fieldData.templates);

    return template.replace("$1", value);
}

export default function (field, value) 
{
    if(value == null)
        return "";
        
    if(field.fieldData?.insertIntoTemplate)
        return doInsertIntoTemplate(field, value);
    
    else
        return value;
}