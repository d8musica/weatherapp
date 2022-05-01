import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cityResume: {},
  cityInformation: {},
  cityForecast: [],
  loading: false,
}

export const fetchCityInformation = createAsyncThunk(
  'cities/fetchCityInformation',
  async (cityName, dispatch, getState) => {
    return await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=68dc451d47c9585ed64ee2da84c7b5d2&units=metric`)
    .then((res) => res.data);
  }
)

export const fetchSingleCityInformation = createAsyncThunk(
  'cities/fetchSingleCityInformation',
  async (cityName, dispatch, getState) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=68dc451d47c9585ed64ee2da84c7b5d2&units=metric`)
    .then((res) => res.data);
  }
)

export const citiesReducer = createSlice({
  name: 'cities',
  initialState,
  extraReducers: {
    [fetchCityInformation.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCityInformation.fulfilled]: (state, action) => {
      state.loading = false;
      state.cityInformation = action.payload.city;
      state.cityForecast = action.payload.list;
    },
    [fetchCityInformation.rejected]: (state, action) => {
      alert('No data found')
      state.loading = false;
    },
    [fetchSingleCityInformation.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCityInformation.fulfilled]: (state, action) => {
      state.loading = false;
      state.cityResume = action.payload;
    },
    [fetchSingleCityInformation.rejected]: (state, action) => {
      alert('No data found')
      state.loading = false;
    },
  }
})

export default citiesReducer.reducer
