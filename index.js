let form = document.querySelector('form');
let textInput = document.getElementById('entry');
let button = document.getElementById('btn');
let collected = document.getElementById('collected-items');
let fb = document.querySelector('.feedback');



// Start function addItem.
function addItem(event){

    // prevent default behaviour of form
    event.preventDefault();
    
    // Create list-item and store output in a variable.
    let list = document.createElement('li');

    // Check if user entered the value in input text-field.
    if (textInput.value !== '') {
       list.textContent = textInput.value;
       collected.appendChild(list);
      
       // Clear a feedback-message.
       fb.textContent = '';

       // Clear the text-field
       form.reset();

    } else {
        fb.innerText = "Please add items";
    }
  
}

// Register your function addItem for click event on button.
form.addEventListener('submit', addItem);





