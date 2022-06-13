console.log("Welcome to this quiz on: Tejeshwer Singh Sachdeva!!");
console.log("---------------------------------------------------\n");

var readLine = require('readline-sync'),
    chalk = require('chalk');
var score = 0,
    highscore = 0;
var lev_one = [{
        "question": "What is my age",
        "answer": 20
    },
    {
        "question": "Name my Native city",
        "answer": "jhansi"
    }
];

var lev_two = [{
        "question": "Who is my favourite cricketer",
        "options": ["Virat Kohli", "AB Devilliers", "MS Dhoni", "Mitchell Starc"],
        "answer": "AB Devilliers"
    },
    {
        "question": "My Dream workplace",
        "options": ["Army", "Air Force", "Navy", "MNC"],
        "answer": "Air Force"
    },
    {
        "question": "Programming Language i Love",
        "options": ["C++", "Java", "Python", "JavaScript"],
        "answer": "C++"
    },
    {
        "question": "My favourite singer",
        "options": ["Arijit Singh", "Amrinder Gill", "Satinder Sartaj", "Atif Aslam"],
        "answer": "Satinder Sartaj"
    },
    {
        "question": "My favourite Fast Food",
        "options": ["Burger", "Pizza", "Momos", "Noodles"],
        "answer": "Pizza"
    }
];

var lev_three = [{
        "question": "My favourite color",
        "options": ["Blue", "Black", "Green", "White"],
        "answer": "Black"
    },
    {
        "question": "No. of NDA written attempts i made",
        "options": ["1", "2", "3", "4"],
        "answer": "4"
    },
    {
        "question": "No. of SSB attempts",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
    }
];

var userName = readLine.question("Enter your name: ");
console.log("Welcome " + userName);

function checkAnswer(question, answer, options) {
    highscore++;
    if (options == undefined) {
        var userAns = readLine.question(question + ": ");
        if (userAns.toLowerCase() == answer) {
            score++;
            console.log(chalk.bgGreen("You're correct \n"));
        } else {
            console.log(chalk.bgRed("You're Worng \n"));
        }
    } else {
        var userAns = readLine.keyInSelect(options, (question + ": "));
        readLine.keyInPause();

        if (options[userAns] == answer) {
            score++;
            console.log(chalk.bgGreen("You're correct \n"));
        } else {
            console.log(chalk.bgRed("You're Wrong \n"));
        }
    }
}

console.log(chalk.white.underline("\nLevel One!!!!"));
console.log("Get both questions correct to progress to level 2...");
for (i = 0; i < (lev_one.length); i++) {
    checkAnswer(lev_one[i].question, lev_one[i].answer);
}

if (score == 2) {
    console.log(chalk.white.underline("\nYou progress to level 2!!!!"));
    for (i = 0; i < lev_two.length; i++) {
        checkAnswer(lev_two[i].question, lev_two[i].answer, lev_two[i].options);
    }
}
if (score > 4) {
    console.log(chalk.white.underline("\nYou progress to level 3!!!"));
    for (i = 0; i < lev_three.length; i++) {
        checkAnswer(lev_three[i].question, lev_three[i].answer, lev_three[i].options);
    }
}

console.log(chalk.bgBlue("Your Score is: " + score + "/" + highscore));
