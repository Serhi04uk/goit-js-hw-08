// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallaryEl = document.querySelector('.gallery');

gallaryEl.style.listStyle = 'none';

function createMarkup() {
  const markup = galleryItems
    .map(
      item => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
   </li>`
    )
    .join('');

  return markup;
}

gallaryEl.insertAdjacentHTML('afterbegin', createMarkup());

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
