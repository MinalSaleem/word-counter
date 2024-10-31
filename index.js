#! /usr/bin/env node
import inquirer from "inquirer";
//declare a constant "answers" and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
//print a array of words
console.log(words);
//Print word count of the sentence
console.log(`Your sentence word count is ${words.length}`);
