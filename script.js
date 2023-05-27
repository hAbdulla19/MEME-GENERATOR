// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  var form = document.getElementById("memeForm");

  // Get the meme container
  var memeContainer = document.getElementById("memeContainer");

  // Add an event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var topText = document.getElementById("topText").value;
    var bottomText = document.getElementById("bottomText").value;
    var imageURL = document.getElementById("imageURL").value;
    var imageUpload = document.getElementById("imageUpload").files[0];

    // Validate the input values
    if (!topText || !bottomText || (!imageURL && !imageUpload)) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new meme div
    var memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    // Create the meme image element
    var image = document.createElement("img");
    if (imageURL) {
      image.src = imageURL;
    } else if (imageUpload) {
      var reader = new FileReader();
      reader.onload = function(e) {
        image.src = e.target.result;
      };
      reader.readAsDataURL(imageUpload);
    }

    // Create the top text element
    var topTextElement = document.createElement("p");
    topTextElement.classList.add("top-text");
    topTextElement.innerText = topText;

    // Create the bottom text element
    var bottomTextElement = document.createElement("p");
    bottomTextElement.classList.add("bottom-text");
    bottomTextElement.innerText = bottomText;

    // Create the delete button
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "X";

    // Add an event listener for delete button
    deleteButton.addEventListener("click", function() {
      memeContainer.removeChild(memeDiv);
    });

    // Append the image and text elements to the meme div
    memeDiv.appendChild(image);
    memeDiv.appendChild(topTextElement);
    memeDiv.appendChild(bottomTextElement);
    memeDiv.appendChild(deleteButton);

    // Append the meme div to the container
    memeContainer.appendChild(memeDiv);

    // Reset the form values
    form.reset();
  });
});
