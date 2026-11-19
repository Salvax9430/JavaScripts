
// FOR LOOP
for (let i = 0; i < 10; i+=2){
    console.log("For loop count:" + i);
}
for (let i = 0; i < 10; i ++) {
    console.log("For loop count:" + i);
}

let tickets = 3;
// WHILE LOOP
while (tickets > 0 ){
    console.log("Selling tickest #: " + tickets);
    tickets--;
}
// DO WHILE LOOP
let number = 100;
do {
    console.log("This prints once even though 100 is not less than 10: " + number);
    number++;
} while (number < 10);
