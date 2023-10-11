"use strict";

export default function About(about) {
  let inner = `<div class="about">
  <div class="hello">
    <h5 class="hello_1">Hey🤗 I'm</h5>
    <h1 class="name">Jessee <i class="fa-solid fa-code"></i></h1>
    <p class="hello_2">CS Student @ Boston College</p>
    <p class="hello_3">
      Aspiring full-stack developer from Houston, Texas
    </p>
    <p class="hello_4">
      Skills: Python • Java • C • React.js • Git • Node.js
    </p>
    <p class="hello_5">Interests: Game Development • Full Stack • Astronomy • Software Development • UX Design</p>
    <a class="resume" href="${about.resume}" target="_blank">My resume!</a>
  </div>
  `;
  return inner;
}
