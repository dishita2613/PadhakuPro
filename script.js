function handleSignup() {
    alert("Redirecting to signup page...");
}
function handleLogin() {
    alert("Redirecting to login page...");
}
function exploreCourses() {
    alert("Exploring free courses...");
}
function getRecommendation() {
    alert("Getting personalized recommendations...");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hero-img").classList.add("show");
});
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.2 });

    features.forEach(feature => observer.observe(feature));
});

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stops observing after animation
            }
        });
    }, { threshold: 0.2 });

    features.forEach(feature => observer.observe(feature));
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Sign-up successful! (Backend functionality needed)");
    });
});
function toggleCourses() {
    let courseSection = document.getElementById("course-section");
    
    if (courseSection.classList.contains("show")) {
        courseSection.classList.remove("show");
        setTimeout(() => {
            courseSection.style.display = "none";
        }, 500); // Delay hiding to allow animation
    } else {
        courseSection.style.display = "block";
        setTimeout(() => {
            courseSection.classList.add("show");
        }, 10); // Small delay for animation effect
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".courses-container");
    const scrollLeftBtn = document.querySelector(".scroll-left");
    const scrollRightBtn = document.querySelector(".scroll-right");

    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
        // Enable smooth scrolling when clicking navigation buttons
        scrollLeftBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
        });

        scrollRightBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        });

        // Check when to hide or show buttons based on scroll position
        function updateButtons() {
            scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
            scrollRightBtn.style.display =
                scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth ? "block" : "none";
        }

        // Update button visibility on scroll
        scrollContainer.addEventListener("scroll", updateButtons);
        updateButtons(); // Initialize button visibility
    }
});

   // List of courses and their respective pages
const courses = {
    "Python for Beginners": "py-course-details.html?course=python",
    "JavaScript Essentials": "js-course-details.html?course=javascript",
    "Complete Java Development": "java-course-details.html?course=java",
    "C++ Programming Masterclass": "cpp-course-details.html?course=cpp",
    "HTML & CSS Mastery": "html&css-course-details.html?course=html-css",
    "React.js for Web Development": "react.js-course-details.html?course=react",
    "Machine Learning Basics": "ml-course-details.html?course=ml",
    "Artificial Intelligence": "ai-course-details.html?course=ai",
    "Deep Learning": "dl-course-details.html?course=deep-learning",
    "UI/UX Design Mastery": "ui-course-details.html?course=uiux",
    "Data Science Essentials": "datascience-course-details.html?course=ds",
    "Cloud Computing": "cloudcomputing-course-details.html?course=cloud"
};

// Show search suggestions
function showSuggestions() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let suggestionsDiv = document.getElementById("suggestions");

    // Clear previous suggestions
    suggestionsDiv.innerHTML = "";

    // If input is empty, hide suggestions
    if (input === "") {
        suggestionsDiv.style.display = "none";
        return;
    }

    // Filter courses based on input
    let filteredCourses = Object.keys(courses).filter(course =>
        course.toLowerCase().includes(input)
    );

    // Show suggestions
    filteredCourses.forEach(course => {
        let suggestionItem = document.createElement("div");
        suggestionItem.textContent = course;
        suggestionItem.onclick = function () {
            window.location.href = courses[course]; // Redirect to course page
        };
        suggestionsDiv.appendChild(suggestionItem);
    });

    // Display suggestions box
    suggestionsDiv.style.display = "block";
}

// Hide suggestions when clicking outside
document.addEventListener("click", function (e) {
    if (!document.getElementById("search-input").contains(e.target)) {
        document.getElementById("suggestions").style.display = "none";
    }
}); 

document.addEventListener("DOMContentLoaded", function () {
    // Handle Sign-Up Form Submission
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get the container
            const authContainer = document.querySelector(".auth-container");

            // Show success message
            authContainer.innerHTML = `
                <h2>Account Created Successfully!</h2>
                <p>Redirecting to login page...</p>
            `;

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect to login
            }, 2000);
        });
    }

    // Handle Login Form Submission
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get the container
            const authContainer = document.querySelector(".auth-container");

            // Show success message
            authContainer.innerHTML = `
                <h2>Logged in Successfully!</h2>
                <p>Redirecting to homepage...</p>
            `;

            // Redirect to homepage after 2 seconds
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to homepage
            }, 2000);
        });
    }
});