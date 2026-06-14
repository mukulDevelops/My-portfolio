// ==========================================
// 1. SELECT YOUR ELEMENTS
// Here, we grab the specific HTML elements by their IDs 
// and store them in variables so JavaScript can talk to them.
// ==========================================
const nounInput = document.getElementById('nounInput');
const animalInput = document.getElementById('animalInput');
const resetBtn = document.getElementById('resetBtn');
const poeticBtn = document.getElementById('poeticBtn');
const poemOutput = document.getElementById('poemOutput');

// ==========================================
// 2. THE "MAKE IT POETIC" ACTION
// We attach an 'Event Listener' to listen for a click on our main button.
// ==========================================
poeticBtn.addEventListener('click', function() {
    
    // Grab the actual text the user typed into the input boxes.
    // The .trim() method removes any accidental extra spaces before or after the word.
    const noun = nounInput.value.trim();
    const animal = animalInput.value.trim();

    // Safety Check: Did they leave a box blank?
    if (noun === "" || animal === "") {
        // If empty, show an error message and make the text red using Bootstrap classes
        poemOutput.textContent = "Please enter both a noun and an animal!";
        poemOutput.className = "mt-4 fs-5 text-danger"; 
        return; // This stops the rest of the function from running
    }

    // Create our sentence using Template Literals (the backticks ``)
    // The ${} syntax allows us to easily inject our variables right into the string!
    const poem = `Behold! The majestic ${animal} leaps gracefully over the glowing ${noun}.`;

    // Take our new sentence and push it to the screen
    poemOutput.textContent = poem;
    poemOutput.className = "mt-4 fs-5 text-primary"; // Ensure text is our nice blue color
});

// ==========================================
// 3. THE "RESET" ACTION
// We attach an 'Event Listener' to listen for a click on the reset button.
// ==========================================
resetBtn.addEventListener('click', function() {
    
    // Clear out the input boxes
    nounInput.value = "";
    animalInput.value = "";
    
    // Clear out the generated poem text
    poemOutput.textContent = "";
});