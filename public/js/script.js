document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    console.log(formData);

    // Send form data via AJAX using fetch
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Display success message
          confirmation.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        Thank you, ${formData.name}! Your message has been sent.
                    </div>
                `;
          contactForm.reset(); // Clear form
        } else {
          // Display error message
          confirmation.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Oops! Something went wrong. Please try again later.
                    </div>
                `;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        confirmation.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Oops! Something went wrong. Please try again later.
                </div>
            `;
      });
  });
});
