import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const DrugiKorak = ({ page, setPage, data, setData }) => {
  const dalje = () => {
    setPage(() => page + 1);
  };

  const nazad = () => {
    setPage(() => page - 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
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
          label="Zanimanje"
          variant="standard"
          value={data.zanimanje}
          onChange={(event) =>
            setData({ ...data, zanimanje: event.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Grad"
          variant="standard"
          value={data.grad}
          onChange={(event) => setData({ ...data, grad: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Adresa"
          variant="standard"
          value={data.adresa}
          onChange={(event) => setData({ ...data, adresa: event.target.value })}
        />
      </div>
      <Button variant="contained" onClick={nazad}>
        Nazad
      </Button>
      <Button variant="contained" onClick={dalje}>
        Dalje
      </Button>
    </>
  );
};

export default DrugiKorak;
