'use strict';


document.addEventListener('DOMContentLoaded', function() {

    const pModalBtn = document.getElementById('p_modal_button3');

    pModalBtn.onclick = function(event) {

        event.preventDefault();

        const userAnswers = "Ok";

        console.log(`Ответ пользователя: ${userAnswers}`); 

    };
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('publishComment').addEventListener('click', function() {
        const commentText = document.getElementById('newCommentText').value;
        if (commentText.trim() === '') {
            alert('Por favor, escreva um comentário antes de postar.');
            return;
        }

        const commentsContainer = document.querySelector('.comments_face');
        const newComment = document.createElement('div');
        newComment.classList.add('comments');
        newComment.innerHTML = `
            <div class="profile">
                <img src="assets/anonymous.svg">
            </div>
            <div class="comment-content">
                <p class="name">Usuário anônimo</p>
                <p>${commentText}</p>
            </div>
            <div class="clr"></div>
            <div class="comment-status">
            <span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Curte·comente</font>
              </font>
              <img src="assets/like.png" width="15px" height="15px">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">0</font>
              </font>
            </span>
            <small>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">·</font>
              </font>
              <u>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">há menos de 1 minuto</font>
                </font>
              </u>
            </small>
          </div>`;

          const optionsBlock = document.querySelector('.comments_face > .comments');

          
          optionsBlock.insertAdjacentElement('afterend', newComment);

        document.getElementById('newCommentText').value = '';
    });
});
