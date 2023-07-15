import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const PrviKorak = ({ page, setPage, data, setData }) => {
  const dalje = () => {
    setPage(() => page + 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={0} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        <TextField
          id="standard-basic"
          label="Ime"
          variant="standard"
          value={data.ime}
          onChange={(event) => setData({ ...data, ime: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Prezime"
          variant="standard"
          value={data.prezime}
          onChange={(event) =>
            setData({ ...data, prezime: event.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="E-mail"
          variant="standard"
          value={data.email}
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
      </div>
      <Button variant="contained" onClick={dalje}>
        Dalje
      </Button>
    </>
  );
};

export default PrviKorak;
