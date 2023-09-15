import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Form from "../Form/Form";
import { getItems, deleteItem } from "../../services/AppService";

const Home = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getItems();
      setItems(res.data);
    })();
  }, []);

  const deleteHandler = async (item) => {
    await deleteItem(item._id);
    const newItems = await getItems();
    setItems(newItems.data);
  }

  return (
    <div>
      <TableContainer component={Paper} className="custom-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Participation</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.firstName}
                </TableCell>
                <TableCell align="right">{item.lastName}</TableCell>
                <TableCell align="right">{item.participation}</TableCell>
                <TableCell
                  align="right"
                  onClick={() => deleteHandler(item)}
                >
                  <div className="delete-button">X</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form
          onComplete={async () => {
            setOpen(false);
            const res = await getItems();
            setItems(res.data);
          }}
        />
      </Modal>

      <button onClick={() => setOpen(true)}>Open Modal</button>
    </div>
  );
};

export default Home;
