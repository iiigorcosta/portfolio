function insertInSection() {
    const main = document.getElementById("main");

    const portfolioSection = createSection("portfolio");
    portfolioSection.classList.add("portfolio");
    const bibliographySection = createSection("bibliography");
    bibliographySection.classList.add("bibliography");
    
    portfolioSection.appendChild(document.createElement("h2")).classList.add("section-title");
    portfolioSection.firstElementChild.textContent = "Portfolio:";

    bibliographySection.appendChild(document.createElement("h2")).classList.add("section-title");
    portfolioSection.firstElementChild.textContent = "Minha bibliografia:";
    
    skillsSection.appendChild(document.createElement("ul"));
    const skillsList = skillsSection.firstElementChild;
    skillsList.innerHTML = "<li>Skill 1</li><li>Skill 2</li>";
  
    const project1 = createProject("Project 1", "Brief description");
    projectsSection.appendChild(project1);

    main.appendChild(aboutSection);
    main.appendChild(skillsSection);
    main.appendChild(projectsSection);
  }