// page: contact
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("Please fill out all required fields.");
      return false;
    }
  }
  
// scroll button
window.onscroll = function() {
    let button = document.getElementById("scroll");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
};

document.getElementById("scroll").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// journal prompts
const prompts = [
    "What are you grateful for today?",
    "Describe a time when you overcame a challenge.",
    "What are your top priorities in life right now?",
    "What is something that has been on your mind lately?",
    "Write about a moment when you felt truly happy.",
    "What is something you would like to learn?",
    "What is your biggest fear?",
    "Describe a person who has had a positive impact on your life.",
    "What is something you have been procrastinating on?",
    "What is a goal you have for the next year?",
    "Write about a difficult decision you had to make.",
    "What is a mistake you have learned from?",
    "What is a habit you would like to change?",
    "Write about a time when you felt proud of yourself.",
    "What is something that makes you feel calm?",
    "What is a skill you would like to improve?",
    "Describe a place that holds special meaning to you.",
    "What is something you would like to achieve in your career?",
    "What is a challenge you are currently facing?",
    "Write about a book or movie that had an impact on you.",
  ];
  
  function generatePrompt() {
    const promptIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[promptIndex];
    document.getElementById("prompt").innerHTML = prompt;
  }
  generatePrompt();

//   page: puppies - also not working?
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
