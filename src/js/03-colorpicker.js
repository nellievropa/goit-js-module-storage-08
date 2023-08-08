// шаблонізатори передають строку, яку ти задав спеціальними позначками,
// і підставляють в неї твої значення

    // const template = SuperTemplatingEngine.compile (`<div>
    // <p>{{ email }}<p/>
    // <p>{{ name }}<p/>
    // <div/>`);

    // //                                                          видасть таку строку
    // template({name: 'Mango', email: 'namemango@gmail.com'}) // `<div><p>namemango@gmail.com<p/><p>Mango</p></div>`

    // function template(data) {
    //     return `<div><p>${data.email}</p><p>${data.name}</p></div>`
    // }

    import colorCardTpl from '../templates/color-picker.hbs';
    import colors from './colors.json';
    import '../css/common.css';
    import '../css/colorpicker.css';

    // при імпорті отримуємо готову функцію-шаблон, яка готова приймати дані
// отримаємо картку [0] кольору
    // console.log(colorCardTpl(0));

    const paletteContainer = document.querySelector('.js-palette');
// ця змінна зберігає результат виклику всієї 1-ї функції
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);
// console.log(createColorCardsMarkup(colors));
// будем змінювати код нижче з додаванням нашого шаблону
function createColorCardsMarkup(colors) {
    // return colors.map(color => colorCardTpl(color)).join('');
    // аналогічний запис
    return colors.map(colorCardTpl).join('');

    
}
function onPaletteContainerClick(event) {
    // console.log(event.target);    
    const isColorSwatchEl = event.target.classList.contains('color-swatch');
    if (!isColorSwatchEl) {
        return;
    }

removeActiveCardClass();

    const swatchEl = event.target;
    const parentColorCard = swatchEl.closest('.color-card');
    addActiveCardClass(parentColorCard);

    setBodyBgColor(swatchEl.dataset.hex);
    // console.log(event.targetdataset.hex);

}

function setBodyBgColor (color) {
    document.body.style.backgroundColor = color;
}

// винесемо в окрему функцію і зняття активного класу 
function removeActiveCardClass (){
    const currentActiveCard = document.querySelector('.color-card.is-active');
    
    if(currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }

}
// зробим функцію додавання активного классу також окремою

function addActiveCardClass (card) {
card.classList.add('is-active');
}

