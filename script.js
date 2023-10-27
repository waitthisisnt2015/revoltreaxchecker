
function executeCommand() {

  const message_id = prompt("Enter the message_id:");


  if (message_id !== null) {

    utils.GetReactions(message_id);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    executeCommand();
  }
});
