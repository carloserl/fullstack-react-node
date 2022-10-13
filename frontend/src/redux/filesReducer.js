import {createSlice, createReducer } from "@reduxjs/toolkit"
import { formatRows } from "../utils/utils";
import { getFileByCVS, getFiles, getFilesList } from "./filesActions"


const initialState = {
    rows: [],
    fileList: [],
    selectFile: null,
  }

// const filestSlice = createSlice({
//     name:"files",
//     initialState,
//     extraReducers:{
//         [getFiles.pending]: (state,action) =>({
//             ...state,
//             loading: true,
//         }),
//         [getFiles.fulfilled]: (state,action) =>({
//             ...state,
//             loading: false,
//             rows: action.payload
//         }),
//         [getFiles.rejected]: (state,action) =>({
//             ...state,
//             loading: false,
//         })
//     }
// })

// export default filestSlice.reducer

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
        rows: action.payload.message === "OK"?  formatRows([action.payload.data]) :[],
      }));
    
  
  
    // builder.addCase(postMonstersData.pending, (state) => ({
    //   ...state,
    //   result: null,
    // }));
  
    // builder.addCase(postMonstersData.rejected, (state) => ({
    //   ...state,
    //   result: null,
    // }));
  
    // builder.addCase(postMonstersData.fulfilled, (state, action) => ({
    //   ...state,
    //   result: action.payload,
    // }));
  
  
    // builder.addCase(setSelectedMonster, (state, action) => ({
    //   ...state,
    //   selectedMonster: action.payload,
    //   result: null
    // }));
  
    // builder.addCase(setSelectedMonsterComputer, (state, action) => ({
    //   ...state,
    //   selectedMonsterComputer: action.payload,
    //   result: null
    // }));
  
  });
  