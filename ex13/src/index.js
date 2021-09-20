// Only change code below this line
function randomRnageNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1))+minNumber;
}    

console.log((randomRnageNumber(2, 10)));
// Only change code above this line
module.exports = randomRnageNumber;