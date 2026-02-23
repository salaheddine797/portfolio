

const projects = [
  {
    img: "images/food-website.png",
    title: "Food Website",
    description: "A modern food ordering website built with HTML, CSS, JS and PHP.",
    link: "https://github.com/salaheddine797/food_website"
  },
  {
    img: "images/store.png",
    title: "Store Website",
    description: "A website for ordering t-shirts, hoodies, and shoes, created with HTML, CSS, and PHP.",
    link: "https://github.com/salaheddine797/store"
  },
  {
    img: "images/movie-app.png",
    title: "Movie App",
    description: "Movie app using API to display popular movies with details page.",
    link: "https://github.com/salaheddine797/movie_app"
  }
];

const container = document.querySelector(".projects-container");

document.addEventListener("DOMContentLoaded", () => {
  projects.forEach(project => {
    container.innerHTML += `
      <div class="project-card">
        <img src="${project.img}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="project-btn">
          View on GitHub
        </a>
      </div>
    `;
  });
});



function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");

  let valid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  return valid;
}

function sendWhatsApp() {
  if (validateForm()) {
    let name = document.getElementById("name").value;
    let company = document.getElementById("company").value;
    let email = document.getElementById("email").value;

    let message = `Hello, my name is ${name} from ${company}. My email is ${email}`;
    let phone = "212631020140"; // PHONE NUMBER

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }
}

function sendGmail() {
  if (validateForm()) {
    let name = document.getElementById("name").value;
    let company = document.getElementById("company").value;
    let email = document.getElementById("email").value;

    let subject = "Contact from Portfolio";
    let body = `Hello,\n\nMy name is ${name} from ${company}.\nMy email: ${email}`;

    window.location.href = `mailto:salahedd.r77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}


const toggleBtn = document.getElementById("themeToggle");

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});