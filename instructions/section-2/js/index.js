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
  if (!messageList) {
    messageSection.style.visibility = 'hidden';
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
    messageSection.style.visibility = 'visible';
  }
  //create a list of messages
  let newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>wrote: ${message} </span>`;
  //add messages to the list
  messageList.appendChild(newMessage);

  //create remove button
  const removeButton = document.createElement('button')
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', () => {
    let entry = removeButton.parentNode;
    entry.remove();

    // remove the Message section after all messages removed
    if (messageList.children.length === 0) {
      messageSection.style.visibility = 'hidden';
      messageSection.style.display = 'none';
    }
  })

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  event.target.reset();
});
