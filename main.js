"use strict";

import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

const path = "/assets/data.json";

async function fetchData(path) {
  const response = await fetch(path);
  return response.json();
}

const data = await fetchData(path);

document.querySelector("#a").innerHTML = About(data.about);
document.querySelector("#p").innerHTML = Projects(data.projects);
document.querySelector("#c").innerHTML = Contact(data.contact);
