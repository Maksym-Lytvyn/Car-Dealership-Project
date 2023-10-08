import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    isFavorite: false,
    isLoading: false,
    error: null,
  },

  reducers: {
    setFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    setIsFavorite: (state, action) => {
        state.isFavorite = action.payload;
      },
    removeFromFavorites: (state, action) => {
        state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
    toggleFavorite: (state, action) => {
        const existingIndex = state.favorites.findIndex(item => item.id === action.payload.id);
        if (existingIndex !== -1) {
          state.favorites.splice(existingIndex, 1);
        } else {
          state.favorites.push(action.payload);
        }
      },
    },
  },
);

export const { setFavorite, setIsFavorite, removeFromFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;