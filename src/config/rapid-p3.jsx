
export default {
    crg: {
        criteria: [
            {
                "index": 0,
                "slug": "C1",
                "name": "Game prototype",
                "description": "The built prototype",
                "weighting": 0.6
            },

            {
                "index": 1,
                "slug": "C2",
                "name": "Documentation",
                "description": "The documentation.",
                "weighting": 0.4
            }
        ]
    },
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
                        "title": "None",
                        "feedback": [ "" ]
                    },

                    {
                        "title": "Zip name invalid",
                        "feedback": [
                            "Your zip name doesn't conform to the submission guidelines, please make sure you follow the submission guidelines in future.",
                            "Your uploaded zip name doesn't appear to be in the correct format; please look at the assessment brief for guidance.",
                            "It seems you have named your zip incorrectly; it doesn't follow the requested format laid out in the submission guidelines."
                        ]
                    }
                ]
            }
        },

        {
            "key": "buildSubmitted",
            "type": "checkbox",
            "index": 1,
            "title": "Has not submitted build?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": false,
                "feedback": {
                    "ifChecked": [
                        "You have not submitted a built copy of your prototype, please make sure you submit a built copy for the summative upload.",
                        "A built copy of your prototype has not been supplied with this submission; make sure you submit one in future.",
                        "A build of your prototypical game is not present in the submission, please make sure to upload one in the final submission.",
                        "A built copy of your game is not present in this submission, please supply it in your final upload."
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
            "title": "Has not submitted source?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": false,
                "feedback": {
                    "ifChecked": [
                        "The project source for your prototype has not been supplied in this submission, make sure this is present in the final upload.",
                        "The source project has not been given in this submission, please make sure it is added to your final upload.",
                        "The Unity source project (scripts, assets, etc.) has not been added in this submission; it needs to be present in your final upload in accordance with the submission guidelines.",
                        "Please make sure for your final upload you supply your project source, it is currently not present."
                    ],
                    "ifNotChecked": [
                        "You have not supplied the source code for your prototype."
                    ]
                }
            }
        },


        {
            "key": "sourceAndSourceSubmitted",
            "type": "checkbox",
            "index": 2.5,
            "title": "Has not submitted source & build?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": false,
                "feedback": {
                    "ifChecked": [
                        "Neither a built copy of your game or the project source has been supplied in your submission.",
                        "The project source and build of your game is not present in your submission."
                    ],
                    "ifNotChecked": [

                    ]
                }
            }
        },

        {
            "key": "playablePrototype",
            "type": "selectOne",
            "index": 2.6,
            "title": "The prototype...",
            "fieldData": {
                "options": [
                    {
                        "title": "Omit output",
                        "feedback": [
                            ""
                        ]
                    },

                    {
                        "title": "Has no additions",
                        "feedback": [
                            "Your prototype supplies little to no additions atop the supplied framework.",
                            "Your supplied prototype is limited; it adds little to no changes to the given framework."
                        ]
                    },

                    {
                        "title": "Is not playable",
                        "feedback": [
                            "Your prototype is not playable.",
                            "The supplied prototype seems to be not playable.",
                            "It seems your prototype is non-functional or unplayable."
                        ]
                    },

                    {
                        "title": "Is playable",
                        "feedback": [
                            "You have submitted a playable prototype which extends the side-scroller framework.",
                            "In your submission, a playable prototype has been supplied which extends the given framework.",
                            "Your submission has extended the side-scroller framework to produce a playable prototype.",
                            "A playable prototype has been submitted which extends the given side-scroller framework",
                            "Your submission has successfully extended the given framework to create a prototypical gameplay experience.",
                            "A prototype game has been successfully created by the extension of the supplied framework."
                        ]
                    },

                    {
                        "title": "Is industry-passable",
                        "feedback": [
                            "An industry-passable prototype has been supplied in your submission, which is built atop the side-scroller framework.",
                            "You have supplied an industry-passable prototype in your submission, using the supplied side-scroller framework.",
                            "Your prototype is of an industry-passable quality, building atop the side-scroller framework.",
                            "You have extended the side-scroller framework to create an industry-passable prototypical gameplay experience."
                        ]
                    }
                ]
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
                        "title": "Omit output",
                        "feedback": [
                            ""
                        ]
                    },

                    {
                        "title": "None implemented",
                        "feedback": [
                            "It appears that no additional mechanics have been implemented into the framework.",
                            "It appears that no additional mechanics are present in the prototype.",
                            "There seems to be no extra mechanics implemented in this submission."
                        ]
                    },

                    {
                        "title": "One implemented",
                        "feedback": [
                            "One working mechanic has been implemented into your prototype game.",
                            "A working game mechanic is present in your prototype game.",
                            "Your prototype contains one additional working mechanic."
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
                        "title": "One or more implemented",
                        "feedback": [
                            "One or more mechanics have been implemented in this build.",
                            "A range of gameplay mechanics have been added atop the original framework.",
                            "You have added a number of game mechanics into your game."
                        ]
                    }
                ]
            }
        },


        {
            "key": "mechanicsListed",
            "type": "text",
            "index": 4,
            "title": "Mechanics added",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "You have added $1 to the prototype.",
                    "Namely, $1.",
                    "Additions to the framework include $1; amongst other things."
                ]
            }
        },

        {
            "key": "effort",
            "type": "selectOne",
            "index": 4.1,
            "title": "Effort throughout is...",
            "fieldData": {
                "options": [
                    {
                        "title": "Omit output",
                        "feedback": [
                            ""
                        ]
                    },

                    {
                        "title": "Adequate",
                        "feedback": [
                            "The project could benefit from further effort and development throughout.",
                            "Generally, further effort would benefit the project throughout.",
                            "Effort taken in this submission is acceptable, but further effort could be applied to improve it."
                        ]
                    },

                    {
                        "title": "Considerable",
                        "feedback": [
                            "It can be seen that considerable effort has been taken throughout the development of this submission.",
                            "It is clear that considerable effort has been taken throughout the development of this submission.",
                            "Considerable effort has been taken in the development of this submission.",
                            "Considerable effort has been applied to develop the project submitted for this submission point."
                        ]
                    },

                    {
                        "title": "Good",
                        "feedback": [
                            "It can be seen that a good amount of effort has been taken throughout the development of this submission.",
                            "It is clear that good effort has been taken throughout the development of this submission.",
                            "Good effort has been taken in the development of this submission.",
                            "Good effort and care has clearly been taken in the development of this submission.",
                            "A good amount of effort has been applied to develop the project submitted for this submission point."
                        ]
                    },

                    {
                        "title": "Extensive",
                        "feedback": [
                            "It is clear that an extensive amount of effort has been applied in the development of this submission.",
                            "Great effort has been applied to create this developed game.",
                            "A great amount of effort has been taken in the design and development of this submission.",
                            "An exceptional level of effort has been applied to the design and development of this submission."
                        ]
                    }
                ]
            }
        },

        {
            "key": "controller",
            "type": "text",
            "index": 4.4,
            "title": "Your controller...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Your character controller $1.",
                    "The character controller $1."
                ]
            }
        },

        {
            "key": "documentation",
            "type": "text",
            "index": 4.5,
            "title": "Your documentation is...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Your supplied documentation is $1.",
                    "Your documentation is $1.",
                    "The documentation for this project is $1."
                ]
            }
        },

        {
            "key": "enemyControl",
            "type": "text",
            "index": 4.55,
            "title": "Enemy control...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Enemy control $1."
                ]
            }
        },

        {
            "key": "mechanicsRecommendations",
            "type": "text",
            "index": 4.6,
            "title": "You could improve this X by...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Your marks for this submission could be improved by $1.",
                    "You could improve your marks by $1.",
                    "Your grade for this submission would be improved by $1 -- if you wished to do so."
                ]
            }
        },

        {
            "key": "additionalImprovements",
            "type": "text",
            "index": 4.7,
            "title": "Additionally, you could...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Furthermore, you could $1.",
                    "In addition, you could $1.",
                    "Additionally, you could $1."
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