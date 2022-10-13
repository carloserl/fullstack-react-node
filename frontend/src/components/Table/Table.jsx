import Table from 'react-bootstrap/Table';
import RowsData from './Rows';
import './Table.css';



const TableData = (props) => {

  const { data } = props

  return (
    <div className='TableContainer'>
      <Table striped bordered hover>
        <thead className='HeaderTable'>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
            {data && (data.map((e,key) =>  <RowsData row={e} key={key} />))}
        </tbody>
      </Table>
    </div>

  );
}

export default TableData;