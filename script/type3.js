document.addEventListener("DOMContentLoaded", function() {
    const additionalParagraphsContainer = document.getElementById("additionalParagraphs");

    let page = 1; // Track the current page of content to load
    let isLoading = false; // Track if content is currently being loaded

    // Function to fetch more paragraphs when the user reaches the bottom of the page
    function fetchMoreParagraphs() {
        if (!isLoading) { // Ensure only one request is triggered at a time
            isLoading = true;

            // Simulated asynchronous data fetching (e.g., AJAX request)
            setTimeout(function() {
                const newParagraphs = createAdditionalParagraphs(); // Simulated new paragraphs
                additionalParagraphsContainer.appendChild(newParagraphs);

                // Update page number
                page++;

                // Content loading complete
                isLoading = false;

                // Check if there's more content to load (this is just a placeholder condition)
                const moreContentAvailable = page < 5; // Example: Load up to 5 pages of content

                if (!moreContentAvailable) {
                    // If no more content to load, stop monitoring scroll events
                    window.removeEventListener("scroll", handleScroll);
                }

                // Trigger typing effect on the newly added paragraphs
                triggerTypingEffect(newParagraphs.querySelectorAll("p"));
            }, 1000); // Simulated delay (1 second)
        }
    }

    // Function to create new paragraphs (simulated)
    function createAdditionalParagraphs() {
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 5; i++) { // Simulate adding 5 paragraphs at a time
            const paragraph = document.createElement("p");
            paragraph.textContent = `Additional Paragraph ${i}`;
            fragment.appendChild(paragraph);
        }
        return fragment;
    }

    // Function to trigger the typing effect on paragraphs
    function triggerTypingEffect(paragraphs) {
        paragraphs.forEach((paragraph, index) => {
            const text = paragraph.textContent;
            paragraph.textContent = ''; // Clear existing text

            // Use setInterval to simulate typing effect
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    paragraph.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval); // Stop typing effect when complete
                }
            }, 100); // Typing speed (adjust as needed)
        });
    }

    // Function to handle scroll events and trigger content loading
    function handleScroll() {
        // Calculate if the user has scrolled to the bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // User has scrolled to the bottom, fetch more paragraphs
            fetchMoreParagraphs();
        }
    }

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Initial fetch of paragraphs when the page loads
    fetchMoreParagraphs();
});
