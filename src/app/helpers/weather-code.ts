type WeatherCode = number;

const weatherCodes = {
  clear: [0],
  partlyCloudy: [1, 2, 3, 4],
  rain: [
    14, 15, 16, 20, 21, 25, 27, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
    62, 63, 64, 65, 66, 67, 68, 69, 80, 81, 82, 90, 91, 92,
  ],
  snow: [
    22, 23, 24, 26, 36, 37, 38, 39, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 83,
    84, 85, 86, 87, 88, 89, 90, 93, 94,
  ],
  fog: [5, 10, 11, 12, 28, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  wind: [6, 7, 8, 9, 30, 31, 32, 33, 34, 35],
  storm: [13, 17, 18, 19, 29, 95, 96, 97, 98, 99],
};

const weatherDayIcons = {
  clear: 'sunny.png',
  partlyCloudy: 'part-sunny.png',
  rain: 'rain.png',
  snow: 'snow.png',
  fog: 'foggy.png',
  wind: 'hurricane.png',
  storm: 'storm.png',
};

const weatherNightIcons = {
  clear: 'full-moon.png',
  partlyCloudy: 'partial-moon.png',
  rain: 'rain.png',
  snow: 'snow.png',
  fog: 'foggy.png',
  wind: 'hurricane.png',
  storm: 'storm.png',
};

export function getWeatherIcon(
  weatherCode: WeatherCode,
  isDay: number
): string | null {
  let weatherType: keyof typeof weatherCodes | null = null;

  for (const [type, codes] of Object.entries(weatherCodes)) {
    if (codes.includes(weatherCode)) {
      weatherType = type as keyof typeof weatherCodes;
      break;
    }
  }

  if (!weatherType) {
    return null;
  }

  const icons = isDay ? weatherDayIcons : weatherNightIcons;

  return icons[weatherType] as string;
}
