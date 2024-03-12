function insertInSection() {
    const main = document.getElementById("main");
    
    // Create sections for About, Skills, Projects etc.
    const portfolioSection = createSection("portfolio");
    portfolioSection.classList.add("portfolio");
    const bibliographySection = createSection("bibliography");
    bibliographySection.classList.add("bibliography");
    
    // Add content to each section (replace with your details)
    portfolioSection.appendChild(document.createElement("h2")).classList.add("section-title");
    portfolioSection.firstElementChild.textContent = "Portfolio:";

    bibliographySection.appendChild(document.createElement("h2")).classList.add("section-title");
    portfolioSection.firstElementChild.textContent = "Minha bibliografia:";
    
    skillsSection.appendChild(document.createElement("ul"));
    const skillsList = skillsSection.firstElementChild;
    skillsList.innerHTML = "<li>Skill 1</li><li>Skill 2</li>"; // Update with your skills
  
    // Add project details (you can loop through project data)
    const project1 = createProject("Project 1", "Brief description");
    projectsSection.appendChild(project1);
  
    // Append all sections to the main element
    main.appendChild(aboutSection);
    main.appendChild(skillsSection);
    main.appendChild(projectsSection);
  }