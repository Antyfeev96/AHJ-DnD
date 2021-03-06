export default class Layout {
  constructor() {
    this.html = `
    <div class="container">
        <div class="column">
            <div class="column__title">
                <span class="column__task">todo</span>
                <span class="column__options">...</span>
            </div>
            <div class="column__content">
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Погулять</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Почитать</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column__footer">+ Add another card</div>
        </div>
        <div class="column">
            <div class="column__title">
                <span class="column__task">in progress</span>
                <span class="column__options">...</span>
            </div>
            <div class="column__content">
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Сверстать этот макет</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column__footer">+ Add another card</div>
        </div>
        <div class="column">
            <div class="column__title">
                <span class="column__task">done</span>
                <span class="column__options">...</span>
            </div>
            <div class="column__content">
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Посмотреть видос Badcomedian</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Поразиться дикости нынешних киноделов</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src='src/images/jesus.jpg' alt='jesus'>
                    <div class="item__title">
                        <span class='item__text'>Поменять батарею</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Пропылесосить</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column__footer">+ Add another card</div>
        </div>
    </div>
    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    `;

    this.footer = `
    <div class="column__footer">+ Add another card</div>
    `;

    this.item = `
                <div class="item">
                    <div class="item__title">
                        <span class='item__text'>Новая новость</span>
                        <div class='item__delete hidden'>✗</div>
                    </div>
                    <div class="item__footer">
                        <div class="item__dislikes">
                            <img src="src/images/dislike.png" alt="dislikes">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__comments">
                            <img src="src/images/comments.png" alt="comments">
                            <span class="item__counter">1</span>
                        </div>
                        <div class="item__likes">
                            <img src="src/images/like.png" alt="likes">
                            <span class="item__counter">1</span>
                        </div>
                    </div>
                </div>
                `;

    this.addArea = `
    <div class='add-area'>
        <textarea class='add-area__text' placeholder='Enter a title for this card...' required></textarea>
        <div class='add-area__buttons'>
            <button class='add-area__add'>Add Card</button>
            <div class='add-area__cancel'>✗</div>
        </div>
    </div>
    `;
  }
}
