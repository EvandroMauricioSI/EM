const resizer = document.querySelector('.resizer');
const leftDiv = document.querySelector('.divL');
const rightDiv = document.querySelector('.divR');
let isResizing = false;

resizer.addEventListener('mousedown', function (e) {
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', function (e) {
  if (!isResizing) return;
  const offsetRight = document.body.clientWidth - e.clientX;
  leftDiv.style.width = e.clientX + 'px';
  rightDiv.style.width = (document.body.clientWidth - e.clientX - resizer.offsetWidth) + 'px';
});

document.addEventListener('mouseup', function () {
  isResizing = false;
  document.body.style.cursor = 'default';
});
