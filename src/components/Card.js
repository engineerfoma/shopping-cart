export default class Card {
    constructor(cards, cardSelector, elementSelector) {
        this._img = cards.image;
        this._nameBig = cards.name_big;
        this._name = cards.name;
        this._property = cards.property;
        this._description = cards.description
        this._article = cards.article;
        this._price = cards.price;
        this._priceUnit = cards.price_unit;
        this._priceEUR = cards.price_eur;
        this._cardSelector = cardSelector;
        this._elementSelector = elementSelector;
    }

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(this._elementSelector)
            .cloneNode(true);
        
        return cardElement;
        }

    _handleCloseClick = () => {
        this._element.remove();
    }

    _handleMinusClick = () => {
        return this._count++;
    }

    _handlePlusClick = () => {
        return this._count--;
    }

    _setAddEventListeners = () => {
        this._element.querySelector('.basket__elem_close').addEventListener('click', this._handleCloseClick);
        this._element.querySelector('.basket__elem_minus').addEventListener('click', this._handleMinusClick);
        this._element.querySelector('.basket__elem_plus').addEventListener('click', this._handlePlusClick);
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this._setAddEventListeners();

        this._element.querySelector('.basket__elem_img').src = this._img;
        this._element.querySelector('.basket__elem_img').alt = this._name;
        this._element.querySelector('.basket__elem_total').textContent = this._price;
        this._element.querySelector('.basket__elem_price').textContent = this._priceUnit;
        this._element.querySelector('.basket__description_title').textContent = this._name;
        this._element.querySelector('.basket__description_subtitle').textContent = this._property;
        this._element.querySelector('.basket__description_article').textContent = this._article;

        return this._element;
    }
}