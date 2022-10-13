import Table from 'react-bootstrap/Table';
import './Table.css';

const RowsData = (props) => {

    const { row } = props

    return (

            <tr>
                <td>{row.fileName}</td>
                <td>{row.text}</td>
                <td>{row.number}</td>
                <td>{row.hex}</td>
            </tr>


    );
}

export default RowsData;