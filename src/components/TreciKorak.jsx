import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const TreciKorak = ({ page, setPage, data }) => {
  const dalje = () => {
    setPage(() => page + 1);
  };

  const nazad = () => {
    setPage(() => page - 1);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={2} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="ime" secondary={data.ime} />
        </ListItem>
        <ListItem>
          <ListItemText primary="prezime" secondary={data.prezime} />
        </ListItem>
        <ListItem>
          <ListItemText primary="email" secondary={data.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="zanimanje" secondary={data.zanimanje} />
        </ListItem>
        <ListItem>
          <ListItemText primary="grad" secondary={data.grad} />
        </ListItem>
        <ListItem>
          <ListItemText primary="adresa" secondary={data.adresa} />
        </ListItem>
      </List>
      <Button variant="contained" onClick={nazad}>
        Nazad
      </Button>
      <Button variant="contained" onClick={dalje}>
        Dalje
      </Button>
    </>
  );
};

export default TreciKorak;
