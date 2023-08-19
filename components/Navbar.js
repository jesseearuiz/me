"use strict";

export default function Navbar() {
  let inner = ``;
  let nav = `<nav class="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
    <div class="container">
      <a class="navbar-brand mr-4" href="/">NAVBAR</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggle"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggle">
        <div class="navbar-nav mr-auto">
          <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#"
            >Landing Page</a
          >
          <a class="nav-item nav-link" href="#"
            >Add Course</a
          >
          <a class="nav-item nav-link" href="#"
            >Course View</a
          >
          <a class="nav-item nav-link" href="#">Apply</a>
        </div>
        <!-- Navbar Right Side -->
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">Login</a>
          <a class="nav-item nav-link" href="#">Register</a>
        </div>
      </div>
    </div>
  </nav>`;
  inner += `<div class="nav-container">
    <a class="nav-home" href="#">Andy Deng</a>
    <div class="nav-group">
      <a class="nav-element" href="#p">Projects</a>
      <a class="nav-element" href="#e">Experience</a>
      <a class="nav-element" href="#c">Contact</a>
    </div>
  </div>`;
  return nav;
}
