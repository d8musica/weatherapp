// @packages
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

// @app
import { getForecastIcon } from '../../utils';

// @own
import './styles.css';

const DailyForecast = ({ day, dailyForecast }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 15,
        '& > :not(style)': {
          m: 1,
          width: 120,
          height: 150,
        },
      }}
    >
      {dailyForecast && (
        dailyForecast[day].map((forecast) => (
          <Paper elevation={3}>
            <div className="daily-forecast__content">
              <div className="daily-forecast__time">{`Time: ${forecast.time}`}</div>
              <div className="daily-forecast__temp">{`${forecast.temp} °C`}</div>
              <Avatar src={getForecastIcon(forecast)} />
              <div className="daily-forecast_humidity">{`${forecast.humidity} %`}</div>
            </div>            
          </Paper>
        ))
      )}
    </Box>
  );
}

export default DailyForecast;
