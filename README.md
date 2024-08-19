# Single Page Application (SPA) with JavaScript Routing
This project is a simple Single Page Application (SPA) that uses JavaScript to handle client-side routing.
The application dynamically loads different HTML content into a single page based on the URL path without reloading the entire page.
## A short video of this website is under "website video"
![website](https://github.com/user-attachments/assets/48a78ebe-964f-491e-9d33-effc030bb55c)

## Features
Dynamic Content Loading: Fetches and injects HTML content based on the current URL.
404 Handling: Displays a 404 page if the route is not found.
## Project Structure
- index.html: The main entry point with a navigation bar.
- js/js-router.js: JavaScript file that manages routing logic.
- /templates/: Folder containing HTML templates for each route.
- /css/: (Optional) Folder for custom stylesheets.
## Usage
- Clone the repository.
- Serve the project using a local server (e.g., Live Server in VSCode).
- Navigate through the application using the navbar.
- Navigation Routes
  - /: Loads the "About Me" page.
  - /projects: Loads the "Projects" page.
  - /stack: Loads the "Stack" page.
  - /contact: Loads the "Contact Details" page.
