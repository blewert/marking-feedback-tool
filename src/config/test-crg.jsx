export default {
    crg: {
        criteria: [
            {
                "index": 0,
                "slug": "Criteria 1",
                "name": "Idk something",
                "description": "The built prototype",
                "weighting": 0.9
            },

            {
                "index": 1,
                "slug": "Criteria 2",
                "name": "Something else",
                "description": "The documentation.",
                "weighting": 0.1
            }
        ]
    },
    fields: [
        {
            "key": "testItem",
            "type": "checkbox",
            "index": 1,
            "title": "Add a random joke?",
            "fieldData": {
                "generateFeedbackIfChecked": true,
                "generateFeedbackIfNotChecked": false,
                "feedback": {
                    "ifChecked": [
                        "What’s brown and sounds like a bell? Dung!",
                        "What's large, grey, and doesn't matter? An irrelephant.",
                        "People who don't eat gluten are really going against the grain.",
                        "What is the hardest part about sky diving? The ground.",
                        "How do robots eat guacamole? With computer chips.",
                        "A horse walks into a bar. The bar tender says 'Hey.' The horse says 'Sure.'"
                    ],
                    "ifNotChecked": [

                    ]
                }
            }
        },
    ]
}