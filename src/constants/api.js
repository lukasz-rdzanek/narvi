const GITHUB_API_URL = "https://api.github.com/search/users";

//FETCH CACHING TIME
const MAX_STORAGE_CACHE_TIME = 900000; // 15 min in ms ~ 1000 * 60 * 15
const STALE_FRESH_CACHE_TIME = 300000; // 5 min in ms ~ 1000 * 60 * 5

const MAX_USERS_PER_PAGE = 10;

const FETCH_USERS_ERROR_MESSAGE =
  "Wystąpił błąd podczas pobierania użytkowników.";

const FETCH_NO_USERS = "Brak użytkowników pasujących do podanej nazwy.";

export {
  FETCH_NO_USERS,
  FETCH_USERS_ERROR_MESSAGE,
  GITHUB_API_URL,
  MAX_STORAGE_CACHE_TIME,
  MAX_USERS_PER_PAGE,
  STALE_FRESH_CACHE_TIME,
};
