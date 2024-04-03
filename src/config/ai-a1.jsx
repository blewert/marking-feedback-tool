
export default {
    crg: {
        criteria: [
            {
                "index": 0,
                "slug": "C1",
                "name": "Steering behaviours",
                "description": "Steering behaviours",
                "weighting": 0.3
            },

            {
                "index": 1,
                "slug": "C2",
                "name": "Pathfinding",
                "description": "Pathfinding.",
                "weighting": 0.3
            },

            {
                "index": 2,
                "slug": "C3",
                "name": "Decision-making",
                "description": "Decision-making.",
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
            "key": "seekFlee",
            "type": "selectOne",
            "index": 1,
            "title": "Seek and flee...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "The seek and flee steering behaviours was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "The seek and flee steering behaviours have been implemented, but the output was not correct."
                        ]
                    },

                    {
                        "title": "Correct",
                        "feedback": [
                            "The seek and flee steering behaviours have been correctly implemented.",
                            "Both seek and flee were implemented correctly.",
                            "Seek and flee were implemented well."
                        ]
                    },
                ]
            }
        },

        {
            "key": "seekFleea",
            "type": "text",
            "index": 1.5,
            "title": "Seek and flee ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //-----------

        {
            "key": "pursuitEvade",
            "type": "selectOne",
            "index": 2,
            "title": "Pursuit and evade...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "The pursuit and evade steering behaviours was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "The pursuit and evade steering behaviours have been implemented, but the output was not correct."
                        ]
                    },

                    {
                        "title": "Correct",
                        "feedback": [
                            "The pursuit and evade steering behaviours have been correctly implemented.",
                            "Pursuit/evade were implemented well.",
                            "Pursuit/evade were correct in their implementation."
                        ]
                    },
                ]
            }
        },

        {
            "key": "pursuitEvadea",
            "type": "text",
            "index": 2.5,
            "title": "Pursuit and evade ...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },

        //-----------

        {
            "key": "wanderArrive",
            "type": "selectOne",
            "index": 3,
            "title": "Wander and arrive...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "The wander and arrive steering behaviours was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "The wander and arrive steering behaviours have been implemented, but the output was not correct."
                        ]
                    },

                    {
                        "title": "Correct",
                        "feedback": [
                            "The wander and arrive steering behaviours have been correctly implemented.",
                            "Wander/arrive are both implemented correctly.",
                            "Both wander/arrive are implemented correctly, and function well in the solution.",
                            "Wander/arrive are well implemented in the solution."
                        ]
                    },
                ]
            }
        },

        {
            "key": "wanderArrivea",
            "type": "text",
            "index": 3.5,
            "title": "Wander and arrive...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },


        {
            "key": "collision",
            "type": "selectOne",
            "index": 3.7,
            "title": "Collision avoidance...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Collision avoidance was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "The collision avoidance behaviour has been implemented, but the output was not correct."
                        ]
                    },

                    {
                        "title": "Correct",
                        "feedback": [
                            "Collision avoidance has been correctly implemented.",
                            "The collision avoidance behaviour is implemented correctly.",
                            "The collision avoidance algorithm functions as expected and is well implemented."
                        ]
                    },
                ]
            }
        },

        {
            "key": "collisiona",
            "type": "text",
            "index": 3.9,
            "title": "Collision avoidance...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "$1."
                ]
            }
        },


        //-----------


        {
            "key": "groupMovement",
            "type": "text",
            "index": 4,
            "title": "Group movement...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Regarding group movement, $1."
                ]
            }
        },

        //-----------

        {
            "key": "dijkstras",
            "type": "text",
            "index": 5,
            "title": "Dijkstras...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "With regards to C2 (Pathfinding): Dijkstra's algorithm $1.",
                ]
            }
        },

        //-----------

        {
            "key": "astar",
            "type": "text",
            "index": 6,
            "title": "AStar...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "The A* algorithm $1."
                ]
            }
        },

        //-----------

        {
            "key": "jps",
            "type": "selectOne",
            "index": 7,
            "title": "JPS...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "JPS was unattempted in the submission.",
                            "The JPS algorithm was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "An attempt at JPS has been included, though it may present some errors."
                        ]
                    },


                    {
                        "title": "Good attempt",
                        "feedback": [
                            "A good attempt at JPS has been included; there may be some errors but these are negligible."
                        ]
                    },

                    {
                        "title": "Correct",
                        "feedback": [
                            "The Jump-Point Search (JPS) algorithm has successfully been implemented."
                        ]
                    },
                ]
            }
        },

        //-----------

        {
            "key": "decisionMaking",
            "type": "text",
            "index": 8,
            "title": "Decision making...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Moving onto C3, decision-making: $1.",
                    "With regards to C3 (Decision Making), $1"
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