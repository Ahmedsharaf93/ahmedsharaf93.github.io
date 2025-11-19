document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animate outline with a slight delay
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});

// --- Dynamic Project Loading ---

// URL to the CSV file. 
// Using the Google Sheet provided by the user.
const projectsCsvUrl = 'https://docs.google.com/spreadsheets/d/12eEels6bXA_TB9rsU0bx4iRuu6iGyy5UvCpvGPTFGv4/gviz/tq?tqx=out:csv';

// Function to fetch and parse CSV
function fetchProjects(callback) {
    Papa.parse(projectsCsvUrl, {
        download: true,
        header: true,
        complete: function (results) {
            callback(results.data);
        },
        error: function (err) {
            console.error("Error fetching projects:", err);
            const container = document.getElementById('projects-container');
            if (container) container.innerHTML = '<p>Error loading projects. Please try again later.</p>';
        }
    });
}

// Function to render project cards on index.html
function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return; // Not on index page

    container.innerHTML = ''; // Clear loading message

    projects.forEach(project => {
        if (!project.title) return; // Skip empty rows

        // Determine link: use explicit link if provided, else use generic template with ID
        const link = project.link ? project.link : `project.html?id=${project.id}`;

        // Handle image: use placeholder if empty
        const imageSrc = project.image ? project.image : 'assets/placeholder.jpg';
        // Check if image is a placeholder class or a URL (simple heuristic)
        const imageDiv = imageSrc.includes('/') ?
            `<div class="project-image" style="background-image: url('${imageSrc}');"></div>` :
            `<div class="project-image ${imageSrc}"></div>`; // Fallback for CSS classes if used

        // Parse tags
        const tagsHtml = project.tags ? project.tags.split(';').map(tag => `<li>${tag.trim()}</li>`).join('') : '';

        const cardHtml = `
            <div class="project-card" onclick="window.location.href='${link}'">
                ${imageDiv}
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <ul class="project-tags">
                        ${tagsHtml}
                    </ul>
                    <a href="${link}" class="project-link">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

// Function to render details on project.html
function loadProjectDetails() {
    const container = document.getElementById('dynamic-project-content');
    if (!container) return; // Not on project detail page

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        container.innerHTML = '<p>Project not found.</p>';
        return;
    }

    fetchProjects((projects) => {
        const project = projects.find(p => p.id === projectId);

        if (!project) {
            container.innerHTML = '<p>Project not found.</p>';
            return;
        }

        // Update Page Title
        document.title = `${project.title} | Ahmed Sharaf`;

        // Render Content
        const tagsHtml = project.tags ? project.tags.split(';').map(tag => `<span class="project-tag">${tag.trim()}</span>`).join('') : '';

        const html = `
            <h1 class="project-detail-title">${project.title}</h1>
            <div class="project-meta">
                ${tagsHtml}
            </div>
            
            <div class="project-content-block">
                ${project.content_html ? project.content_html : '<p>No details available for this project.</p>'}
            </div>
        `;

        container.innerHTML = html;
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // If we are on index page, load projects
    if (document.getElementById('projects-container')) {
        fetchProjects(renderProjects);
    }
});
