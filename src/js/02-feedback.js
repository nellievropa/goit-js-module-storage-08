import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/02-feedback.css';

const STORAGE_KEY = 'feedback-msg';

// гарна практика давати імена полям, де вводяться дані

const formData = {};



const refs ={
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// оскільки наші події вспливають використовуємо делегуванн
refs.form.addEventListener('input', e => {
    console.log(e.target.name);
    console.log(e.target.value);

    // зізьми об'єкт formData і з ключом e.target.name поклади таке значення e.target.value
formData[e.target.name] = e.target.value;

console.log(formData);

})
populateTextarea();
// Останавливаем поведени по умолчанию
// убираем сообщение из хранилища
// Очищаем форму

function onFormSubmit(event) {
    // щоб сторінка не перезавантажувалась
    event.preventDefault();

    console.log('Відправляємо форму');
// currentTarget не понятно для Лодаш, тому тільки таргет
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    

}



// Получаем значение поля
// сохраняем его в хранилище
// можна додати throttle, щоб збарігалося через деякий час, а не кожний символ

function onTextareaInput(event) {
    // перевірити, чи працює
    // const value = event.currentTarget.value;
    // console.log(value)
    const message = event.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, message);

}

// отримуємо значення із хранилища
// якщо там щось було, обновляємо DOM

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
// перевіряємо, чи є щось в повідомленні
// null приводиться до folse, все інше - до true, тому запис виглядає так
// якщо savedMessage є, то ми з ни мпрацюємо, інакше- нічого не робимо
    if (savedMessage) {
        console.log(savedMessage);
        // обновляємо DOM
        refs.textarea.value = savedMessage;
    }
}