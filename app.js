document.addEventListener("DOMContentLoaded", function() {
    animateLoop("animated-text");
});

function animateLoop(elementId) {
    const element = document.getElementById(elementId);
    const originalText = element.textContent;

    function animate() {
        let displayText = originalText[0];

        for (let i = 1; i < originalText.length; i++) {
            setTimeout(function() {
                displayText += originalText[i];
                element.textContent = displayText;
            }, (i - 1) * 100); 
        }

        setTimeout(erase, (originalText.length - 1) * 100 + 1000); 
    }

    function erase() {
        const textToErase = element.textContent;

        for (let i = textToErase.length - 1; i > 0; i--) {
            setTimeout(function() {
                element.textContent = textToErase.substring(0, i);
            }, (textToErase.length - i - 1) * 100);
        }

        setTimeout(animate, (textToErase.length - 1) * 100 + 50); // Delay before starting the next loop
    }

    animate(); // Start the animation loop
}