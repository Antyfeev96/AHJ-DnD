export default class AppCreator {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    document.body.innerHTML = this.layout.html;
    this.container = document.querySelector('.container');
    this.container.addEventListener('click', (event) => this.onAddTask(event));
  }

  onAddTask(event) {
    if (event.target.classList.contains('column__footer')) {
      this.column = event.target.closest('.column');
      this.column.querySelector('.column__content').insertAdjacentHTML('afterbegin', this.layout.item);
    }
  }
}
