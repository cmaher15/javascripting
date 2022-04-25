let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (registeredEarly && runnerAge > 18) {raceNumber += 1000}
else {raceNumber < 1000}
if (runnerAge > 18 && registeredEarly) {console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`)
} else if (!registeredEarly && runnerAge > 18) {console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`)
}
else if (runnerAge < 18) {console.log(`You will race at 12:30pm. Your race number is ${raceNumber}.`)}
else if (runnerAge === 18) {console.log('Please see the registration desk.')
}
