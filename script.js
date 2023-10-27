// Function to execute when the "*" key is pressed
function executeCommand() {
  // Prompt the user for a message_id
  const message_id = prompt("Enter the message_id:");

  // Check if the user entered a message_id
  if (message_id !== null) {
    // Execute the command with the entered message_id
    utils.GetReactions(message_id);
  }
}

// Listen for the "*" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    executeCommand();
  }
});
