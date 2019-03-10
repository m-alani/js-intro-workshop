function buttonClicked() {
    let nameNode = document.getElementById('name'); // Capturing the input field node (DOM)
    let name = nameNode.value; // getting the value for the name
    let headingNode = document.getElementById('header'); // Capturing the heading node (DOM)
    headingNode.textContent += name + '!'; // Changing its text content (by appending to it)
}