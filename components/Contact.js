"use strict";

export default function Contact(contact) {
  let inner = ``;
  inner += `<div class="c-container">
    <h2 class="projects-header">Contact</h2>
    <div class="contact-box">
      <img
        class="contact-pfp"
        alt="contact pfp"
        src="${contact.photo}"
      />
      <div class="contact-groups">
        <div class="phone-group">
          <h3 class="contact-label">Mobile</h3>
          <p class="contact-info">${contact.mobile}</p>
        </div>
        <div class="email-group">
          <h3 class="contact-label">Email</h3>
          <p class="contact-info">${contact.email}</p>
        </div>
        <div class="email-group">
          <h3 class="contact-label">Personal</h3>
          <p class="contact-info">${contact.personal}</p>
        </div>
        <div class="phone-group">
          <h3 class="contact-label">Github</h3>
          <p class="contact-info"><a class="github-link" target="_blank" href="${contact.github.link}">${contact.github.name}</a></p>
        </div>
      </div>
    </div>
  </div>`;
  return inner;
}
