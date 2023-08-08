import '../css/common.css';
import '../css/02-feedback.css';

const refs ={
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

// Останавливаем поведени по умолчанию
// убираем сообщение из хранилища
// Очищаем форму

function onFormSubmit(event) {}


// Получаем значение поля
// сохраняем его в хранилище
// можна додати trottle, щоб збарігалося через деякий час, а не кожний символ

function onTextareaInput(event) {
    // перевірити, чи працює
    // const value = event.currentTarget.value;
    // console.log(value)
    const message = event.currentTarget.value;

    localStorage.setItem('feedback-msg', message);
}

// отримуємо значення із хранилища
// якщо там щось було, обновляємо DOM

function populateMessageOutput() {}