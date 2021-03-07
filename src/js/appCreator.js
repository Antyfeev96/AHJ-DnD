/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
export default class AppCreator {
  constructor(layout) {
    this.layout = layout;
    this.item = this.parserHTML(this.layout.item).querySelector('.item');
    this.footer = this.parserHTML(this.layout.footer).querySelector('.column__footer');
    this.currentItem = null;
  }

  parserHTML(string) {
    return new DOMParser().parseFromString(string, 'text/html');
  }

  init() {
    document.body.innerHTML = this.layout.html;
    this.container = document.querySelector('.container');
    this.container.addEventListener('click', (event) => this.onAddTask(event));
    this.container.addEventListener('mouseover', (event) => this.onMouseOver(event));
    this.container.addEventListener('mouseout', (event) => this.onMouseOut(event));
    this.container.addEventListener('mousedown', (event) => this.onMouseDown(event));
    this.container.addEventListener('mouseup', (event) => this.onMouseUp(event));
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

  drag(e) {
    this.currentItem = document.querySelector('.dragged');
    this.currentItem.style.cursor = 'grabbing';
    if (this.currentItem === null) return false;
    this.currentItem.style.position = 'absolute';
    this.currentItem.style.left = `${e.clientX - 20}px`;
    this.currentItem.style.top = `${e.clientY - 20}px`;
  }

  dragEnd() {
    if (this.querySelector('.dragged') === null) return false;
    this.querySelector('.dragged').classList.remove('dragged');
    this.removeEventListener('mousemove', () => this.drag);
    this.removeEventListener('mouseup', () => this.dragEnd);
  }

  itemDragEnd(e) {
    const draggedItem = document.querySelector('.dragged');
    if (draggedItem === null) {
      return;
    }
    const thisContent = this.querySelector('.column__content');
    if (thisContent.querySelector('.item') === null) {
      thisContent.append(draggedItem);
    } else {
      thisContent.insertBefore(draggedItem, e.target.closest('.item'));
    }
    draggedItem.style = '';
  }

  onMouseDown(event) {
    if (event.target.classList.contains('add-area__text')) {
      return;
    }
    if (event.target.classList.contains('column__footer')) {
      this.container.addEventListener('click', (e) => this.onDeleteTask(e));
      return;
    }
    if (event.target.classList.contains('item__delete')) {
      event.target.closest('.item').remove();
      return;
    }
    event.preventDefault();
    this.currentItem = event.target.closest('.item');
    if (this.currentItem) {
      this.currentItem.classList.add('dragged');
      this.currentItem = event.target.closest('.dragged');
      this.currentItem.style.cursor = 'grabbing';
      this.container.addEventListener('mouseup', this.dragEnd);
      this.container.addEventListener('mousemove', this.drag);
      [...document.querySelectorAll('.column')].forEach((item) => {
        item.addEventListener('mouseup', this.itemDragEnd);
      });
    }
  }

  onMouseUp(event) {
    event.preventDefault();
  }
}
