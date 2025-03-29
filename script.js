document.addEventListener("DOMContentLoaded", () => {
    const resumeButton = document.getElementById("resume-button");

    resumeButton.addEventListener("click", () => {
        const resumeUrl = "Krish Arora - Resume.pdf"; // Path to your resume file

        // Open the resume in a new tab and trigger the download
        const newTab = window.open(resumeUrl, "_blank"); // Open in a new tab
        if (newTab) {
            // If the new tab successfully opens, trigger the download
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.download = "Krish Arora - Resume.pdf"; // Set the downloaded file name
            link.click(); // Trigger the download
        } else {
            alert("Please allow popups for this website to download the resume.");
        }
    });
});