import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const PrviKorak = () => {
  return (
    <>
      <div>
        <TextField id="standard-basic" label="Ime" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" label="Prezime" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" label="E-mail" variant="standard" />
      </div>
    </>
  );
};

export default PrviKorak;
