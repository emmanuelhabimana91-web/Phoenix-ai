function generateVideo() {
    let prompt = document.getElementById("prompt").value;

    if (prompt === "") {
        alert("Please enter a video description.");
    } else {
        alert("You entered: " + prompt);
    }
}
