import { createAsyncThunk } from "@reduxjs/toolkit"


export const getFiles = createAsyncThunk("files/getFiles", async ()=>{
    return await fetch("/be/files/data").then((response) => response.json());
})

export const getFilesList = createAsyncThunk("files/getFilesList", async ()=>{
    return await fetch("/be/files/list").then((response) => response.json());
})

export const getFileByCVS = createAsyncThunk('files/getFilesSearch', async (data)=>{
    return await fetch("/be/files/data?fileName="+data).then((response) => response.json());
})

