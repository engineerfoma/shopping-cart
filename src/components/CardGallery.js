export default class CardGallery {
    constructor(cards, cardSelector, elementSelector, container, { addHandler }) {
        this._elementSelector = elementSelector;
        this._img = cards.image;
        this._nameBig = cards.name_big;
        this._name = cards.name;
        this._property = cards.property;
        this._description = cards.description
        this._article = cards.article;
        this._price = cards.priceBig;
        this._priceUnit = cards.price_unit;
        this._priceEUR = cards.price_eur;
        this._cardSelector = cardSelector;
        this._addHandler = addHandler;
        this._container = container;
    }

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(this._elementSelector)
            .cloneNode(true);

        return cardElement;
    }

    addCard = (card) => {
        this._addHandler(card);
    }

    _setAddEventListeners = () => {
        this._element.querySelector('.slider__button').addEventListener('click', this.addCard);
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this._setAddEventListeners();

        this._element.querySelector('.slider__img').src = this._img;
        this._element.querySelector('.slider__img').alt = this._nameBig;
        this._element.querySelector('.slider__title_hiden').textContent = this._name;
        this._element.querySelector('.slider__title').textContent = this._nameBig;
        this._element.querySelector('.slider__property_hiden').textContent = this._property;
        this._element.querySelector('.slider__article_hiden').textContent = this._article;
        this._element.querySelector('.slider__price-unit_hiden').textContent = this._priceUnit;
        this._element.querySelector('.slider__subtitle').textContent = this._description;
        this._element.querySelector('.slider__price_rub').textContent = this._price;
        this._element.querySelector('.slider__price_eur').textContent = this._priceEUR;

        return this._element;
    }

}