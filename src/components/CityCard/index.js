// @packages
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

// @app
import WeatherList from '../WeatherList';
import DailyForecastModal from '../DailyForecastModal';

// @own
import './styles.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CityCard = ({
  city,
  dailyForecast,
  humidity,
  temperature,
  weather,
  weatherList,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState();

  const handleOpen = (day) => {setOpen(true); setDay(day);}
  const handleClose = () => setOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const header = (
    <span className="weather-card__cover">
      <h2 className="weather-card__cover--header">{`${city}`}</h2>
    </span>
  );

  const subheader = (
    <span className="weather-card__header-cover">
      <h2 className="weather-card__cover--temperature">{`${temperature}°C`}</h2>
      <p className="weather-card__cover--weather">{weather}</p>
      <p className="weather-card--min-max">{`Humidity ${humidity}%`}</p>
    </span>
  );
  
  return (
    <>
      <Card className="weather-card-content" sx={{ width: 500 }}>
        <CardHeader
          className="weather-card"
          title={header}
          subheader={subheader}
        />
        <CardActions disableSpacing>
          <Typography><span className="weather-card__view-more">View More</span></Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <WeatherList
              weather={weatherList}
              handleOpen={handleOpen}
            />
          </CardContent>
        </Collapse>
      </Card>
      <DailyForecastModal open={open} day={day} dailyForecast={dailyForecast} handleClose={() => handleClose()}/>
    </>
  );
}

export default CityCard;