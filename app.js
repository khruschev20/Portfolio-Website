// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Fetch Blog Posts from Dev.to API
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://dev.to/api/articles?username=khruschev20');
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        const posts = await response.json();
        const blogPostsContainer = document.getElementById('blogPosts');
        blogPostsContainer.innerHTML = ''; // Clear existing content

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description || 'No description available.'}</p>
                <a href="${post.url}" target="_blank">Read More</a>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchBlogPosts);

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    const projects = [
        { title: 'Expense Tracker App', category: 'App',image:'img/Expense-Tracker.png' ,Link:'https://khruschev20.github.io/Expense-Tracker/', Info:'created an Expense Tracker using HTML, CSS, and JavaScript, allowing users to log and monitor their expenses easily. The interface includes input fields for expense name, amount, and category, along with a button to add entries. JavaScript dynamically updates the list of expenses, displaying them in a structured format. It may also include total calculations to track spending. CSS ensures a clean, responsive, and visually appealing design, making the tracker user-friendly and efficient.', languages:'HTML, CSS, JavaScript'},
        { title: 'Login Page', category: 'web' ,image:'img/Login-Page.png',Link:'https://khruschev20.github.io/Login-Page/', Info:'created a Login Page using HTML and CSS, featuring a clean and modern design. The page includes input fields for a username/email and password, along with a login button for user authentication. CSS enhances the UI with a responsive layout, stylish form elements. The design focuses on simplicity, readability, and usability, making it a functional and visually appealing login interface.', languages:'HTML, CSS'},
        { title: 'DevTask Tracker', category: 'web' ,image:'img/DevTask-Tracker.png',Link:'https://khruschev20.github.io/DevTask-Tracker/', Info:'created a more elaborate DevTask Tracker using HTML, CSS, and JavaScript, designed for managing development tasks efficiently. The interface features an input section for adding tasks, a dynamic task list, and options to edit or delete tasks. JavaScript enables real-time task management by allowing users to modify or remove entries seamlessly. The UI is styled with CSS for a clean, responsive layout, ensuring easy navigation and interaction. This tracker enhances productivity by providing a structured and flexible way to manage development tasks.', languages:'HTML, CSS, JavaScript'},
        { title: 'Job Application Tracker Dashboard', category: 'web' ,image:'img/Job-application-tracker.png',Link:'https://khruschev20.github.io/Job-Application-Tracker-Dashboard/', Info:' created a Job Application Tracker Dashboard using HTML, CSS, and JavaScript, allowing users to manage and track their job applications efficiently. The interface includes a structured dashboard with input fields to log job applications, a table or card layout to display entries, and interactive features like filtering and sorting. JavaScript handles form submissions and dynamically updates the tracker, ensuring real-time feedback by echoing user inputs. CSS enhances the UI with a clean, responsive design, making the dashboard both functional and visually appealing.', languages:'HTML, CSS, JavaScript'},
        { title: 'Work To-Do-List', category: 'App' ,image:'img/Work-to-do-list.png',Link:'https://khruschev20.github.io/To-Do-List/', Info:'created a simple Work To-Do List using HTML, CSS, and JavaScript, functioning like a notepad to display all added tasks. The UI consists of a clean text input area and a display section where tasks appear as plain text entries. JavaScript handles task additions by appending them to the list without. CSS provides a minimal and organized layout, ensuring readability while keeping the interface straightforward and easy to use.', languages:'HTML, CSS, JavaScript'},
        { title: 'ChatBot-UI', category: 'App' ,image:'img/ChatBot-UI.png',Link:'https://khruschev20.github.io/ChatBot-UI/', Info:'created a simple chatbot UI using HTML, CSS, and JavaScript that echoes user responses. The interface features a clean chat window with user-friendly message bubbles, a text input field, and a send button. JavaScript handles user input, displaying messages dynamically in the chat area while returning the same response as feedback. CSS ensures a modern and responsive design, with smooth animations and styling for an engaging user experience.', languages:'HTML, CSS, JavaScript'}
    ];

    projectsGrid.innerHTML = '';
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `<h3>${project.title}</h3></br><img src='${project.image}' width="320" height="160"></br><p>${project.Info}</br><b>Technologies:</b> ${project.languages}.</p></br><a href='${project.Link}'>View Project</a>`;
        projectsGrid.appendChild(projectCard);
    });
}

// List of technologies and frameworks with skill levels (0-100)
const expertiseItems = [
    { title: 'HTML & CSS', description: 'Creating responsive and modern web designs.', level: 90 },
    { title: 'JavaScript (ES6+)', description: 'Building dynamic and interactive web applications.', level: 85 },
    { title: 'Node.js & Express.js', description: 'Developing efficient server-side applications.', level: 70 },
    { title: 'React.js', description: 'Crafting fast and scalable frontend applications.', level: 65 },
    { title: 'SQL & PostgreSQL', description: 'Managing databases and writing optimized queries.', level: 70 },
    { title: 'Git & GitHub', description: 'Version control and collaboration on projects.', level: 95 }
];

// Function to display expertise items
function displayExpertise() {
    const expertiseListContainer = document.getElementById('expertiseList');
    expertiseListContainer.innerHTML = ''; // Clear existing content

    expertiseItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'expertise-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${item.level}%;"></div>
            </div>
        `;
        expertiseListContainer.appendChild(itemElement);
    });
}

// Call function to display expertise on page load
displayExpertise();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchBlogPosts();
    filterProjects('all');
});
