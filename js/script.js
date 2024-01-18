function addToCart(productName, price) {
  alert("Added " + productName + " to cart. Total: $" + price);
  // You can implement further logic to handle the cart, e.g., update a shopping cart object
}
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields");
  } else {
    alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email);
    document.getElementById("myForm").reset();
  }
}

const targetTime = Math.floor(new Date().getTime() / 1000) + 4 * 60 * 60;

function updateTimer() {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const remainingTime = targetTime - currentTime;

  if (remainingTime <= 0) {
    document.getElementById("timer").innerHTML = "Sale Over!";
  } else {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    document.getElementById("timer").innerHTML = `${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
}



// Update the timer every second
setInterval(updateTimer, 1000);

// Initial update
updateTimer();


