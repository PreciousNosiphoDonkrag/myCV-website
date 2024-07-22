const urlPageTitle = "Nosipho's Portfolio";

document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("[data-link]")) {
        e.preventDefault();
        urlRoute(target.href);
    }
});

const urlRoutes = {
    404: {
        template: "/templates/CoverLetter.html",
        title: "404 | " + urlPageTitle,
        description: "Page not found",
    },
    "/": {
        template: "/templates/CoverLetter.html",
        title: "Cover Letter | " + urlPageTitle,
        description: "This is the cover letter page",
    },
    "/skills": {
        template: "/templates/skills.html",
        title: "Skills | " + urlPageTitle,
        description: "This is the skills page",
    },
    "/projects": {
        template: "/templates/projects.html",
        title: "Projects | " + urlPageTitle,
        description: "This is the projects page",
    },
    "/stack": {
        template: "/templates/stack.html",
        title: "Stack | " + urlPageTitle,
        description: "This is the stack page",
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "Contact | " + urlPageTitle,
        description: "This is the contact page",
    },
};

const urlRoute = (path) => {
    history.pushState({}, "", path);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    const route = urlRoutes[location] || urlRoutes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("dynamic-content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandler;
window.onload = urlLocationHandler;
