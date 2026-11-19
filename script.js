const heading = document.getElementById("main-heading");
const statusText = document.querySelector(".status-text");
const button = document.querySelector("#complete-btn");
// LISTENING FOR EVENTS AND CHANGING THE DOM
button.addEventListener("click", function() {
    //change the text inside the html tags
    heading.textContent = "You have completed the session recap task!";
    statusText.textContent = "Status: Ready for Monday's class";
    // change css styles directly with js
    heading.style.color = "blue";
    heading.style.fontSize = "2rem";
    statusText.style.fontSize = "1.5rem";
    statusText.style.fontWeight = "bold";
    statusText.style.color = "green";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.cursor = "pointer";
});