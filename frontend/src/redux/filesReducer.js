import {createSlice, createReducer } from "@reduxjs/toolkit"
import { formatRows } from "../utils/utils";
import { getFileByCVS, getFiles, getFilesList } from "./filesActions"

const initialState = {
    rows: [],
    fileList: [],
    selectFile: null,
  }

export const filesReducer = createReducer(initialState, (builder) => {
    builder.addCase(getFiles.pending, (state) => ({
      ...state,
      rows: [],
    }));
  
    builder.addCase(getFiles.rejected, (state) => ({
      ...state,
      rows: [],
    }));
  
    builder.addCase(getFiles.fulfilled, (state, action) => ({
      ...state,
      rows: action.payload.message === "OK"?  formatRows(action.payload.data) :[],
    }));
    builder.addCase(getFilesList.pending, (state) => ({
        ...state,
        fileList: [],
      }));
    
      builder.addCase(getFilesList.rejected, (state) => ({
        ...state,
        fileList: [],
      }));
    
      builder.addCase(getFilesList.fulfilled, (state, action) => ({
        ...state,
        fileList: action.payload.message === "OK"?  action.payload.data :[],
      }));
      builder.addCase(getFileByCVS.pending, (state) => ({
        ...state,
        rows: [],
      }));
    
      builder.addCase(getFileByCVS.rejected, (state) => ({
        ...state,
        rows: [],
      }));
    
      builder.addCase(getFileByCVS.fulfilled, (state, action) => ({
        ...state,
        rows: action.payload.message === "OK"?  formatRows(action.payload.data) :[],
      }));
    
  });
  