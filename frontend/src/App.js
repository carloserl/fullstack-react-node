import {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import TableData from './components/Table/Table';
import {useDispatch,useSelector} from "react-redux"
import { getFiles, getFilesList } from './redux/filesActions';


function App() {

  const disptach = useDispatch()
  const {rows} = useSelector((state)=> state.files)

  useEffect(() => {
    disptach(getFiles())
    disptach(getFilesList())
}, []);

  return (
    <div className="App">
    <Header/> 
     <TableData data={rows} />
    </div>
  );
}

export default App;
