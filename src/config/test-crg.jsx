
export default {
    fields: [
        {
            "key": "buildSubmitted",
            "type": "checkbox",
            "title": "Has submitted build?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": true,
                "feedback": {
                    "ifChecked": [
                        "You have submitted a built copy of your prototype.",
                        "A built copy of your prototype has been supplied in this submission."
                    ],
                    "ifNotChecked": [
                        "You have not submitted a built copy of your prototype."
                    ]
                }
            }
        },

        {
            "key": "sourceSubmitted",
            "type": "checkbox",
            "title": "Has submitted source?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": true,
                "feedback": {
                    "ifChecked": [
                        "You have correctly supplied the source project for this prototype.",
                        "The source code for this project has been supplied in this submission."
                    ],
                    "ifNotChecked": [
                        "You have not supplied the source code for your prototype."
                    ]
                }
            }
        }
    ]
}