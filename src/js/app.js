import createNewElement from './createNewElement.js';

const bodyEl = document.querySelector('body');
const container = createNewElement('div', 'btn-container');
const wrapper = createNewElement('div', 'btn-wrapper');
const button = createNewElement('button', 'toggle-popover-btn', 'Click to toggle popover');
button.type = 'button';
button.title = 'Popover title';
button.dataset.content = "And here's some amazing content. It's very engaging. Right?";
wrapper.appendChild(button);
container.appendChild(wrapper);
bodyEl.insertBefore(container, bodyEl.firstChild);

const popover = createNewElement('div', 'popover hidden');
const arrow = createNewElement('div', 'arrow');
const header = createNewElement('h3', 'popover-header', button.title);
const text = createNewElement('div', 'popover-text', button.dataset.content);
popover.appendChild(arrow);
popover.appendChild(header);
popover.appendChild(text);
wrapper.appendChild(popover);

button.addEventListener('click', () => {
  popover.classList.toggle('active');
  popover.classList.toggle('hidden');
  popover.style.left = `${wrapper.offsetWidth / 2 - popover.offsetWidth / 2}px`;
  popover.style.bottom = `${wrapper.offsetHeight}px`;
});
