// @packages
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

// @app
import SearchBar from '../SearchBar';
import CityCard from '../CityCard';
import { getHourlyForecast, sortWeatherData } from '../../utils';

// @own
import './styles.css'

const FixedContainer = () => {
  const cityResume = useSelector(state => state.cityResume);
  const weatherData = useSelector(state => state.cityForecast);

  return (
    <div className="layout">
      <CssBaseline />
      <Container fixed>
        <SearchBar />
        {!(Object.keys(cityResume).length === 0) && (
            <CityCard 
              city={cityResume.name}
              humidity={cityResume.main.humidity}
              temperature={cityResume.main.temp}
              weather={cityResume.weather[0].description}
              weatherList={sortWeatherData(weatherData)}
              dailyForecast={getHourlyForecast(weatherData)}
            />
        )}
      </Container>
    </div>
  );
};

export default FixedContainer;
