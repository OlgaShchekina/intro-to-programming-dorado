const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Olga ${thisYear}`;
footer.appendChild(copyright);
const skills = ["JavaScript", "TypeScript", "HTML", "CCS", "QA"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");
for (let el of skills){
  const skill = document.createElement('li');
  skill.innerText = el;
  skillsList.appendChild(skill);
}
