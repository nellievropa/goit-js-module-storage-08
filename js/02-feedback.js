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

function onTextareaInput(event) {
    const value = event.currentTarget.value;

    console.log(value)
}
