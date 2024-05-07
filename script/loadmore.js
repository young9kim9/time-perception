document.addEventListener("DOMContentLoaded", function() {
    // Get the "Load More" button and the additional paragraphs container
    const loadMoreButton = document.getElementById("loadMoreButton");
    const additionalParagraphs = document.getElementById("additionalParagraphs");

    // Add event listener to the "Load More" button
    loadMoreButton.addEventListener("click", function() {
        // Toggle the display of additional paragraphs
        if (additionalParagraphs.style.display === "none") {
            additionalParagraphs.style.display = "block";
            loadMoreButton.style.display = "none"; // Change button text
        } else {
            additionalParagraphs.style.display = "none";
            loadMoreButton.textContent = "Load More"; // Change button text
        }
    });
});
