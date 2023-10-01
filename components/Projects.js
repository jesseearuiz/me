"use strict";

export default function Projects(p) {
  const projects = p.projects;

  let inner = `<div class="p-container"><h2 class="projects-header">Projects</h2>
    <div class="container project-list">`;
  projects.map((p) => {
    inner += `<div class="project-box">
    <div>
      <p class="project-title">${p.title}</p>
      <p class="project-description">
        ${p.description}
      </p>
      <p class="project-description">
       ${p.utility}
      </p>
    </div>
    <a class="project-link" href="${p.link}" target="_blank">VIEW</a>
  </div>`;
  });
  inner += `</div></div>`;
  return inner;
}
