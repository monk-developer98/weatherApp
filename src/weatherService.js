const API_KEY = "75e03083e6d48f5ae3eeefdad737b034";
const makeIconUrl = (iconId) =>
  `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormatWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];
  return {
    description,
    iconURL:makeIconUrl(icon),
    temp,
    temp_max,
    temp_min,
    feels_like,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormatWeatherData };
