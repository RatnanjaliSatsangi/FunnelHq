// Get the containers
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");

// Get the success message elements
var message = document.getElementById("message");
var messageContent = document.getElementById("messageContent");

// Add event listeners to items for drag and drop
var items = document.querySelectorAll(".draggable");
items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart, false);
});

// Add event listeners to the droppable container
container2.addEventListener("dragenter", handleDragEnter, false);
container2.addEventListener("dragover", handleDragOver, false);
container2.addEventListener("dragleave", handleDragLeave, false);
container2.addEventListener("drop", handleDrop, false);

// Drag start event handler
function handleDragStart(event) {
    // Add a class to the dragged item for styling
    event.target.classList.add("dragging");
}

// Drag enter event handler
function handleDragEnter(event) {
    // Prevent default behavior
    event.preventDefault();
    // Add a class to the droppable container for styling
    event.target.classList.add("droppable");
}

// Drag over event handler
function handleDragOver(event) {
    // Prevent default behavior
    event.preventDefault();
}

// Drag leave event handler
function handleDragLeave(event) {
    // Remove the class from the droppable container
    event.target.classList.remove("droppable");
}

// Drop event handler
function handleDrop(event) {
    // Prevent default behavior
    event.preventDefault();

    // Get the dragged item
    var draggedItem = document.querySelector(".dragging");

    // Remove the class from the droppable container
    event.target.classList.remove("droppable");

    // Append the dragged item to the droppable container
    event.target.appendChild(draggedItem);

    // Show the success message
    showMessage("Item dropped successfully!");
}

// Show the message popup with the given content
function showMessage(content) {
    messageContent.textContent = content;
    message.style.display = "block";
}

// Hide the message popup
function hideMessage() {
    message.style.display = "none";
}

var originalOrder = Array.from(container1.children);
// Reset the containers and message
function resetContainers() {
    // Move all items back to the original container in the original order

    container2.innerHTML = "";
    originalOrder.forEach(function (item) {
        container1.appendChild(item);
    });

    // Hide the message popup
    hideMessage();
}