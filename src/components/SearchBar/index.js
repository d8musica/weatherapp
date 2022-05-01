// @packages
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

// @app
import { fetchCityInformation, fetchSingleCityInformation } from '../../store/slices/citiesReducer';

// @own
import './styles.css';

const SearchBar = () => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  const onSearchClick = () => {
    dispatch(fetchCityInformation(city.toLowerCase()));
    dispatch(fetchSingleCityInformation(city.toLowerCase()));
  }

  return (
    <Stack className="searchbar" spacing={2} sx={{ width: 300 }}>
      <TextField id="demo-helper-text-misaligned-no-helper" label="City" onChange={(event) => setCity(event.target.value)}/>
      <Button sx={{backgroundColor: '#282c34'}} onClick={() => onSearchClick()} variant="contained" endIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}

export default SearchBar;
