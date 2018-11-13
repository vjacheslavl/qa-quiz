let quizQuestionsList = [
    {
        question: "1. What AAA stands for?",
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
                answer: "Artificial Alien Assault",
                correct: false,
                id: "q1_3"
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
                answer: "Jmeter",
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
                correct: false,
                id: "q3_2"
            },
            {
                answer: "WordSpec",
                correct: true,
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
        question: "4. What \"loan pattern\" in ScalaTest stands for?",
        name: "q4",
        answers: [
            {
                answer: "loan the hardware from Amazon and run tests in cloud",
                correct: false,
                id: "q4_1"
            },
            {
                answer: "share single browser between multiple test suites",
                correct: false,
                id: "q4_2"
            },
            {
                answer: "create the fixtures, loan them to test and clean up afterwards",
                correct: true,
                id: "q4_3"
            },
            {
                answer: "use global variables to share context between tests.",
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
                correct: true,
                id: "q5_3"
            },
            {
                answer: "<some other answer>",
                correct: false,
                id: "q5_4"
            }
        ]
    }
];

export default quizQuestionsList;