import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6521a808a4199548356d7459.mockapi.io";


export const getCarsByPage = createAsyncThunk(
    "cars/getCarsByPage",
    async (page, thunkAPI) => {
        try {
            const response = await axios.get('/adverts/advert', {
                params: {page: page, limit: 8}
            });
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const getAllCars = createAsyncThunk(
    "cars/getAllCars",
    async (_, thunkAPI) => {
        try {
        const response = await axios.get("/adverts/advert");
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);
