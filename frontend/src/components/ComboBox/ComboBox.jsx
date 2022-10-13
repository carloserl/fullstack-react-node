import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux"
import { getFileByCVS, getFiles } from '../../redux/filesActions';

function ComboBox() {
  const disptach = useDispatch()
  const { fileList } = useSelector((state) => state.files)

  const onChangeCSV = (e)=>{
    const result = e.target.value
    if (result !== 0){
      disptach(getFileByCVS(result))
    }else{
      disptach(getFiles())
    }
  }

  return (
    <Form.Select aria-label="Default select example" onChange={onChangeCSV}>
      <option value="0">Ninguno</option>
      {fileList && (fileList.map((e,key) => {
        return <option key={key} value={e}>{e}</option>
      }))}
    </Form.Select>
  );
}

export default ComboBox;