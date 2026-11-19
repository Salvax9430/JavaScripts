const prompt = require("prompt-sync")({ sigint: true });
function greet(name,age) {
    console.log("Hello, " + name + " " + "Your age is " + age +"!");
}
greet("Bramuel",20);// a function only works when you call a function
greet("Sifuna",21);
function checkGrade() {
    let score = Number(prompt("Enter your score: "));
    if (score >= 90){
        console.log("Grade:  A (Excellent)");
        return "Grade:  A (Excellent)";
    } else if (score >= 80) {
        return "Grade:  B (Great Job)";
    } else if (score >= 70) {
        return "Grade:  C (passed)";
    } else   {
        return "Grade:  D (Needs Retake)";

    }
}
checkGrade();
console.log(checkGrade());
console.log(checkGrade());