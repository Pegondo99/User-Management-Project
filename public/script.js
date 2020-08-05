// Verifies that only two users were selected to be linked.
function verifyLink() {
  let users = document.forms["usersToLinkForm"]["usersToLink"];
  let cont = 0;
  
  // Counts how many users were selected.
  users.forEach(function(entry) {
    if(entry.checked) cont++;
  });
  
  if (cont !== 2) { // If there were more or less than two users selected.
    alert("Links between users are made by only two of them.");
    return false;
  }
  
  // Otherwise.
  return true;
}
