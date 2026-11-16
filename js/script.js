/* ========================================
   DATA  (edit content here)
======================================== */

const projects = [
    {
        title: "AI Enhancer Toolkit",
        status: "In development",
        description:
            "A Python image-processing app with a drag-and-drop desktop interface. Current tools include resize, crop, blur, and sharpen; AI enhancement is planned.",
        technologies: ["Python", "Tkinter", "TkinterDnD2", "OpenCV", "PyTorch", "NumPy", "BasicSR", "Real-ESRGAN"],
        repository: "https://github.com/Erics12487254/Ai-Enhancer-Toolkit",
        demo: "",
        image: "Sources/Images/Ai_Enhancer_Toolkit.png"
    },
    {
        title: "Edamame Perfume",
        status: "Ready",
        description:
            "A perfume e-commerce website that allows customers to browse and purchase fragrances, with an option to customize their own perfumes based on personal preferences.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        repository: "",
        demo: "https://lwindoubleomega.github.io/EdamamePerfume/",
        image: "Sources/Images/EDAMAME_Perfume.png"
    },
    {
        title: "Oat of Ashes",
        status: "Ready",
        description:
            "A game jam-winning 2D adventure game that follows a hero's journey as they battle against invading orcs.",
        technologies: ["Godot Engine", "GDScript", "2D Game Development"],
        repository: "https://github.com/Erics12487254/Oat-of-Ashes-Game-Jam-Competition-Project",
        demo: "",
        image: "Sources/Images/Oat_of_Ashes.jpg"
    },
    {
        title: "Image Upscaling Lab",
        status: "Ready",
        description:
            "An experiment lab to explore image upscaling by comparing Bicubic, ESPCN, and Real-ESRGAN, and measuring their results with PSNR, SSIM, and runtime.",
        technologies: ["Python", "OpenCV", "NumPy", "ESPCN", "Real-ESRGAN", "Bicubic Interpolation", "PSNR", "SSIM", "Image Processing", "Computer Vision"],
        repository: "https://github.com/Erics12487254/Image-Upscaling-Lab",
        demo: "",
        image: "Sources/Images/Image_Upscaling_Lab.jpg"
    }
];

const achievements = [
    {
        title: "Cisco Cybersecurity Beginners",
        issuer: "Cisco Networking Academy",
        year: "2024",
        pdf: "Documents/cisco cybersecurity beginner 2024.pdf"
    },
    {
        title: "Network Technician Career Path",
        issuer: "Cisco Networking Academy",
        year: "2024",
        pdf: "Documents/cisco networking academy 2024.pdf"
    },
    {
        title: "N5 Certificate in Japanese Language Proficiency (Unofficial)",
        issuer: "CIC Japanese Language Center",
        year: "2026",
        pdf: "Documents/N5_certificate_Unofficial.pdf"
    }
];

// Choose the items shown in Highlights by title.
const projectHighlights = ["AI Enhancer Toolkit", "Oat of Ashes"];
const achievementHighlights = ["Cisco Cybersecurity Beginners", "Network Technician Career Path", "N5 Certificate in Japanese Language Proficiency (Unofficial)"];

const skills = [
    {
        category: "Programming",
        technologies: ["Python", "CSS", "JavaScript", "Object-oriented programming"]
    },
    {
        category: "Image Processing",
        technologies: ["Python", "OpenCV", "Image enhancement"]
    },
    {
        category: "Data & Systems",
        technologies: ["SQL", "Database design", "Networking fundamentals"]
    },
    {
        category: "Machine Learning & AI",
        technologies: [
            "Machine Learning Fundamentals",
            "Neural Networks",
            "Super-Resolution",
            "PyTorch"
        ]
    },
    {
        category: "Data Analysis",
        technologies: ["Data Analysis", "Data Visualization", "Data Interpretation"]
    },
    {
        category: "Development Tools",
        technologies: ["Git", "GitHub", "VS Code"]
    }
];

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Erics12487254",
        icon: "fa-brands fa-github"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/han-htoo-aung-0a1856352",
        icon: "fa-brands fa-linkedin"
    },
    {
        name: "Email",
        url: "mailto:hanhtooaung393@gmail.com",
        icon: "fa-solid fa-envelope"
    },
    {
        name: "Resume",
        url: "Documents/Resume.pdf",
        icon: "fa-solid fa-file-pdf"
    }
];


/* ========================================
   SETTINGS & DOM ELEMENTS
======================================== */

const WELCOME_DURATION = 2000; // ms before the welcome screen hides itself
const WELCOME_FADE = 500;      // ms, should match the CSS transition

const elements = {
    projects: document.getElementById("project-container"),
    achievements: document.getElementById("achievement-container"),
    projectHighlights: document.getElementById("project-highlights"),
    achievementHighlights: document.getElementById("achievement-highlights"),
    skills: document.getElementById("skills-container"),
    socials: document.getElementById("social-container"),
    year: document.getElementById("current-year"),
    welcome: document.getElementById("welcome-screen"),
    skipWelcome: document.getElementById("skip-intro")
};


/* ========================================
   HELPERS
======================================== */

function createElement(tag, className = "", text = "") {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text) element.textContent = text;

    return element;
}

// External links open in a new tab; mailto links do not.
function applyLinkTarget(link, url) {
    link.href = url;

    if (!url.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }
}

function makeLink(label, url, className = "text-link") {
    if (!url) return null;

    const link = createElement("a", className, label);
    applyLinkTarget(link, url);

    return link;
}

function createIcon(className) {
    const icon = createElement("i", className);
    icon.setAttribute("aria-hidden", "true");

    return icon;
}

function formatNumber(index) {
    return String(index + 1).padStart(2, "0");
}

function createNumber(index, className) {
    return createElement("span", className, formatNumber(index));
}

// Renders a list of items into a container, or an empty message.
function renderList(container, items, createCard, emptyMessage) {
    if (!container) return;

    if (items.length === 0) {
        container.append(createElement("p", "empty-state", emptyMessage));
        return;
    }

    items.forEach((item, index) => {
        container.append(createCard(item, index));
    });
}

/* ========================================
   PROJECTS
======================================== */

function createProjectPreview(project) {
    const preview = createElement("div", "project-preview");

    if (project.video) {
        const video = createElement("video");
        video.src = project.video;
        video.controls = true;
        video.preload = "metadata";
        video.setAttribute("aria-label", `${project.title} demo video`);

        preview.append(video);
    } else if (project.image) {
        const image = createElement("img");
        image.src = project.image;
        image.alt = `${project.title} preview`;
        image.loading = "lazy";

        preview.append(image);
    } else {
        preview.append(createElement("span", "preview-placeholder", "PROJECT PREVIEW"));
    }

    return preview;
}

function createProjectMeta(project, index) {
    const meta = createElement("div", "project-card-meta");

    meta.append(createElement("span", "project-number", `PROJECT ${formatNumber(index)}`));

    if (project.status) {
        meta.append(createElement("span", "status-pill", project.status));
    }

    return meta;
}

function createTagList(technologies = []) {
    const tags = createElement("ul", "tag-list");
    tags.setAttribute("aria-label", "Technologies");

    technologies.forEach((technology) => {
        tags.append(createElement("li", "", technology));
    });

    return tags;
}

function createProjectLinks(project) {
    const links = createElement("div", "project-links");

    [
        makeLink("GitHub repository ↗", project.repository),
        makeLink("View demo ↗", project.demo)
    ]
        .filter(Boolean)
        .forEach((link) => links.append(link));

    return links;
}

function createProjectCard(project, index) {
    const card = createElement("article", "project-card card reveal");
    const body = createElement("div", "project-card-body");

    body.append(
        createProjectMeta(project, index),
        createElement("h3", "", project.title),
        createElement("p", "project-description", project.description),
        createTagList(project.technologies),
        createProjectLinks(project)
    );

    card.append(createProjectPreview(project), body);

    return card;
}


/* ========================================
   ACHIEVEMENTS
======================================== */

function createAchievementCard(achievement, index) {
    const card = createElement("article", "achievement-card card reveal");

    const details = createElement(
        "p",
        "achievement-details",
        [achievement.issuer, achievement.year].filter(Boolean).join(" · ")
    );

    card.append(
        createNumber(index, "achievement-number"),
        createElement("h3", "", achievement.title),
        details
    );

    const pdf = makeLink("View certificate (PDF) ↗", achievement.pdf);
    if (pdf) card.append(pdf);

    return card;
}


/* ========================================
   SKILLS
======================================== */

function createSkillCard(skill, index) {
    const card = createElement("article", "skill-card reveal");

    card.append(
        createNumber(index, "skill-number"),
        createElement("h3", "", skill.category),
        createElement("p", "", (skill.technologies || []).join(" · "))
    );

    return card;
}


/* ========================================
   SOCIAL LINKS
======================================== */

function createSocialLink(social) {
    if (!social.url || social.url.startsWith("YOUR_")) return null;

    const link = createElement("a", "social-link");
    applyLinkTarget(link, social.url);

    link.append(
        createIcon(social.icon),
        createElement("span", "", social.name)
    );

    if (!social.url.startsWith("mailto:")) {
        link.append(createIcon("fa-solid fa-arrow-up-right-from-square"));
    }

    return link;
}

function renderSocialLinks() {
    if (!elements.socials) return;

    socialLinks.forEach((social) => {
        const link = createSocialLink(social);
        if (link) elements.socials.append(link);
    });
}


/* ========================================
   SCROLL FADE-IN
======================================== */

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        animatedElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.15 }
    );

    animatedElements.forEach((element) => observer.observe(element));
}


/* ========================================
   WELCOME SCREEN
======================================== */

function setupWelcome() {
    const { welcome, skipWelcome } = elements;

    if (!welcome) return;

    const dismiss = () => {
        welcome.classList.add("is-hidden");
        window.setTimeout(() => welcome.remove(), WELCOME_FADE);
    };

    const timer = window.setTimeout(dismiss, WELCOME_DURATION);

    skipWelcome?.addEventListener("click", () => {
        window.clearTimeout(timer);
        dismiss();
    });
}


/* ========================================
   INITIALIZATION
======================================== */

function initializePortfolio() {
    renderList(
        elements.projectHighlights,
        projects.filter((project) => projectHighlights.includes(project.title)),
        createProjectCard,
        "Choose featured projects in the Highlights data above."
    );

    renderList(
        elements.achievementHighlights,
        achievements.filter((achievement) => achievementHighlights.includes(achievement.title)),
        createAchievementCard,
        "Choose featured achievements in the Highlights data above."
    );

    renderList(
        elements.projects,
        projects,
        createProjectCard,
        "Projects will appear here as they are added."
    );

    renderList(
        elements.achievements,
        achievements,
        createAchievementCard,
        "Certificates and achievements will be added here."
    );

    renderList(
        elements.skills,
        skills,
        createSkillCard,
        "Skills will appear here as they are added."
    );

    renderSocialLinks();

    // Must run after the cards exist, so it can find the .reveal elements.
    setupScrollAnimations();
    setupWelcome();

    if (elements.year) {
        elements.year.textContent = String(new Date().getFullYear());
    }
}

initializePortfolio();
