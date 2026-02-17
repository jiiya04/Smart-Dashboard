const addEventBtn = document.getElementById("addEventBtn");
const clearEventsBtn = document.getElementById("clearEventsBtn");
const eventsContainer = document.getElementById("eventsContainer");

addEventBtn.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (title === "" || date === "") {
    alert("Please enter title and date");
    return;
  }

  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-item");

  eventDiv.innerHTML = `
    <h4>${title}</h4>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p>${description}</p>
    <button class="delete-btn">Delete</button>
  `;

  eventDiv.querySelector(".delete-btn").addEventListener("click", function () {
    eventDiv.remove();
  });

  eventsContainer.appendChild(eventDiv);

  // Clear inputs after adding
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
});

clearEventsBtn.addEventListener("click", function () {
  eventsContainer.innerHTML = "";
});
