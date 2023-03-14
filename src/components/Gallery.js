export default class Gallery {
    constructor({ cards, renderer }, container) {
        this._renderCards = cards;
        this._renderer = renderer;
        this._container = container;
    }

    rendererCards = () => {
        this._renderCards.forEach(card => {
            this._renderer(card);
        });
    }

    addProduct = (card) => {
        this._container.append(card);
    }
}