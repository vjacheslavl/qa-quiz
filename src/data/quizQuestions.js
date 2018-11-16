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
        question: "3. Which is not a style of ScalaTest specs?",
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
        question: "6. You are hunting a bug and want to follow the server log real time - to see what gets appended there upon your interactions with UI. What is most likely your first choice given the log is huge?",
        name: "q6",
        answers: [
            {
                answer: "less server.log",
                correct: false,
                id: "q6_1"
            },
            {
                answer: "tail -f server.log",
                correct: true,
                id: "q6_2"
            },
            {
                answer: "grep NullPointerException server.log",
                correct: false,
                id: "q6_3"
            },
            {
                answer: "Do my scenario, download the full log file and view it in the Notepad",
                correct: false,
                id: "q6_4"
            }
        ]
    },
    {
        question: "7. Think of BDD test that needs to check that count of elements on the page is correct. Where would you put \“assertEquals(\“Incorrect number of elements displayed\”, count, 5)\” statement?",
        name: "q7",
        answers: [
            {
                answer: "Right in the .feature scenario",
                correct: false,
                id: "q7_1"
            },
            {
                answer: "In the page object method",
                correct: false,
                id: "q7_2"
            },
            {
                answer: "In the step definition of the Then step",
                correct: true,
                id: "q7_3"
            },
            {
                answer: "In the utils helper function",
                correct: false,
                id: "q7_4"
            }
        ]
    },
    {
        question: "8. What is Selenoid?",
        name: "q8",
        answers: [
            {
                answer: "A powerful implementation of Selenium hub using Docker containers to launch browsers",
                correct: true,
                id: "q8_1"
            },
            {
                answer: "A framework for test automation powered by Selenium WebDriver that improves work with dynamic content, selectors, timeouts",
                correct: false,
                id: "q8_2"
            },
            {
                answer: "An implementation of Selenium WebDriver for Python",
                correct: false,
                id: "q8_3"
            },
            {
                answer: "A part of the Selenium Suite that specializes in running multiple tests across different browsers, operating systems, and machines in parallel",
                correct: false,
                id: "q8_4"
            }
        ]
    }
];

export default quizQuestionsList;
