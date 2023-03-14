import './index.scss';
import Card from './components/Card';
import CardGallery from './components/CardGallery';
import { Cards } from './utils/constants.js';
import Gallery from './components/Gallery';
import './components/Swiper.js';

const listBasket = document.querySelector('.basket__list');
const listGallery = document.querySelector('.slider__wrapper');
const countBasketHeader = document.querySelector('.header__container_subtitle');
const countBasketProduct = document.querySelector('.basket__subtitle_total');
const countTotalProduct = document.querySelector('.total__subtitle_count');

const totalPriceHeader = document.querySelector('.header__container_total');
const preTotalPrice = document.querySelector('.total__subtitle_caption');
const totalPrice = document.querySelector('.total__sum');

const createCard = (item) => {
  const card = new Card(
    item,
    '.template-basket',
    '.basket__elem',
  )
    return card.generateCard();
}

const createGalleryCard = (item) => {
  const card = new CardGallery(
    item,
    '.template-gallery',
    '.slider__elem',
    listBasket,
    {
      addHandler: (e) => {
        const card = e.target.closest('.slider__elem');
        const objectCard = {
          image: card.querySelector('.slider__img').getAttribute('src'),
          name: card.querySelector('.slider__title_hiden').innerText,
          property: card.querySelector('.slider__property_hiden').innerText,
          article: card.querySelector('.slider__article_hiden').innerText,
          price_unit: card.querySelector('.slider__price-unit_hiden').innerText,
          price: card.querySelector('.slider__price_rub').innerText,
        }
        listBasket.append(createCard(objectCard));
        countProdects();
      }
      // Извините за кривую реализацию, очень спешил, большая нагруженность. Не удалось сделать всё через классы
    }
  )
    return card.generateCard();
}

const defaultGalleryCard = new Gallery({
  cards: Cards,
  renderer: (card) => {
    const cardElement = createGalleryCard(card);
    defaultGalleryCard.addProduct(cardElement);
  }
}, listGallery);

const countProdects = () => {
  let items = listBasket.querySelectorAll('.basket__elem_total');
  let count = `${items.length} шт.`;
  countBasketHeader.textContent = countBasketProduct.textContent = countTotalProduct.textContent = count;
  let total = `${items.length * Number(Cards[0].price)} ₽`;
  totalPriceHeader.textContent = preTotalPrice.textContent = totalPrice.textContent = total;
}

defaultGalleryCard.rendererCards();