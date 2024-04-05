
export default {
    crg: {
        criteria: [
            {
                "index": 0,
                "slug": "C1",
                "name": "The game",
                "description": "The built prototype",
                "weighting": 0.6
            },

            {
                "index": 1,
                "slug": "C2",
                "name": "Code quality",
                "description": "",
                "weighting": 0.2
            },

            {
                "index": 2,
                "slug": "C3",
                "name": "Range of techniques",
                "description": "",
                "weighting": 0.2
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
            "key": "game_artefact_1",
            "type": "text",
            "index": 0.9,
            "title": "The implemented game is...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "The implemented game is a $1.",
                    "The game you have implemented is a $1."
                ]
            }
        },


        {
            "key": "game_artefact",
            "type": "selectOne",
            "index": 1,
            "title": "The game was...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "The developed game was unattempted or is otherwise non-functional."
                        ]
                    },

                    {
                        "title": "Lacks features",
                        "feedback": [
                            "The developed game was not implemented but lacks the required features set out by the brief."
                        ]
                    }
                ]
            }
        },

        {
            "key": "game_bugs",
            "type": "selectOne",
            "index": 1.1,
            "title": "The game had...",
            "fieldData": {
                "options": [
                    {
                        "title": "Significant bugs",
                        "feedback": [
                            "Significant bugs were found in the developed solution."
                        ]
                    },

                    {
                        "title": "Minor bugs",
                        "feedback": [
                            "There are little to no bugs present throughout the game."
                        ]
                    },

                    {
                        "title": "No bugs",
                        "feedback": [
                            "No perceivable bugs were found throughout marking."
                        ]
                    }
                ]
            }
        },

        {
            "key": "game_bugs_a",
            "type": "text",
            "index": 1.2,
            "title": "...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        
        //--------

        {
            "key": "codeQuality",
            "type": "selectOne",
            "index": 95,
            "title": "Code quality throughout...",
            "fieldData": {
                "options": [
                    {
                        "title": "Poor",
                        "feedback": [
                            "Code quality throughout in general was poor, you should try work on this for the future."
                        ]
                    },

                    {
                        "title": "Adequate",
                        "feedback": [
                            "Code quality throughout in general was adequate, you should try work on this for the future."
                        ]
                    },

                    {
                        "title": "Good",
                        "feedback": [
                            "Code quality throughout in general was good, well done."
                        ]
                    },

                    {
                        "title": "Great",
                        "feedback": [
                            "The code featured good coding practices throughout, and the code is of a great quality."
                        ]
                    },

                    {
                        "title": "Didn't consider invalid input",
                        "feedback": [
                            "Code quality in general was good, but you needed to consider invalid input more throughout."
                        ]
                    },

                    {
                        "title": "Fantastic",
                        "feedback": [
                            "Code quality throughout in general was fantastic, really well done."
                        ]
                    }
                ]
            }
        },

        {
            "key": "codequality_a",
            "type": "text",
            "index": 96,
            "title": "...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //--------

        {
            "key": "broadTech",
            "type": "selectOne",
            "index": 97,
            "title": "Programming techniques...",
            "fieldData": {
                "options": [
                    {
                        "title": "Some used",
                        "feedback": [
                            "Some programming techniques have been used, but these are not appropriate for the challenge or are limited in scope."
                        ]
                    },

                    {
                        "title": "Used in parts",
                        "feedback": [
                            "Programming techniques have been used appropriately in some parts, but more methods may be more appropriate."
                        ]
                    },

                    {
                        "title": "Good",
                        "feedback": [
                            "Learned programming techniques have been well utilised throughout to create a good attempt to the solution."
                        ]
                    },

                    {
                        "title": "Great",
                        "feedback": [
                            "A broad range of learned techniques have been used to build a great attempt to the solution, featuring several advanced techniques."
                        ]
                    },

                    {
                        "title": "Fantastic",
                        "feedback": [
                            "A plethora of learned techniques, including advanced ones, have been utilised to create a fantastic solution to the problem."
                        ]
                    },
                ]
            }
        },

        {
            "key": "codequality_a",
            "type": "text",
            "index": 98,
            "title": "...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
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