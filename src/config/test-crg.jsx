
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
        },


        {
            "key": "mechanicsAmount",
            "type": "selectOne",
            "title": "Amount of mechanics",
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

                    {
                        "title": "Some implemented, but limited",
                        "feedback": [
                            "Some mechanics have been implemented, but these are limited or fundamentally flawed in their implementation",
                            "Mechanics have been implemented, but these are limited in their implementation.",
                            "Mechanics are present, but are limited in implementation."
                        ]
                    },

                    {
                        "title": "Many implemented",
                        "feedback": [
                            "Many mechanics have been implemented in this build.",
                            "Several mechanics are present in your copy of the prototype."
                        ]
                    }
                ]
            }
        }
    ]
}