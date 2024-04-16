document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("links.json")
        .then(response => response.json())
        .then(data => {
            // Process JSON data
            data.forEach(component => {
                if (component.name === "Header") {
                    // Load header content
                    fetch(component.url)
                        .then(response => response.text())
                        .then(html => {
                            // Insert header content into the appropriate container
                            const headerContainer = document.getElementById("header-container");
                            headerContainer.innerHTML = html;
                        })
                        .catch(error => console.error("Error loading header:", error));
                } else if (component.name === "Footer") {
                    // Load footer content
                    fetch(component.url)
                        .then(response => response.text())
                        .then(html => {
                            // Insert footer content into the appropriate container
                            const footerContainer = document.getElementById("footer-container");
                            footerContainer.innerHTML = html;
                        })
                        .catch(error => console.error("Error loading footer:", error));
                }
            });
        })
        .catch(error => console.error("Error fetching components:", error));
});
