// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const photoUrlInput = document.querySelector('input[name="catphotourl"]');
    const photoPreview = document.createElement("img");
    const form = document.querySelector("form");
    const errorElement = document.createElement("div");
  
    // Configure photo preview
    photoPreview.id = "cat-photo-preview";
    form.appendChild(photoPreview); // Add the preview to the form
    form.appendChild(errorElement); // Add error message container
    errorElement.classList.add("error");
  
    // Show photo preview when the user enters a valid URL
    photoUrlInput.addEventListener("input", () => {
      const url = photoUrlInput.value;
  
      // Validate if it's a valid image URL
      if (isValidImageUrl(url)) {
        photoPreview.src = url;
        photoPreview.style.display = "block";
        errorElement.textContent = ""; // Clear error message
      } else {
        photoPreview.style.display = "none";
      }
    });
  
    // Form submission validation
    form.addEventListener("submit", (event) => {
      const url = photoUrlInput.value;
  
      if (!isValidImageUrl(url)) {
        errorElement.textContent = "Please enter a valid image URL.";
        event.preventDefault(); // Prevent form submission
      } else {
        errorElement.textContent = ""; // Clear error message
      }
    });
  
    // Helper function to validate an image URL
    function isValidImageUrl(url) {
      return url.match(/\.(jpeg|jpg|png|gif|webp)$/i);
    }
  
    // Toggle interaction: Alert the user when they select specific options
    const radioButtons = document.querySelectorAll('input[name="indoor-outdoor"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        alert(`You selected: ${event.target.value} cat.`);
      });
    });
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        const action = event.target.checked ? "checked" : "unchecked";
        alert(`You ${action} the "${event.target.value}" personality.`);
      });
    });
  });
  