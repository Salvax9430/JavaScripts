let student = {
    name: "Bramuel",
    age: 20,
    email: "bramuel@example.com"  ,  
    course: "Computer science",
    isenrolled: true,
    getSummary: function(){
        return this.name + " is " + this.age + " years old and is enrolled in " + this.course;


    },
    haveBirthday: function(){
        this.age++;// incerease brameul age from 20 to 21
        console.log(this.name + " is now " + this.age);
    },
};
// ACCESSING OBJECT PROPERTIES
console.log("User's name is: " + student.name);
console.log("User's age is: " + student.age);
console.log("User's email is: " + student.email);
console.log("User's course is: " + student["course"]);// bracket notation for web development
console.log("Is user enrolled? " + student.isenrolled);
console.log("User's summary: " + student.getSummary());
student.haveBirthday();
