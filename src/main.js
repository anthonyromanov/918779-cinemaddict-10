import {createFilmsTemplate} from './components/films.js';
import {createFilmsListTemplate} from './components/filmslist.js';
import {createFilmsListExtraTemplate} from './components/filmslist-extra.js';
import {createMenuTemplate} from './components/menu.js';
import {createShowMoreTemplate} from './components/show-more-button.js';
import {createProfileNameTemplate} from './components/profilename.js';

const FILMS_COUNT = 5;
const FILMS_EXTRA_COUNT = 2;

const profileNameElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderTemplates = () => {

  render(profileNameElement, createProfileNameTemplate(), `beforeend`);
  render(siteMainElement, createMenuTemplate(), `beforeend`);
  render(siteMainElement, createFilmsTemplate(), `beforeend`);

  let filmsData = createFilmsListTemplate();

  const filmsListElement = siteMainElement.querySelector(`.films`);
  for (let i = 0; i < FILMS_COUNT - 1; i++) {
    filmsData += createFilmsListTemplate();
  }
  render(filmsListElement, filmsData, `beforeend`);

  const filmsShowElement = filmsListElement.querySelector(`.films-list`);
  render(filmsShowElement, createShowMoreTemplate(), `beforeend`);

  let filmsExtraData = createFilmsListExtraTemplate();

  for (let j = 0; j < FILMS_EXTRA_COUNT - 1; j++) {
    filmsExtraData += createFilmsListExtraTemplate();
  }
  render(filmsListElement, filmsExtraData, `beforeend`);
};

renderTemplates();

