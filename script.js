  document.querySelector(".button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form fields
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Message").value.trim();

    // Error divs
    const formError = document.getElementById("formError");
    const emailError = document.getElementById("EmailError");
    const messageError = document.getElementById("MessageError");

    // Reset error states
    formError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validate input fields
    let isValid = true;

    if (email === "") {
      emailError.style.display = "flex";
      isValid = false;
    }

    if (message === "") {
      messageError.style.display = "flex";
      isValid = false;
    }

    if (!isValid) {
      formError.style.display = "flex"; // Show the general form error if any validation fails
    }

    // If valid, you can proceed with form submission or further handling
    if (isValid) {
      // Form is valid - you can submit the form or handle it as needed
      console.log("Form submitted");
        document.getElementById("contact-form").replaceChildren("Thank you")

    }
  });
