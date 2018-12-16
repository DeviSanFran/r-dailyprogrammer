// selectors
let numbInput = $("#numberOfDice");
let typeInput = $("#typeOfDice");
let rollsInput = $("#rolls");
let mainText = $("#mainText");
let table = $("#table");

// logic variables
let rollCount = 0;
let arraySum;

function sumArray (array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

function rollDice(times, sides) {
    rollsArray = [];
    for(let i = 0; i < times; i++) {
        rollsArray.push(Math.floor(Math.random() * sides + 1));
    }

    return rollsArray;
}

function addRow (count, first, second, third) {
    let indexTD = $(`<th scope="row">${count}</th>`);
    let firstTD = $(`<td>${first}</td>`);
    let secondTD = $(`<td>${second}</td>`);
    let thirdTD = $(`<td>${third}</td>`);
    let newRow = $("<tr>");
    newRow.append(indexTD, firstTD, secondTD, thirdTD);
    table.append(newRow);
}

$("#submit").on("click", function(event) {
    event.preventDefault();
    
    let numberOfDice = parseFloat(numbInput.val());
    let typeOfDice = parseFloat(typeInput.val());
    let numbRolls = rollsInput.val();

    if(isNaN(numberOfDice) || isNaN(typeOfDice)) {
        mainText.text("Please provide a number for both options.");
        mainText.addClass("text-danger")
    } else {
        if (mainText.hasClass("text-danger")) {
            mainText.text("Please provide a number of dice and the type of dice you would like to roll.");
            mainText.removeClass("text-danger");
        }

        if(table.hasClass("hidden")) {
            table.removeClass("hidden");
        }

        
        numbInput.val("");
        typeInput.val("");
        console.log(`Type of Dice: ${numberOfDice} and Number of Dice: ${typeOfDice}`);

        for(let i = 0; i < numbRolls; i++) {
            valueArray = [];
            rollCount++;

            valueArray = rollDice(numberOfDice, typeOfDice);

            console.log(valueArray);

            arraySum = sumArray(valueArray);

            console.log(arraySum);

            addRow(rollCount, numberOfDice, typeOfDice, arraySum);
        }
    }
});