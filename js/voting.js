const refs = {
  like: document.querySelector('.voting__action--like'),
  fav: document.querySelector('.voting__action--fav'),
  dislike: document.querySelector('.voting__action--dislike'),
  logsContainer: document.querySelector('.voting__logs'),
};

const API_KEY = '2bc46530-3af7-4eb9-9507-787e31c867a5';
const BASE_URL = 'https://api.thecatapi.com';
let imageCounter = 1; // як отримати картинки по черзі, або рандомно?

refs.like.addEventListener('click', onLikeClick);
refs.fav.addEventListener('click', onFavClick);
refs.dislike.addEventListener('click', onDislikeClick);

async function onLikeClick() {
  try {
    const image = await fetchImage(imageCounter);
    if (image) {
      await renderInfo(image, 'Likes', 'like-color-20');
      imageCounter += 1;
      console.log(image);
      await addToProperSection(image);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function onFavClick() {
  try {
    const image = await fetchImage(imageCounter);
    if (image) {
      await renderInfo(image, 'Favorites', 'fav-20');
      imageCounter += 1;
      console.log(image);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function onDislikeClick() {
  try {
    const image = await fetchImage(imageCounter);
    if (image) {
      await renderInfo(image, 'Dislikes', 'dislike-color-20');
      imageCounter += 1;
      console.log(image);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Винести в окремий файл з іменованим імпортом, і всю логіку розписати там
async function addToProperSection(image) {
  console.log(image.url);
}

function renderInfo(image, section, iconId) {
  const render = `<div class="voting__log">
              <p class="voting__log-time">${time()}</p>
              <p class="voting__log-info">
                Image ID: <span class="voting__log-info--id">${image.id}</span> was added to
                ${section}
              </p>
              <svg class="voting__log-icon voting__log-icon--fav" width="20" height="20">
                <use href="./images/icons.svg#${iconId}"></use>
              </svg>
            </div>`;
  refs.logsContainer.insertAdjacentHTML('afterbegin', render);
}

async function fetchImage() {
  const response = await fetch(
    `${BASE_URL}/v1/images/0SxW2SQ_S?api_key=${API_KEY}&limit=1&page=${imageCounter}&order=DESC`
  );
  return await response.json();
}

function time() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
    2,
    '0'
  )}`;
}
