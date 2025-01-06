// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { loaderReducer } from './slice/loader.slice';
import { themeReducer } from './slice/theme.slice';
import { sidebarReducer } from './slice';
import { dropdownReducer } from './slice/dropdown.slice';

const rootReducer = combineReducers({
  loader: loaderReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  dropdown: dropdownReducer,
});

export default rootReducer;
