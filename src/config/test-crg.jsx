
export default {
    fields: [

        {
            "key": "submissionWarnings",
            "type": "selectMany",
            "index": 0.1,
            "title": "Warnings",
            "isTemplated": false,
            "fieldData": {
                "options": [
                    {
                        "title": "Zip name invalid",
                        "feedback": [
                            "Your zip name doesn't conform to the submission guidelines."
                        ]
                    },

                    {
                        "title": "Documentation not submitted properly",
                        "feedback": [
                            "Your documentation is not supplied in the correct format."
                        ]
                    },

                    {
                        "title": "Video not supplied",
                        "feedback": [
                            "A video is not supplied for this submission."
                        ]
                    }
                ]
            }
        },

        {
            "key": "buildSubmitted",
            "type": "checkbox",
            "index": 1,
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
            "index": 2,
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
            "index": 3,
            "title": "Amount of mechanics",
            "fieldData": {
                "options": [
                    {
                        "title": "None implemented",
                        "feedback": [
                            "No mechanics have been successfully implemented.",
                            "No additional mechanics are present in the prototype.",
                            "There are no mechanics implemented in this submission."
                        ]
                    },

                    {
                        "title": "Some implemented, but limited",
                        "feedback": [
                            "Some mechanics have been implemented, but these are limited or fundamentally flawed in their implementation.",
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
        },

        {
            "key": "mechanicsRecommendations",
            "type": "selectMany",
            "index": 3.5,
            "title": "You could improve your marks by.. ",
            "isTemplated": true,
            "fieldData": {
                "templateStrings": [
                    "Your marks for this submission could be improved by $1.",
                    "You could improve your marks by $1."
                ],
                "joinWord": "or",
                "options": [
                    {
                        "title": "Add more complex mechanics",
                        "feedback": [
                            "adding more complex mechanics",
                            "adding mechanics with more complexity"
                        ]
                    },

                    {
                        "title": "Implementing a wave spawner",
                        "feedback": [
                            "implementing a wave spawner system",
                            "adding a wave spawner",
                            "adding enemy waves via a wave spawner"
                        ]
                    }
                ]
            }
        },


        {
            "key": "mechanicsListed",
            "type": "text",
            "index": 4,
            "title": "mechanics added",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "You have added $1 to the prototype.",
                    "Additions to the framework include $1; amongst other things."
                ]
            }
        },


        {
            "key": "additionalNotes",
            "type": "text",
            "index": 99,
            "title": "additional notes (at end)",
            "fieldData": {
                "insertIntoTemplate": false
            }
        },

        {
            "key": "notesBeforehand",
            "type": "text",
            "index": 0,
            "title": "initial notes (at start)",
            "fieldData": {
                "insertIntoTemplate": false
            }
        }

    ]
}