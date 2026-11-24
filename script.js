async function generateVideo() {
    const prompt = document.getElementById("prompt").value.trim();

    if (!prompt) {
        alert("Please enter a video description.");
        return;
    }

    const button = document.querySelector("button");
    button.textContent = "Generating...";
    button.disabled = true;

    try {
        const response = await fetch("https://phoenix-ai-2v0w.onrender.com/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        alert(
            "Backend connected successfully!\n\n" +
            "Status: " + data.status + "\n" +
            "Prompt: " + data.prompt
        );

    } catch (error) {
        alert("Connection failed: " + error.message);
    }

    button.textContent = "Generate Video";
    button.disabled = false;
}
