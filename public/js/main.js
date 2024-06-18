document.addEventListener('DOMContentLoaded', (event) => {
    const quill = new Quill('#editor-container', {
      theme: 'snow'
    });
  
    // Set the initial content of the editor if editing a recipe
    const descriptionInput = document.getElementById('description');
    if (descriptionInput.value) {
      quill.root.innerHTML = descriptionInput.value;
    }
  
    const form = document.querySelector('form');
    form.onsubmit = function() {
      // Populate hidden form field with the content from Quill editor
      descriptionInput.value = quill.root.innerHTML;
    };
  });
  