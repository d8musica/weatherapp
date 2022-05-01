import * as dayjs from 'dayjs';

export const getForecastIcon = (weatherItem) => {
    if (weatherItem.image === 'Rain') {
      return '/assets/softrainy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/sunny.png';
    } else if (weatherItem.image === 'Rain') {
      return '/assets/rainy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else if (weatherItem.image === 'Clear') {
      return '/assets/cloudy.png';
    } else {
      return '/assets/cloudy.png';
    }
  };

export const sortWeatherData = (weatherData) => {
    const initialDaysOfForecast = [0, 8, 16, 24, 32];    
    let day, image, max_temp, min_temp
    let sortedWeather = [];
    for (let i in initialDaysOfForecast) {
      let oneDayForecast = {};
      day = dayjs.unix(weatherData[initialDaysOfForecast[i]].dt).toString().slice(0,3);
      max_temp = weatherData[initialDaysOfForecast[i]].main.temp_max;
      min_temp = weatherData[initialDaysOfForecast[i]].main.temp_min;
      image = weatherData[initialDaysOfForecast[i]].weather[0].main;
      oneDayForecast = {
        day,
        max_temp,
        min_temp,
        image,
      };
      sortedWeather.push(oneDayForecast);
    }
    return sortedWeather;
  }
  
export const getHourlyForecast = (weatherData) => {  
    let time, image, temp, humidity;
    let hourlyForecast;
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    for (let i = 0; i< weatherData.length; i++) {
      time = weatherData[i].dt_txt.slice(10,16);
      temp = weatherData[i].main.temp;
      humidity = weatherData[i].main.humidity;
      image = weatherData[i].weather[0].main;
      const data = {
        time,
        image,
        temp,
        humidity,
      }
      if (i <= 7) {        
        day1.push(data);
      } else if (i <= 15) {
        day2.push(data);
      } else if (i <= 23) {
        day3.push(data);
      } else if (i <= 31) {
        day4.push(data);
      } else {
        day5.push(data);
      }
      hourlyForecast = [day1, day2, day3, day4, day5];
    }
    return hourlyForecast;
  } 