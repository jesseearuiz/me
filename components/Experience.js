"use strict";

export default function Experience(experience) {
  let inner = ``;
  inner += `<div class="e-container">
  <h2 class="e-header">Experience</h2>
  <div class="e-group">`;
  experience.map(
    (e) =>
      (inner += `<div class="e-element-container">
    <div class="e-row">
      <h5 class="e-title">${e.title}</h5>
      <span class="e-date">${e.date}</span>
    </div>
    <div class="project-description">
      ${e.description}
    </div>
  </div>`)
  );
  inner += `</div>
</div>`;
  return inner;
}
