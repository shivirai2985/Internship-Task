// Toggle Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// quotes
const quotes = [
    "Every seed planted is a step toward a better tomorrow.",
    "Farmers grow more than crops — they grow hope.",
    "Take care of the land, and it will take care of you.",
    "Green fields today, brighter world tomorrow."
];

let i = 0;
setInterval(() => {
    document.getElementById("quote").innerText = quotes[i];
    i = (i + 1) % quotes.length;
}, 4000);



// Smooth Scroll Button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Fake Form Submit
function submitForm() {
    alert("Message Sent Successfully!");
}