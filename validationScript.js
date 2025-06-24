    // JavaScript code for form validation
        // validationScript.js
document.addEventListener('DOMContentLoaded', () => {
  const form  = document.getElementById('myForm');
  const input = document.getElementById('inputField');
  // Retrieve the input field value
  
  const msg = document.createElement('p');
  msg.style.marginTop = '8px';
  form.appendChild(msg);

   // Regular expression pattern for alphanumeric input
  const alphaNumRE = /^[a-z0-9]+$/i;
  // Prevent form from submitting
  form.addEventListener('submit', (e) => {
    e.preventDefault();                 // Always stop the default submit
    const value = input.value.trim();   // Ignore any leading/trailing spaces
    // Check if the input value matches the pattern
    if (!alphaNumRE.test(value)) {
     // Invalid input: display error message  
    
      msg.textContent = 'Error: please use letters and/or numbers only.';
      msg.style.color = 'crimson';
      input.focus();
    } else {
      // Valid input: display confirmation and submit the form
      
      msg.textContent = `✔ “${value}” accepted — form submitted.`;
      msg.style.color = 'green';

      
      form.reset();
    }
  });
});