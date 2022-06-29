// Base URL
const BASE_URL = "https://api.rawg.io/api/";

// Getting Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

// Getting Date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

// Getting year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const POPULAR_URL = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_URL = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const NEW_URL = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_URL}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_URL}`;
export const newGamesURL = () => `${BASE_URL}${NEW_URL}`;
