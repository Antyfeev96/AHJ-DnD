/* eslint-disable class-methods-use-this */
export default class AppCreator {
  constructor(layout) {
    this.layout = layout;
    this.item = this.parserHTML(this.layout.item).querySelector('.item');
    this.footer = this.parserHTML(this.layout.footer).querySelector('.column__footer');
  }

  parserHTML(string) {
    return new DOMParser().parseFromString(string, 'text/html');
  }

  init() {
    document.body.innerHTML = this.layout.html;
    this.container = document.querySelector('.container');
    this.container.addEventListener('click', (event) => this.onAddTask(event));
    this.container.addEventListener('click', (event) => this.onDeleteTask(event));
    this.container.addEventListener('mouseover', (event) => this.onMouseOver(event));
    this.container.addEventListener('mouseout', (event) => this.onMouseOut(event));
  }

  onAddTask(event) {
    if (event.target.classList.contains('column__footer')) {
      this.column = event.target.closest('.column');
      event.target.remove();
      this.column.innerHTML += this.layout.addArea;
      const area = this.column.querySelector('.add-area');
      const content = this.column.querySelector('.column__content');
      const textArea = area.querySelector('.add-area__text');
      const addButton = area.querySelector('.add-area__add');
      const cancelButton = area.querySelector('.add-area__cancel');

      addButton.addEventListener('click', () => {
        const title = textArea.value;
        area.remove();
        content.insertAdjacentElement('afterbegin', this.item.cloneNode(true));
        content.querySelector('.item__text').textContent = title;
        content.insertAdjacentElement('afterend', this.footer.cloneNode(true));
      });

      cancelButton.addEventListener('click', () => {
        area.remove();
        content.insertAdjacentElement('afterend', this.footer.cloneNode(true));
      });
    }
  }

  onMouseOver(event) {
    const item = event.target.closest('.item');
    if (item && item.querySelector('.item__delete').classList.contains('hidden')) {
      item.querySelector('.item__delete').classList.remove('hidden');
    }
  }

  onMouseOut(event) {
    const item = event.target.closest('.item');
    if (item && !item.querySelector('.item__delete').classList.contains('hidden')) {
      item.querySelector('.item__delete').classList.add('hidden');
    }
  }

  onDeleteTask(event) {
    if (event.target.classList.contains('item__delete')) {
      event.target.closest('.item').remove();
    }
  }
}
