const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Olga ${thisYear}`;
footer.appendChild(copyright);
const skills = ["JavaScript", "TypeScript", "HTML", "CCS", "QA"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");
for (let el of skills) {
  const skill = document.createElement('li');
  skill.innerText = el;
  skillsList.appendChild(skill);
}
//submit form
const messageForm = document.getElementById('message_form');
messageForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  console.log(`Name: ${name};`, `Email: ${email};`, `Message: ${message}`)

  //Display Messages in List
  const messageSection = document.getElementById('messages');
  let messageList = messageSection.querySelector('ul');

  // hide Messages section if no message list
  if (messageSection.style.display === 'none') {
    messageSection.style.display = 'block'
  }

  //create new message
  const newMessage = document.createElement('li')
  newMessage.classList.add('list_item')
  newMessage.innerHTML = `<div>
        <span class="strong">${message}</span>
        <p>${today.toLocaleString()} from <a class="link" href="mailto:${email}">${name}</a> &nbsp;</p>
      </div>`
  //add messages to the list
  messageList.appendChild(newMessage);

  // create edit button
  const editButton = document.createElement('button')
  editButton.innerText = 'edit'
  editButton.type = 'button'
  editButton.classList.add('button', 'button_edit')

  editButton.addEventListener('click', (event) => {
    const button = event.target
    const entry = button.parentNode

    if (button.innerText === 'edit') {
      const message = entry.querySelector('span')
      const input = document.createElement('input')
      input.type = 'text'
      input.value = message.innerText
      input.classList.add('field_input')

      message.after(input)
      message.remove()

      button.innerText = 'save'
    } else {
      const input = entry.querySelector('input')
      const message = document.createElement('span')
      message.innerText = input.value
      message.classList.add('strong')

      input.after(message)
      input.remove()

      button.innerText = 'edit'
    }
  })

  newMessage.appendChild(editButton)

  //create remove button
  const removeButton = document.createElement('button')
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.classList.add('button', 'button_remove');
  removeButton.addEventListener('click', () => {
    let entry = removeButton.parentNode;
    entry.remove();

    // hide the Message section after all messages removed
    if (messageList.children.length === 0) {
      messageSection.style.display = 'none'
    }
  })

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  event.target.reset();
});

  fetch('https://api.github.com/users/OlgaShchekina/repos')
    .then((res) => res.json())
    .then((data) => {
      // filter out irrelevant repositories
      const filteredData = data.filter((repo) =>
        repo.name.includes('intro-to-programming')
      )

      const projectSection = document.querySelector('#projects')
      const projectList = projectSection.querySelector('ul')

      for (let repository of filteredData) {
        const project = document.createElement('li')
        project.innerHTML = `<a class="link projects_links" href="${repository.html_url}">${repository.name}</a>`
        projectList.appendChild(project)
      }
    })
