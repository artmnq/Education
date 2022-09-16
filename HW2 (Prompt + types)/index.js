let number1 = 'How many goals did Real Madrid score in this season?';
let number2 = 'How many goals did Liverpool score in this season?';
let GoalsReal = Number(prompt(number1));
let GoalsLiverpool = Number(prompt(number2));
let TotalGoals = GoalsReal+GoalsLiverpool;
alert (`Together they scored ${TotalGoals} goals`);