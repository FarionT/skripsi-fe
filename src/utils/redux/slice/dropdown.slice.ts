import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DropdownOption {
  id: string;
  title: string;
  active?: string;
}

interface DropdownState {
  churches: DropdownOption[];
  statuses: DropdownOption[];
  coordtypes: DropdownOption[];
}

const initialState: DropdownState = {
  churches: JSON.parse(localStorage.getItem('churches') || '[]'),
  statuses: JSON.parse(localStorage.getItem('statuses') || '[]'),
  coordtypes: JSON.parse(localStorage.getItem('coordtypes') || '[]'),
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setChurches: (state, action: PayloadAction<DropdownOption[]>) => {
      state.churches = action.payload;
      localStorage.setItem('churches', JSON.stringify(action.payload));
    },
    setStatuses: (state, action: PayloadAction<DropdownOption[]>) => {
      state.statuses = action.payload;
      localStorage.setItem('statuses', JSON.stringify(action.payload));
    },
    setCoordTypes: (state, action: PayloadAction<DropdownOption[]>) => {
      state.coordtypes = action.payload;
      localStorage.setItem('coordtypes', JSON.stringify(action.payload));
    },
    clearDropdowns: (state) => {
      state.churches = [];
      state.statuses = [];
      state.coordtypes = [];
      localStorage.removeItem('churches');
      localStorage.removeItem('statuses');
      localStorage.removeItem('coordtypes');
    },
  },
});

export const { setStatuses, setChurches, setCoordTypes, clearDropdowns } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;
