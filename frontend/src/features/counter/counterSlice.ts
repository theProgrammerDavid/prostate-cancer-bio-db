import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { CounterState } from '../../types';


const initialState: CounterState = {
  value: 0,
  currentPage: 'homepage',
  email: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    loginUser: (state, action: PayloadAction<String>) => {
      state.email = action.payload;
    }

  },
});

export const { setUserCurrentPage, loginUser } = counterSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
export const selectPage = (state: RootState) => state.counter.currentPage;
export const getUser = (state: RootState) => state.counter.email;
export default counterSlice.reducer;
