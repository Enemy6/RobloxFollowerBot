// Get the contact form element
const form = document.getElementById("contact-form");

// Add a submit event listener to the form
form.addEventListener("submit", handleSubmit);

// Define the handleSubmit function to be called when the form is submitted
async function handleSubmit(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the value of the message input field
  const message = document.getElementById("message").value;

  // Make a POST request to the Formspree endpoint with the message data
  try {
    const response = await fetch("https://formspree.io/f/xzbqjalk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    // Check if the request was successful and show a success message
    if (response.ok) {
      alert("Success! The followers will appear in around 24 Hours at max");
      form.reset();
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    // Show an error message if the request failed
    console.error(error);
    alert("Oops! Something went wrong.");
  }
}
