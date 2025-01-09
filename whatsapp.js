// Function to paste translated text into WhatsApp Web input
function pasteTranslatedTextIntoWhatsApp(translatedText) {
    try {
        // Query the WhatsApp message input field
        const messageInputField = document.querySelector('div[contenteditable="true"][data-tab="10"]');
        
        if (messageInputField) {
            // Focus the input field
            messageInputField.focus();
            
            // Set the translated text into the input field
            document.execCommand('insertText', false, translatedText);
            
            // Optionally, you can trigger a key event if you want to simulate a "paste" action
            const event = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            messageInputField.dispatchEvent(event);
        } else {
            console.error('WhatsApp input field not found!');
        }
    } catch (error) {
        console.error('Error while pasting text into WhatsApp:', error);
    }
}
