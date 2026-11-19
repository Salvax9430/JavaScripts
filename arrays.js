let students = ["Erick", "Sifuna",'Simiyu',"Simiyu","Mukhebi"];
console.log("students",students);
// --- 1. INDEXES & LENGTH ---
console.log("First student:", students[0]);         // "Erick"
console.log("Second student:", students[1]);        // "Sifuna"
console.log("Last student:", students.at(2));      // "Simiyu"
console.log("Total count:", students.length);       // 3
console.log("First student",students[3]);
console.log("Secondstudent",students[-1]);

console.log("Initial students:", students);



// Update an item by index
students[1] = "Brian";
console.log("After updating index 1:", students);   // ["Erick", "Brian", "Simiyu"]

// --- 2. ADDING & REMOVING ITEMS ---
// push: Add to the end
students.push("Wanjiku");
console.log("After push:", students);               // ["Erick", "Brian", "Simiyu", "Wanjiku"]

// pop: Remove from the end
let removedLast = students.pop();
console.log("Popped:", removedLast, "| Array:", students);

// unshift: Add to the beginning
students.unshift("Amina");
console.log("After unshift:", students);            // ["Amina", "Erick", "Brian", "Simiyu"]

// shift: Remove from the beginning
let removedFirst = students.shift();
console.log("Shifted:", removedFirst, "| Array:", students);

// splice: Add/remove at a specific index (start at index 1, remove 1 item, insert "Faith")
students.splice(1, 1, "Faith");
console.log("After splice:", students);             // ["Erick", "Faith", "Simiyu"]

// --- 3. SEARCHING & CHECKING ---
console.log("Includes Erick?", students.includes("Erick"));     // true
console.log("Index of Simiyu:", students.indexOf("Simiyu"));    // 2
console.log("Index of unknown:", students.indexOf("Kevin"));    // -1

// find: Get the first item matching a condition
let startsWithF = students.find(name => name.startsWith("F"));
console.log("First starting with F:", startsWithF);             // "Faith"

// --- 4. COPYING, MERGING & CONVERTING ---
// slice: Copy a portion without changing the original array
let firstTwo = students.slice(0, 2);
console.log("Sliced (first two):", firstTwo);       // ["Erick", "Faith"]

// concat: Combine with another array
let allStudents = students.concat(["Kevin", "Mercy"]);
console.log("Combined array:", allStudents);

// join: Turn array into a single string
console.log("Joined string:", students.join(" - ")); // "Erick - Faith - Simiyu"

// --- 5. SORTING & REVERSING ---
students.sort();
console.log("Sorted A-Z:", students);               // ["Erick", "Faith", "Simiyu"]

students.reverse();
console.log("Reversed:", students);                 // ["Simiyu", "Faith", "Erick"]

// --- 6. LOOPING & TRANSFORMING ---
// forEach: Run a function for every student
console.log("--- Roll Call ---");
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// map: Create a new array by transforming every item
let upperCaseStudents = students.map(student => student.toUpperCase());
console.log("Uppercase:", upperCaseStudents);

// filter: Create a new array with items that pass a test
let longNames = students.filter(student => student.length > 5);
console.log("Names longer than 5 letters:", longNames);
