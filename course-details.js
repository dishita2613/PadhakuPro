document.addEventListener("DOMContentLoaded", function () {
    console.log("course-details.js loaded"); // ✅ Debug

    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("course");
    console.log("Course ID from URL:", courseId); // ✅ Debug

    // Course Data
    const courses = {
        "python": {
            title: "Python for Beginners",
            video: "https://www.youtube.com/embed/QoIRX37VZpo?si=gVtPDA7wV_ScX9Ib",
            syllabus: ["Introduction to Python", "Data Types & Variables", "Control Flow", "Functions & Modules", "Object-Oriented Programming"]
        },
        "javascript": {
            title: "JavaScript Essentials",
            video: "https://www.youtube.com/embed/JEpY9C49sqU?si=8Parx1SfvxHyCkW5",
            syllabus: ["JS Basics", "DOM Manipulation", "ES6 Features", "Async JS", "APIs & Fetch"]
        },
        "java": {
            title: "Complete Java Development",
            video: "https://www.youtube.com/embed/F8OUyGjsTXk?si=RwejBf-RSWP4tIU7",
            syllabus: ["Java Basics", "OOP in Java", "Collections Framework", "Multithreading", "Spring Boot"]
        },
        "cpp": {
            title: "C++ Programming Masterclass",
            video: "https://www.youtube.com/embed/q1ZmFc-sqNc?si=kv0_9ic_5hzlLFsh",
            syllabus: ["C++ Syntax", "Pointers", "OOP in C++", "STL", "Memory Management"]
        },
        "html-css": {
            title: "HTML & CSS Mastery",
            video: "https://www.youtube.com/embed/1uOnZWGc51w?si=g1xw6YK_7suxs8PN",
            syllabus: ["HTML Basics", "CSS Fundamentals", "Flexbox & Grid", "Responsive Design", "CSS Animations"]
        },
        "react": {
            title: "React.js for Web Development",
            video: "https://www.youtube.com/embed/SqcY0GlETPk?si=OdIAX9pbmxiaOVML",
            syllabus: ["React Basics", "JSX & Components", "State Management", "React Router", "Hooks"]
        },
        "machine-learning": {
            title: "Machine Learning Basics",
            video: "https://www.youtube.com/embed/1vsmaEfbnoE?si=EB0GWgo_Vq-BA1Sj",
            syllabus: ["Introduction to ML", "Linear Regression", "Decision Trees", "Random Forest"]
        },
        "Artificial-Intelligence": {
            title: "Artificial Intelligence",
            video: "https://www.youtube.com/embed/JMUxmLyrhSk?si=FJPRr5rcVNUxNbMi",
            syllabus: ["Introduction to AI", "Machine Learning", "Deep Learning", "Natural Language"]
        },
        "Deep-Learning": {
            title: "Deep Learning",
            video: "https://www.youtube.com/embed/ajeTYqhRHno?si=vB18-1j0BxO9JRdL",
            syllabus: ["Introduction to Deep Learning", "Convolutional Neural Networks", "Recurrent Neural Networks"]
        },
        "UI-UX Design": {
            title: "UI-UX Design",
            video: "https://www.youtube.com/embed/xmmzG6aiWJE?si=6A4cqPsNqxigSltp",
            syllabus: ["Introduction to UI-UX", "User Research", "Wireframing"]
        },
        "Data-Science": {
            title: "Data Science Essentials",
            video: "https://www.youtube.com/embed/gWcprFvPrEQ?si=b4ciEjnAR-liun6r",
            syllabus: ["Introduction to Data Science", "Data Preprocessing", "Data Visualization"]
        },
        "Cloud-Computing": {
            title: "Cloud Computing",
            video: "https://www.youtube.com/embed/8C_kHJ5YEiA?si=1BJFXa3JRfTjcgrT",
            syllabus: ["Introduction to Cloud Computing", "Cloud Security", "Cloud Migration"]
        }
    };

    // Load Course Details
    function loadCourseDetails() {
        if (courseId && courses[courseId]) {
            const course = courses[courseId];

            document.getElementById("course-title").textContent = course.title;

            // Check if the video is a YouTube link
            const videoContainer = document.getElementById("video-container");
            videoContainer.innerHTML = ""; // Clear previous content

             (course.video.includes("youtube.com/embed")) 
                // Use an <iframe> for YouTube videos
                const iframe = document.createElement("iframe");
                iframe.src = course.video;
                iframe.width = "560";
                iframe.height = "315";
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                videoContainer.appendChild(iframe);
            
            // Load syllabus
            const syllabusList = document.getElementById("course-syllabus");
            syllabusList.innerHTML = ""; // Clear existing list
            course.syllabus.forEach(topic => {
                const li = document.createElement("li");
                li.textContent = topic;
                syllabusList.appendChild(li);
            });

        }
    }

    // Navigate Back
    function goBack() {
        window.location.href = "course.html";
    }

    // Run on page load
    window.onload = loadCourseDetails;
});
document.querySelectorAll(".syllabus-toggle").forEach(button => {
    button.addEventListener("click", function () {
        const syllabusItem = this.parentElement;
        syllabusItem.classList.toggle("active");

        const content = syllabusItem.querySelector(".syllabus-content");
        if (syllabusItem.classList.contains("active")) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

function loadCourse() {
    const params = new URLSearchParams(window.location.search);
    const courseKey = params.get("course");

    if (courseData[courseKey]) {
        document.getElementById("course-title").textContent = courseData[courseKey].title;
        document.getElementById("course-video").src = courseData[courseKey].video;
        
        let syllabusList = document.getElementById("course-syllabus");
        syllabusList.innerHTML = "";
        
        courseData[courseKey].syllabus.forEach(topic => {
            let li = document.createElement("li");
            li.textContent = topic;
            syllabusList.appendChild(li);
        });
    } else {
        document.querySelector(".course-details").innerHTML = "<h1>Course Not Found</h1>";
    }
}

// Run function on page load
window.onload = loadCourse;