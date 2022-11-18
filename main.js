"use strict";

import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

const path = "./assets/data.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#a").innerHTML = About(data.about);
    document.querySelector("#p").innerHTML = Projects(data.projects);
    document.querySelector("#c").innerHTML = Contact(data.contact);
  });
