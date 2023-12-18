
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
            "key": "overallMark",
            "type": "text",
            "index": 0.2,
            "title": "You have received a total of...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "You have received a total of $1 marks for the programming portfolio section of Assessment #1.",
                    "A total of $1 marks have been received for the programming portfolio section of Assessment #1."
                ]
            }
        },

        {
            "key": "task1",
            "type": "selectOne",
            "index": 1,
            "title": "Task 1...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 1 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 1 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 1 received full marks (5/5)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task1a",
            "type": "text",
            "index": 1.5,
            "title": "Task 1 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 1 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task2",
            "type": "selectOne",
            "index": 2,
            "title": "Task 2...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 2 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 2 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Could detect invalid input",
                        "feedback": [
                            "Task 2 is good, but could have detected invalid input for robustness."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 2 received full marks (5/5)."
                        ]
                    },

                    
                ]
            }
        },

        {
            "key": "task2a",
            "type": "text",
            "index": 2.5,
            "title": "Task 2 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 2 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task3",
            "type": "selectOne",
            "index": 3,
            "title": "Task 3...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 3 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 3 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Doesn't work on floats",
                        "feedback": [
                            "Task 3 works as expected, but didn't work with float types (as requested) -- only ints."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 3 received full marks (5/5)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task3a",
            "type": "text",
            "index": 3.5,
            "title": "Task 3 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 3 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task4",
            "type": "selectOne",
            "index": 4,
            "title": "Task 4...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 4 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 4 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Could be improved",
                        "feedback": [
                            "Task 4 was good, but could be further parameterised for higher marks."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 4 received full marks (10/10)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task4a",
            "type": "text",
            "index": 4.5,
            "title": "Task 4 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 4 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task5",
            "type": "selectOne",
            "index": 5,
            "title": "Task 5...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 5 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 5 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Could be improved (while loop)",
                        "feedback": [
                            "Task 5 was good, and utilised a while loop to skip whitespace characters. However, a better algorithm could have been used; e.g. a boolean flag set when a period is encountered."
                        ]
                    },

                    {
                        "title": "Could be improved (look-ahead)",
                        "feedback": [
                            "Task 5 used a look-ahead or look-behind algorithm (index + n where n is an integer), and doesn't work for multiple whitespace characters."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 5 received full marks (10/10)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task5a",
            "type": "text",
            "index": 5.5,
            "title": "Task 5 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 5 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task6",
            "type": "selectOne",
            "index": 6,
            "title": "Task 6...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 6 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 6 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Didn't show number of guesses",
                        "feedback": [
                            "Task 6 did not show the number of guesses a player gave throughout the game, contrary to what was requested."
                        ]
                    },

                    {
                        "title": "Some non-matching cases",
                        "feedback": [
                            "Task 6 did not handle all exclusive cases related to number guessing."
                        ]
                    },

                    {
                        "title": "No invalid input",
                        "feedback": [
                            "Task 6 did not deal with invalid input well."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 6 received full marks (10/10)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task6a",
            "type": "text",
            "index": 6.5,
            "title": "Task 6 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 6 received $1."
                ]
            }
        },

        //-----------

        {
            "key": "task7",
            "type": "selectOne",
            "index": 7,
            "title": "Task 7...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 7 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 7 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Could better use structs",
                        "feedback": [
                            "Task 7 was good, but could have used structs to better represent the player's class."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 7 received full marks (10/10)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task7a",
            "type": "text",
            "index": 7.5,
            "title": "Task 7 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 7 received $1."
                ]
            }
        },

        //---------

        {
            "key": "task8",
            "type": "selectOne",
            "index": 8,
            "title": "Task 8...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 8 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 8 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "No heap",
                        "feedback": [
                            "Task 8 did not use a dynamically allocated array."
                        ]
                    },

                    {
                        "title": "Vector used",
                        "feedback": [
                            "Task 8 did not use a dynamically allocated array, but did use an std::vector."
                        ]
                    },

                    {
                        "title": "No space-delimited input",
                        "feedback": [
                            "Task 8 did not parse space-delimited input."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 8 received full marks (15/15)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task8a",
            "type": "text",
            "index": 8.5,
            "title": "Task 8 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 8 received $1."
                ]
            }
        },

        //---------

        {
            "key": "task9",
            "type": "selectOne",
            "index": 9,
            "title": "Task 9...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 9 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 9 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 9 received full marks (15/15)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task9a",
            "type": "text",
            "index": 9.5,
            "title": "Task 9 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 9 received $1."
                ]
            }
        },

        //---------

        {
            "key": "task10",
            "type": "selectOne",
            "index": 10,
            "title": "Task 10...",
            "fieldData": {
                "options": [
                    {
                        "title": "Unattempted",
                        "feedback": [
                            "Task 10 was unattempted."
                        ]
                    },

                    {
                        "title": "Not correct",
                        "feedback": [
                            "Task 10 didn't produce the correct output."
                        ]
                    },

                    {
                        "title": "Could have used structs",
                        "feedback": [
                            "Task 10 could have been cleaner, for example, using structs to represent assessment criteria (with weights and names)."
                        ]
                    },

                    {
                        "title": "Full marks",
                        "feedback": [
                            "Task 10 received full marks (15/15)."
                        ]
                    },
                ]
            }
        },

        {
            "key": "task10a",
            "type": "text",
            "index": 10.5,
            "title": "Task 10 received...",
            "fieldData": {
                "insertIntoTemplate": true,
                "templates": [
                    "Task 10 received $1."
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
                        "title": "Didn't consider invalid input",
                        "feedback": [
                            "Code quality in general was good, but you needed to consider invalid input more throughout."
                        ]
                    },

                    {
                        "title": "Fantastic",
                        "feedback": [
                            "Code quality throughout in general was fantastic, reall well done."
                        ]
                    },
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