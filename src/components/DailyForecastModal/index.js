// @packages
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// @app
import DailyForecast from '../DailyForecast';

// @own
import { style } from './constants'

const DailyForecastModal = ({
  open,
  handleClose,
  dailyForecast,
  day,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ color: 'white' }} id="modal-modal-title" variant="h6" component="h2">
            Forecast each 3h for the city
          </Typography>
          <DailyForecast day={day} dailyForecast={dailyForecast} />
        </Box>
      </Modal>
    </div>
  );
}

export default DailyForecastModal;
