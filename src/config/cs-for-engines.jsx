
export default {
    crg: {
        criteria: [
            {
                "index": 0,
                "slug": "C1",
                "name": "Code quality",
                "description": "Steering behaviours",
                "weighting": 0.25
            },

            {
                "index": 1,
                "slug": "C2",
                "name": "Quality of features",
                "description": "Pathfinding.",
                "weighting": 0.2
            },

            {
                "index": 2,
                "slug": "C3",
                "name": "Completeness of game loop",
                "description": "Decision-making.",
                "weighting": 0.2
            },

            {
                "index": 3,
                "slug": "C4",
                "name": "Engine utilisation",
                "description": "Decision-making.",
                "weighting": 0.25
            },

            {
                "index": 4,
                "slug": "C5",
                "name": "Presentation quality",
                "description": "Decision-making.",
                "weighting": 0.1
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
                        "feedback": [""]
                    },

                    {
                        "title": "Invalid format",
                        "feedback": [
                            "An invalid format (.7z, .rar, etc.) has been submitted; make sure to follow the guidelines closely in the future."
                        ]
                    },

                    {
                        "title": "No video",
                        "feedback": [
                            "No video was provided with your submission, make sure to follow the submission guidelines closely in future."
                        ]
                    },

                    {
                        "title": "No build",
                        "feedback": [
                            "No build was supplied with the submission; follow the submission guidelines closely in the future."
                        ]
                    }
                ]
            }
        },

        {
            "key": "submitted",
            "type": "selectMany",
            "index": 0.21,
            "title": "You have submitted...",
            "isTemplated": false,
            "fieldData": {
                "options": [
                    {
                        "title": "A non-functional game",
                        "feedback": ["A non-functional game has been submitted."]
                    },

                    {
                        "title": "A functional game, using the framework",
                        "feedback": [
                            "You have submitted a functional Unity game, using the supplied framework as a solid basis to build atop.",
                            "A functional Unity game has been submitted, which uses the supplied framework."
                        ]
                    }
                ]
            }
        },
        

        {
            "key": "overallMark",
            "type": "text",
            "index": 0.2,
            "title": "You have received a total of...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "You have received a total of $1 marks for Assessment #1 of this module.",
                    "A total of $1 marks have been received for Assessment #1 of this module."
                ]
            }
        },

        {
            "key": "codeQuality",
            "type": "selectOne",
            "index": 1,
            "title": "Code quality is...",
            "fieldData": {
                "options": [
                    {
                        "title": "30-39",
                        "feedback": [
                            "The code is of a poor quality and is largely non-functional.",
                            "The code is non-functional, and is ultimately of a poor quality.",
                            "The code given is a) non-functional and b) of a poor quality. Much more could be done to improve it."
                        ]
                    },

                    {
                        "title": "40-49",
                        "feedback": [
                            "The code is of a poor quality, but is indeed functional.",
                            "The code functions correctly, but is unfortunately of a poor quality."
                        ]
                    },

                    {
                        "title": "50-59",
                        "feedback": [
                            "The code is of an adequate quality, but a lot more could be done to improve its quality.",
                            "The code quality is adequate, a lot more could be done to improve its quality."
                        ]
                    },


                    {
                        "title": "60-69",
                        "feedback": [
                            "The code is managed well, and of a good quality, but it still could be improved.",
                            "The code is of a good quality and managed well. However, it could still be improved."
                        ]
                    },


                    {
                        "title": "70-79",
                        "feedback": [
                            "The code is of an excellent quality.",
                            "The code is of a fantastic quality, good job.",
                            "The supplied code is of a superb quality."
                        ]
                    },
                ]
            }
        },

        {
            "key": "codeQualitya",
            "type": "text",
            "index": 1.5,
            "title": "(notes after last) ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //-----------

        {
            "key": "qualityOfFeatures",
            "type": "selectOne",
            "index": 2,
            "title": "Quality of features...",
            "fieldData": {
                "options": [
                    {
                        "title": "30-39",
                        "feedback": [
                            "Little to no effort has been applied in adding game mechanics; they are either broken or don't function."
                        ]
                    },

                    {
                        "title": "40-49",
                        "feedback": [
                            "An attempt has been made to add some mechanics, but they are either buggy or largely incomplete."
                        ]
                    },

                    {
                        "title": "50-59",
                        "feedback": [
                            "Two (or more) mechanics have been added but they ultimately lack depth. More could be done to improve them."
                        ]
                    },


                    {
                        "title": "60-69",
                        "feedback": [
                            "Three game mechanics are implemented and work well in the game, but they could still be improved."
                        ]
                    },


                    {
                        "title": "70-79",
                        "feedback": [
                            "Three or more mechanics have been added, and they are of an excellent quality."
                        ]
                    },
                ]
            }
        },

        {
            "key": "qofA",
            "type": "text",
            "index": 2.5,
            "title": "(notes after last) ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //-----------

        {
            "key": "cogl",
            "type": "selectOne",
            "index": 3,
            "title": "Completeness of game loop...",
            "fieldData": {
                "options": [
                    {
                        "title": "30-39",
                        "feedback": [
                            "A complete game loop has been attempted, but it remains incomplete.",
                            "The developed game loop unfortunately remains incomplete."
                        ]
                    },

                    {
                        "title": "40-49",
                        "feedback": [
                            "A good attempt has been made to construct a complete game loop, but there may be bugs or it may be incomplete.",
                            "An incomplete or buggy game loop is given, but a good attempt has been made at its implementation."
                        ]
                    },

                    {
                        "title": "50-59",
                        "feedback": [
                            "A complete game loop is found in the game, but some logical steps may be missing."
                        ]
                    },


                    {
                        "title": "60-69",
                        "feedback": [
                            "The game loop is complete, but there are still some areas that could be improved in terms of player experience."
                        ]
                    },


                    {
                        "title": "70-79",
                        "feedback": [
                            "The supplied game loop is well-polished to an excellent quality, and the overall experience is well rounded. Good job.",
                            "The game loop is of an excellent quality and is well-polished, providing a well-rounded player experience."
                        ]
                    },
                ]
            }
        },

        {
            "key": "coglA",
            "type": "text",
            "index": 3.5,
            "title": "(notes after last) ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //-----------

        {
            "key": "utilEngine",
            "type": "selectOne",
            "index": 4,
            "title": "Utilisation of engine...",
            "fieldData": {
                "options": [
                    {
                        "title": "30-39",
                        "feedback": [
                            "Little to no effort has been made in utilising parts of the engine.",
                            "No considerable attempt has been made to utilise parts of the engine.",
                            "There is fundamentally little engine utilitisation in the creation of the project."
                        ]
                    },

                    {
                        "title": "40-49",
                        "feedback": [
                            "Some attempt has been made to utilise the engine's functionality, but this is limited."
                        ]
                    },

                    {
                        "title": "50-59",
                        "feedback": [
                            "A lot more could be done to utilise the engine's functionality in development."
                        ]
                    },


                    {
                        "title": "60-69",
                        "feedback": [
                            "Areas of the engine have been well utilised, but more could be utilised throughout the project."
                        ]
                    },


                    {
                        "title": "70-79",
                        "feedback": [
                            "Several areas within the engine have been utilised to build the project."
                        ]
                    },
                ]
            }
        },

        {
            "key": "utilEngineA",
            "type": "text",
            "index": 4.5,
            "title": "(notes after last) ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //----------

        {
            "key": "presentationQuality",
            "type": "selectOne",
            "index": 5,
            "title": "Presentation quality...",
            "fieldData": {
                "options": [
                    {
                        "title": "30-39",
                        "feedback": [
                            "Little to no attempt has been made to provide screenshots or a video of the prototype."
                        ]
                    },

                    {
                        "title": "40-49",
                        "feedback": [
                            "An attempt has been made to include screenshots and a video of the prototypical game; but more may be needed, or they are of a poor quality."
                        ]
                    },

                    {
                        "title": "50-59",
                        "feedback": [
                            "There is a considerable lack of HD gameplay screenshots of the prototypical game, and they may also be of a low resolution. A gameplay video is provided."
                        ]
                    },


                    {
                        "title": "60-69",
                        "feedback": [
                            "Some good screenshots have been uploaded, but some may be missing. A gameplay video is provided."
                        ]
                    },


                    {
                        "title": "70-79",
                        "feedback": [
                            "Several high quality screenshots are present in the upload, along with a high quality video of gameplay."
                        ]
                    },
                ]
            }
        },

        {
            "key": "presQ",
            "type": "text",
            "index": 5.5,
            "title": "(notes after last) ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },


        //-------


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