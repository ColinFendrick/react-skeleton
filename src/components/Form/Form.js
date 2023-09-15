import { useState } from 'react';
import { postItems } from '../../services/AppService';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({ onComplete }) => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [participation, setParticipation] = useState(0);

  return (
    <div className="modal-wrapper" data-testid="form-modal">
      <div className="modal-inner">
        <TextField
          id="outlined-basic"
          label="First Name Field"
          variant="outlined"
          className="text-field"
          value={firstName}
          onChange={(e) => setFirst(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Last Name Field"
          variant="outlined"
          className="text-field"
          value={lastName}
          onChange={(e) => setLast(e.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          className="text-field"
          InputLabelProps={{
            shrink: true,
          }}
          value={participation}
          onChange={(e) => setParticipation(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={async () => {
            try {
              await postItems({ firstName, lastName, participation });
              onComplete();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
