// dom-homework.js
// Everything waits until the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  const myDiv = document.getElementById('myDiv');

  /* ---------- Static content ---------- */
  // 1) Heading
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to DOM homework';
  heading.classList.add('highlight');
  myDiv.appendChild(heading);

  // 2) Paragraph
  const para = document.createElement('p');
  para.textContent = 'This is your first DOM homework assignment';
  myDiv.appendChild(para);

  // 3) Unordered list with three starter items
  const ul = document.createElement('ul');
  ['First item', 'Second item', 'Third item'].forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
  myDiv.appendChild(ul);

  /* ---------- Interactivity ---------- */
  // Utility: random pastel-ish color in HSL
  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 70%, 75%)`;

  // a) Change myDiv’s background on click
  myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = randomColor();
  });

  // b) Add new list items on button click
  const addBtn = document.getElementById('addItemBtn');
  let newCount = 1; // keeps track of “X” in “New List Item X”

  addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `New List Item ${newCount++}`;
    li.style.color = randomColor(); // each new item gets its own color
    ul.appendChild(li);
  });
});
