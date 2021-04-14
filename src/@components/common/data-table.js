import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function DataTable({ data, onDelete, onUpdate }) {
    const history = useHistory();
    return (
        <Table striped bordered hover variant="dark" size="sm" responsive className="table-custom">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => history.push(`/users/${item.id}`)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><Button onClick={onUpdate} variant="warning">Update</Button> <Button variant="danger" onClick={onDelete}>Delete</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
