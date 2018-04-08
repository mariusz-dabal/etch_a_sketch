const container = document.querySelector('#container');

for(let i = 0; i < 256; i++) {
  const content = document.createElement('div');
  content.classList.add('gridBox');
  content.textContent = i;
  container.appendChild(content);
}
