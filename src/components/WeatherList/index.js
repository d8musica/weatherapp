// @packages
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// @app
import { getForecastIcon } from '../../utils';

// @own
import './styles.css';

const WeatherList = ({ weather, handleOpen}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {weather.map((item, key) => (
        <ListItem 
          sx={{ cursor: 'pointer' }}
          onClick={() => handleOpen(key)}
        >
          <ListItemAvatar>
            <Avatar src={getForecastIcon(item)} />
          </ListItemAvatar>
          <ListItemText
            primary={item.day}
            secondary={`Max ${item.max_temp}°C - Min ${item.min_temp}°C`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default WeatherList;