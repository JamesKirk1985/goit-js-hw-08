// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = [];
galleryItems.map(markupCreateFunction);
function markupCreateFunction(obj) {
  markup.push(`
  <li class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
  
  <img
  class="gallery__image"
  src="${obj.preview}"
  data-source="${obj.original}"
   alt="${obj.description}" 
   />
  </a>
  </li>`);
}
gallery.insertAdjacentHTML('afterbegin', markup.join(''));
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
