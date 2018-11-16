let quizQuestionsList = [
    {
        question: "1. What does \"AAA pattern\" stand for?",
        name: "q1",
        answers: [
            {
                answer: "Arrange Act Assert",
                correct: true,
                id: "q1_1"
            },
            {
                answer: "Act Act Act",
                correct: false,
                id: "q1_2"
            },
            {
                answer: "Allocate Attribute Assign",
                correct: false,
                id: "q1_3"
            },
            {
                answer: "Testing of high budget video games",
                correct: false,
                id: "q1_4"
            }
        ]
    },
    {
        question: "2. Which of the following is not a performance test tool?",
        name: "q2",
        answers: [
            {
                answer: "Gatling",
                correct: false,
                id: "q2_1"
            },
            {
                answer: "LoadRunner",
                correct: false,
                id: "q2_2"
            },
            {
                answer: "Performer",
                correct: true,
                id: "q2_3"
            },
            {
                answer: "JMeter",
                correct: false,
                id: "q2_4"
            }
        ]
    },
    {
        question: "3. What is not a style of ScalaTest specs?",
        name: "q3",
        answers: [
            {
                answer: "FreeSpec",
                correct: false,
                id: "q3_1"
            },
            {
                answer: "FlatMap",
                correct: true,
                id: "q3_2"
            },
            {
                answer: "WordSpec",
                correct: false,
                id: "q3_3"
            },
            {
                answer: "FunSpec",
                correct: false,
                id: "q3_4"
            }
        ]
    },
    {
        question: "4. What does \"loan pattern\" in ScalaTest stand for?",
        name: "q4",
        answers: [
            {
                answer: "Loan the hardware from Amazon and run tests in cloud",
                correct: false,
                id: "q4_1"
            },
            {
                answer: "Share single browser between multiple test suites",
                correct: false,
                id: "q4_2"
            },
            {
                answer: "Create the test fixtures, loan them to test and clean up afterwards",
                correct: true,
                id: "q4_3"
            },
            {
                answer: "Use global variables to share context between tests",
                correct: false,
                id: "q4_4"
            }
        ]
    },
    {
        question: "5. Which are JavaScript testing frameworks?",
        name: "q5",
        answers: [
            {
                answer: "Mocha, Chai, Mojito, CoffeeScript",
                correct: false,
                id: "q5_1"
            },
            {
                answer: "Jest, Enzyme, Catalyst, React",
                correct: false,
                id: "q5_2"
            },
            {
                answer: "Jasmine, Yarn, Node.js, JsUnit",
                correct: false,
                id: "q5_3"
            },
            {
                answer: "Mocha, Jest, Jasmine, Chai",
                correct: true,
                id: "q5_4"
            }
        ]
    },
    {
        question: "6. Given 2 of Hearts and 7 of Hearts in Baccarat game score 9, 4 of Clubs and 7 of Spades score 1, 10 of Diamonds and Ace of Spades score 1, what would be the score out of 7 of Hearts and 7 of Spades?",
        name: "q6",
        answers: [
            {
                answer: "14",
                correct: false,
                id: "q6_1"
            },
            {
                answer: "9",
                correct: false,
                id: "q6_2"
            },
            {
                answer: "1",
                correct: false,
                id: "q6_3"
            },
            {
                answer: "4",
                correct: true,
                id: "q6_4"
            }
        ]
    }
];

export default quizQuestionsList;