function generateVideo() {
    const prompt = document.getElementById("prompt").value.trim();

    if (prompt === "") {
        alert("Please enter a video description.");
        return;
    }

    const button = document.querySelector("button");
    button.textContent = "Generating...";
    button.disabled = true;

    setTimeout(() => {
        alert("Your prompt is:\n\n" + prompt + "\n\nPhoenix AI is not connected to a video model yet.");
        button.textContent = "Generate Video";
        button.disabled = false;
    }, 2000);
}
