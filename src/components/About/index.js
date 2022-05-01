// @own
import './styles.css'

const About = () => {
  return (
    <>
      <p className="about">
        <p className="about__title">Weather App</p>
        <p className="about__subtitle">Instructions</p>
        <p>
          For this test, you have to build a weather app that can display a 5-day weather forecast.
          Signup on One weather app to obtain a free API key and to fetch the 5 Day / 3 Hour Forecast. Then feed this data in the app.
          You can further expand the app in the following ways:
        </p>
        <p>
          The weather app must have all the basic information, city name, temperature, humidity.
        </p>
        <p>
          Add React Router to the app. For instance, routes that can display the 5-day forecast, along with the name-of-day and the hourly forecast for that day.
        </p>
        <p className="about__subtitle">Technologies you can use:</p>
        <p>
          <ul>
            <li>Create React App.</li>
            <li>Redux.</li>
            <li>Material UI</li>
          </ul>
        </p>
        <p className="about__subtitle">Optional Extra Points:</p>
        <p>
          <ul>
            <li>Display the recording of both high and low temperatures of each day, including images for sunny/rainy/cloudy/snowy weather conditions.</li>
            <li>Include the functionality wherein the user can click on a particular day of the week to see the hourly forecast.</li>
          </ul>
        </p>
      </p>
    </>
  );
};

export default About;
