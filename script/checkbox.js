function addNewCheckbox(checkbox) {
    // Create a new checkbox element
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'checkbox';
    newCheckbox.onchange = function() {
        addNewCheckbox(this); // Recursively add new checkbox when this one is checked
    };

    // Append the new checkbox to the container
    const container = document.getElementById('checkboxContainer');
    container.appendChild(newCheckbox);

    // Append label for the new checkbox
    const newLabel = document.createElement('label');
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(document.createTextNode(' revise'));
    container.appendChild(newLabel);

    // Check the original checkbox to disable further additions
    checkbox.checked = true;
}