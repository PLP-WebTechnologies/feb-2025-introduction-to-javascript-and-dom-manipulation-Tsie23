// Change Text Content Dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("title").textContent = "JavaScript is Fun!";
    document.getElementById("description").textContent = "Amazing.. You just changed my text!";
});

// Modify CSS Styles via JavaScript
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    document.getElementById("title").style.color = "green"; // Change text color
    document.getElementById("title").style.fontSize = "30px"; // Increase font size
});

// Add or Remove an Element
document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let contentDiv = document.getElementById("extraContent");

    if (contentDiv.innerHTML === "") {
        contentDiv.innerHTML = "<p>JS Magic! New content added.</p>"; // Add a paragraph
    } else {
        contentDiv.innerHTML = ""; // Remove the content
    }
});