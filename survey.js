const readline = require('readline');

const person = {};
const questions = [
"What's your name? Nicknames are also acceptable :)",
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite (eg: dinner, brunch, etc.)",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
  person.name = answer; 
  rl.question("What's an activity you like doing? ", (answer) => {
    person.activity = answer;
   
    rl.question("What do you listen to while doing that? ", (answer) => {
    person.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
      person.food = answer;

      console.log(`
      name: ${person.name}\n 
      favorite activity: ${person.activity}\n
      favorite music: ${person.music}\n
      favourite food: ${person.food}\n
      `);
      rl.close();
      });
    });
  });
 
});
