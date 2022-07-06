import { createReducer } from '@reduxjs/toolkit';
import { FilterData } from '../../types/filter';
import { changeFilterStatus, changeFilterStrings, changeFilterType, changePriceMax, changePriceMin } from '../action';

const initialState: FilterData = {
  priceMin: '',
  priceMax: '',
  isActive: false,
  guitarType: {
    acoustic: false,
    electric: false,
    ukulele: false,
  },
  strings: {
    fourStrings: false,
    sixStrings: false,
    sevenStrings: false,
    twelveStrings: false,
  },
};

const filterData = createReducer(initialState, (builder) => {
  builder
    .addCase(changePriceMin, (state, action) => {
      const {priceMin} = action.payload;

      state.priceMin = priceMin;
    })
    .addCase(changePriceMax, (state, action) => {
      const {priceMax} = action.payload;

      state.priceMax = priceMax;
    })
    .addCase(changeFilterStatus, (state, action) => {
      const {isActive} = action.payload;

      state.isActive = isActive;
    })
    .addCase(changeFilterType, (state, action) => {
      const {update} = action.payload;

      state.guitarType = {...state.guitarType, ...update};
    })
    .addCase(changeFilterStrings, (state, action) => {
      const {update} = action.payload;

      state.strings = {...state.strings, ...update};
    });
});

export {filterData};
