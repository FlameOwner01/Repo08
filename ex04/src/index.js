// Write code below this line
function localScope(){
    myVariable = "I am here!";
    console.log(myVariable);
} 
// Write code above this line
if (typeof myVariable != "undefined"){
    console.log('outside localSccope', myVariable);
}else {
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = localScope;