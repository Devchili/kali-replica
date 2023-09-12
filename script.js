const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
const promptElement = document.querySelector(".prompt");
let commandCount = 0;
let messageDisplayed = false;

// Array of random phrases
const randomPhrases = [
    "That's an interesting command.",
    "I'm processing your request. 160 days remaining....",
    "Searching for clues... but nothing found",
    "Be patient, I'm working on it.",
    "Hmm, this is intriguing.",
    "10% Braincells remaining.",
    "Remember that Google is your friend.",
    "Don't talk to me.",
    "Really!?",
    "Click right for petes sake!"
];

inputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const command = inputElement.value;
        inputElement.value = "";

        // Increment the command count
        commandCount++;

        // Check if the command count reaches 10 and the message hasn't been displayed yet
        if (commandCount === 10 && !messageDisplayed) {
            displayHiddenMessage();
        }

        // Display the user's typed command inline with the prompt
        const userCommand = `<span class="user">root</span>@<span class="host">kali</span>:<span class="directory">~</span>$ ${command}`;
        outputElement.innerHTML += `<div>${userCommand}</div>`;

        // Check if the user entered the "flag" command
        if (command.toLowerCase() === "flag") {
            displayFlagMessage();
        } else {
            // Reply to the user's input with a random phrase
            const randomReply = getRandomPhrase();
            outputElement.innerHTML += `<div>${randomReply}</div>`;
        }

        // Scroll to the bottom of the terminal
        outputElement.scrollTop = outputElement.scrollHeight;
    }
});

function getRandomPhrase() {
    // Generate a random index to select a phrase from the array
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[randomIndex];
}

function displayHiddenMessage() {
    const hiddenMessage = "When you're exploring the digital realm, a keen eye and a little curiosity can often reveal hidden treasures.";
    outputElement.innerHTML += `<div>${hiddenMessage}</div>`;
    // Scroll to the bottom to show the hidden message
    outputElement.scrollTop = outputElement.scrollHeight;
    messageDisplayed = true; // Set a flag to indicate that the message has been displayed
}

function displayFlagMessage() {
    const flagMessage = "Ohhhh, it's not that simple!";
    outputElement.innerHTML += `<div>${flagMessage}</div>`;
    // Scroll to the bottom to show the flag message
    outputElement.scrollTop = outputElement.scrollHeight;
}


//You have talent, i see. Now,look for the robots.