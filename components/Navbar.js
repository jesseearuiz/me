"use strict";

export default function Navbar() {
  let inner = ``;
  inner += `<div class="nav-container">
    <a class="nav-home" href="#">Andy Deng</a>
    <div class="nav-group">
      <a class="nav-element" href="#p">Projects</a>
      <a class="nav-element" href="#e">Experience</a>
      <a class="nav-element" href="#c">Contact</a>
    </div>
  </div>`;
  return inner;
}
