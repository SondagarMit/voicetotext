// Function to paste translated text into WhatsApp Web message field
function pasteTranslatedTextIntoWhatsApp(translatedText) {
    // Find the WhatsApp input field using its CSS selector
    const inputField = document.querySelector('[contenteditable="true"][data-tab="1"]');
    
    // Check if the input field exists
    if (inputField) {
        // Set the value of the input field to the translated text
        inputField.textContent = translatedText;

        // Optionally, trigger the Send button to send the message
        const sendButton = document.querySelector('span[data-icon="send"]');
        if (sendButton) {
            sendButton.click();
        }
    } else {
        console.error("WhatsApp input field not found.");
    }
}
