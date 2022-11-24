"use strict";

export default function Contact(contact) {
  let inner = ``;
  inner += `<div class="c-container">
  <div class="c-row">`;
  contact.map(
    (c) =>
      (inner += `<a class="${c.title}" target="_blank" href="${c.link}">${c.icon}</a>`)
  );
  inner += `</div>
</div>`;
  return inner;
}
