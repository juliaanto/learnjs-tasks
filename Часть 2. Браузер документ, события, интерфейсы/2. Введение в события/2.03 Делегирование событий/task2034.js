// Поведение "подсказка"

let tooltipElement;

document.addEventListener('mouseover', (event) => {
  if (!event.target.dataset.tooltip) {
    return;
  }

  tooltipElement = document.createElement('div');
  tooltipElement.className = 'tooltip';
  tooltipElement.innerHTML = event.target.dataset.tooltip;
  document.body.append(tooltipElement);

  let coords = event.target.getBoundingClientRect();

  let left = coords.left + (event.target.offsetWidth - tooltipElement.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElement.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + event.target.offsetHeight + 5;
  }

  tooltipElement.style.left = left + 'px';
  tooltipElement.style.top = top + 'px';
});

document.addEventListener('mouseout', (event) => {
  if (tooltipElement) {
    tooltipElement.remove();
    tooltipElement = null;
  }
});
