import { configureStore } from '@reduxjs/toolkit';
import {filesReducer} from "./filesReducer"

export default configureStore({
  reducer: {
    files: filesReducer,
  },
});

